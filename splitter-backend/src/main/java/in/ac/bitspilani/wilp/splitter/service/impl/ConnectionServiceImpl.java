package in.ac.bitspilani.wilp.splitter.service.impl;

import in.ac.bitspilani.wilp.splitter.repository.ConnectionRepository;
import in.ac.bitspilani.wilp.splitter.repository.UserRepository;
import in.ac.bitspilani.wilp.splitter.service.ConnectionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ConnectionServiceImpl implements ConnectionService {
    private final ConnectionRepository connectionRepository;
    private final UserRepository userRepository;
}
