package in.ac.bitspilani.wilp.splitter.exception;

import org.springframework.http.HttpStatus;

public class InvalidDataException extends BaseException {
    public InvalidDataException(String msg) {
        super(HttpStatus.BAD_REQUEST, msg);
    }
}
