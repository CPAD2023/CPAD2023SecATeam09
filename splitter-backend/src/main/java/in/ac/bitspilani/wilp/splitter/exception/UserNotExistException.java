package in.ac.bitspilani.wilp.splitter.exception;

import org.springframework.http.HttpStatus;

public class UserNotExistException extends BaseException {
    public UserNotExistException( String msg) {
        super(HttpStatus.NOT_FOUND, msg);
    }
}
