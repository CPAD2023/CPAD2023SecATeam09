package in.ac.bitspilani.wilp.splitter.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDTO {
    private String userId;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String upiId;
    private String pass;
}