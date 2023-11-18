package in.ac.bitspilani.wilp.splitter.controller;

import in.ac.bitspilani.wilp.splitter.dto.ConnectionRequestDTO;
import in.ac.bitspilani.wilp.splitter.dto.ConnectionResponseDTO;
import in.ac.bitspilani.wilp.splitter.service.ConnectionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("api/v1/connections/")
@RequiredArgsConstructor
public class ConnectionController {

    private final ConnectionService connectionService;

    @PostMapping
    public ResponseEntity<ConnectionResponseDTO> sendConnectionRequest(@RequestBody final ConnectionRequestDTO connectionDTO) {
        ConnectionResponseDTO newConnection = connectionService.sendConnectionRequest(connectionDTO);
        return new ResponseEntity<>(newConnection, HttpStatus.CREATED);
    }

    @PatchMapping("{connectionId}")
    public ResponseEntity<ConnectionResponseDTO> updateConnection(
            @PathVariable("connectionId") final String connectionId,
            @RequestBody final ConnectionRequestDTO connectionDTO) {
        ConnectionResponseDTO responseDTO = connectionService.updateConnection(connectionId, connectionDTO);
        return new ResponseEntity<>(responseDTO, HttpStatus.ACCEPTED);
    }
}
