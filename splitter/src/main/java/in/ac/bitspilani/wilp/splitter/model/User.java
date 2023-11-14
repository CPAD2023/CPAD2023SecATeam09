package in.ac.bitspilani.wilp.splitter.model;

import in.ac.bitspilani.wilp.splitter.util.Constants;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Document(collection = Constants.USERS)
public class User {

    @Id
    @Field(Constants.ID)
    private ObjectId userId;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String hashedPass;
    private String hashKey;
    private String upiId;
}
