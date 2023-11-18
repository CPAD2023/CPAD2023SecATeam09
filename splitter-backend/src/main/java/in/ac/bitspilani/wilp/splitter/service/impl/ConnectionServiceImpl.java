package in.ac.bitspilani.wilp.splitter.service.impl;

import in.ac.bitspilani.wilp.splitter.dto.ConnectionRequestDTO;
import in.ac.bitspilani.wilp.splitter.dto.ConnectionResponseDTO;
import in.ac.bitspilani.wilp.splitter.enums.ConnectionStatus;
import in.ac.bitspilani.wilp.splitter.exception.DuplicateEntryExistsException;
import in.ac.bitspilani.wilp.splitter.exception.InvalidConnectionRequestException;
import in.ac.bitspilani.wilp.splitter.exception.UnmaintainedConnectionException;
import in.ac.bitspilani.wilp.splitter.model.Connection;
import in.ac.bitspilani.wilp.splitter.model.User;
import in.ac.bitspilani.wilp.splitter.repository.ConnectionRepository;
import in.ac.bitspilani.wilp.splitter.repository.UserRepository;
import in.ac.bitspilani.wilp.splitter.service.ConnectionService;
import in.ac.bitspilani.wilp.splitter.util.GeneralUtils;
import in.ac.bitspilani.wilp.splitter.util.Constants;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ConnectionServiceImpl implements ConnectionService {
    private final ConnectionRepository connectionRepository;
    private final UserRepository userRepository;
    @Override
    public ConnectionResponseDTO sendConnectionRequest(ConnectionRequestDTO connectionDTO) {

        if (connectionDTO.getUser1Id().equals(connectionDTO.getUser2Id())) {
            throw new InvalidConnectionRequestException("");
        }

        Optional<Connection> oldConnection =  connectionRepository
                .findConnectionsBetweenUsers(connectionDTO.getUser1Id(), connectionDTO.getUser2Id());

        if (oldConnection.isPresent() && !oldConnection.get().getStatus().equals(ConnectionStatus.REMOVED)) {
            throw new DuplicateEntryExistsException
                    (Constants.CONNECTION_ALREADY_EXIST_MSG + oldConnection.get().getStatus());
        }

        Connection newConnection = GeneralUtils.buildConnection(connectionDTO, ConnectionStatus.AWAITING);
        newConnection = connectionRepository.save(newConnection);
        List<User> userList = userRepository.findAllById(Arrays.asList(newConnection.getUser1Id(), newConnection.getUser2Id()));
        return GeneralUtils.buildConnectionResponseDTO(newConnection, userList);
    }

    @Override
    public List<ConnectionResponseDTO> getConnectionList(String userId) {
        List<Connection> connectionList = connectionRepository.findAllByUserId(new ObjectId(userId));
        List<ConnectionResponseDTO> connectionResponseDTOList = new ArrayList<>();
        for (Connection connection : connectionList) {
            List<User> userList = userRepository.findAllById(Arrays.asList(connection.getUser1Id(), connection.getUser2Id()));
            ConnectionResponseDTO connectionResponseDTO = GeneralUtils.buildConnectionResponseDTO(connection, userList);
            connectionResponseDTOList.add(connectionResponseDTO);
        }
        return connectionResponseDTOList;
    }

    @Override
    public ConnectionResponseDTO updateConnection(String connectionId, ConnectionRequestDTO connectionDTO) {
        Optional<Connection> optionalConnection = connectionRepository.findById(new ObjectId(connectionId));
        if (optionalConnection.isEmpty()) {
            throw new UnmaintainedConnectionException(Constants.NO_SUCH_CONNECTION_EXIST_MSG);
        }
        Connection connection = optionalConnection.get();
        connection.setStatus(connectionDTO.getStatus());
        connection = connectionRepository.save(connection);
        List<User> userList = userRepository.findAllById(Arrays.asList(connection.getUser1Id(), connection.getUser2Id()));
        return GeneralUtils.buildConnectionResponseDTO(connection, userList);
    }
}
