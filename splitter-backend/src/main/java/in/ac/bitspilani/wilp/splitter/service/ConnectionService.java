package in.ac.bitspilani.wilp.splitter.service;

import java.util.List;

import in.ac.bitspilani.wilp.splitter.dto.ConnectionRequestDTO;
import in.ac.bitspilani.wilp.splitter.dto.ConnectionResponseDTO;

public interface ConnectionService {
    ConnectionResponseDTO sendConnectionRequest(final ConnectionRequestDTO connectionDTO);

    List<ConnectionResponseDTO> getConnectionList(final String userId);

    ConnectionResponseDTO updateConnection(final String connectionId, final ConnectionRequestDTO connectionDTO);
}
