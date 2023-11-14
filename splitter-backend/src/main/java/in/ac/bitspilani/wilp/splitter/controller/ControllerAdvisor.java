package in.ac.bitspilani.wilp.splitter.controller;

import in.ac.bitspilani.wilp.splitter.dto.ApiErrorDTO;
import in.ac.bitspilani.wilp.splitter.exception.DuplicateEntryExistsException;
import in.ac.bitspilani.wilp.splitter.exception.UserNotExistException;
import in.ac.bitspilani.wilp.splitter.exception.WrongCredentialsException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class ControllerAdvisor extends ResponseEntityExceptionHandler {
    @ExceptionHandler(DuplicateEntryExistsException.class)
    public ResponseEntity<ApiErrorDTO> handleDuplicateDataException (DuplicateEntryExistsException e, final HttpServletRequest request) {

        ApiErrorDTO apiErrorDTO = new ApiErrorDTO(e.getStatus(), LocalDateTime.now(), e.getMessage(), request.getRequestURI());
        return new ResponseEntity<>(apiErrorDTO, e.getStatus());
    }

    @ExceptionHandler(WrongCredentialsException.class)
    public ResponseEntity<ApiErrorDTO> wrongCredentialException (WrongCredentialsException e, final HttpServletRequest request) {
        ApiErrorDTO apiErrorDTO = new ApiErrorDTO(e.getStatus(), LocalDateTime.now(), e.getMessage(), request.getRequestURI());
        return new ResponseEntity<>(apiErrorDTO, e.getStatus());
    }

    @ExceptionHandler(UserNotExistException.class)
    public ResponseEntity<ApiErrorDTO> handleUserNotFoundException(UserNotExistException e, final HttpServletRequest request) {
        ApiErrorDTO apiErrorDTO = new ApiErrorDTO(e.getStatus(), LocalDateTime.now(), e.getMessage(), request.getRequestURI());
        return new ResponseEntity<>(apiErrorDTO, e.getStatus());
    }
}
