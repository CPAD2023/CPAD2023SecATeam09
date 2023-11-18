package in.ac.bitspilani.wilp.splitter.exception;

import org.springframework.http.HttpStatus;

public class UnmaintainedConnectionException extends BaseException{
    public UnmaintainedConnectionException( String msg) {
        super(HttpStatus.BAD_REQUEST, msg);
    }
}