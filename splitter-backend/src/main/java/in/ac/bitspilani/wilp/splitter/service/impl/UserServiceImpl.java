package in.ac.bitspilani.wilp.splitter.service.impl;

import in.ac.bitspilani.wilp.splitter.repository.UserRepository;
import in.ac.bitspilani.wilp.splitter.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
}
