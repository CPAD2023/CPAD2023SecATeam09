package in.ac.bitspilani.wilp.splitter.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiErrorDTO {

    private HttpStatus status;
    private LocalDateTime timestamp;
    private String message;
    private String path;
}