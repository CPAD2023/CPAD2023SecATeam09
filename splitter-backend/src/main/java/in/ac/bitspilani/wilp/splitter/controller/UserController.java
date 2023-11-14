package in.ac.bitspilani.wilp.splitter.controller;

import in.ac.bitspilani.wilp.splitter.service.ConnectionService;
import in.ac.bitspilani.wilp.splitter.service.TransactionService;
import in.ac.bitspilani.wilp.splitter.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("api/v1/users/")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final ConnectionService connectionService;
    private final TransactionService transactionService;
}
