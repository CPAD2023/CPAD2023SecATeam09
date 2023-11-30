package in.ac.bitspilani.wilp.splitter.service;

import in.ac.bitspilani.wilp.splitter.dto.LoginDTO;
import in.ac.bitspilani.wilp.splitter.dto.UserDTO;

import java.util.List;
import java.util.UUID;

public interface UserService {

    UserDTO createUser (final UserDTO userDTO);
    UserDTO loginUser (final LoginDTO loginDTO);

    UserDTO readUserData (final UUID userId);
    UserDTO searchUser(final String queryParam);
    List<UserDTO> getUserDetails(final List<String> userIds);
}

