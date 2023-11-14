package in.ac.bitspilani.wilp.splitter.controller;

import in.ac.bitspilani.wilp.splitter.service.ConnectionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("api/v1/connections/")
@RequiredArgsConstructor
public class ConnectionController {

    private final ConnectionService connectionService;
}
