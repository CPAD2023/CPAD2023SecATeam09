package in.ac.bitspilani.wilp.splitter.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ConnectionResponseUserDTO {
    private String userId;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String upiId;
}
