package in.ac.bitspilani.wilp.splitter.exception;

import org.springframework.http.HttpStatus;

public class WrongCredentialsException extends BaseException {
    public WrongCredentialsException(String msg) {
        super(HttpStatus.BAD_REQUEST,msg);
    }
}
