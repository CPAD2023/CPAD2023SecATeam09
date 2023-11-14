package in.ac.bitspilani.wilp.splitter.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class BaseException extends RuntimeException {

    private final HttpStatus status;

    public BaseException(HttpStatus status, String msg) {
        super(msg);
        this.status = status;
    }
}

