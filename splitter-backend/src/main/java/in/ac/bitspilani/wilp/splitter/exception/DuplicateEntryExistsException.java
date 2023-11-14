package in.ac.bitspilani.wilp.splitter.exception;

import org.springframework.http.HttpStatus;

public class DuplicateEntryExistsException extends BaseException{
    public DuplicateEntryExistsException(String msg) {
        super(HttpStatus.BAD_REQUEST,msg);
    }
}
