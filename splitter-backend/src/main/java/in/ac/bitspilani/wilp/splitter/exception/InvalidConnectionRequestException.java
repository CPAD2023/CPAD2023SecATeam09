package in.ac.bitspilani.wilp.splitter.exception;

import org.springframework.http.HttpStatus;

public class InvalidConnectionRequestException extends BaseException{

    public InvalidConnectionRequestException( String msg) {
        super(HttpStatus.BAD_REQUEST, msg);
    }
}
