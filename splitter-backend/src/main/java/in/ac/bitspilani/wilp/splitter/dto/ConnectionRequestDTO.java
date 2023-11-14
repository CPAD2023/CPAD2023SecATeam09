package in.ac.bitspilani.wilp.splitter.dto;

import in.ac.bitspilani.wilp.splitter.enums.ConnectionStatus;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ConnectionRequestDTO {
    private String connectionId;
    private String user1Id;
    private String user2Id;
    private ConnectionStatus status;
}
