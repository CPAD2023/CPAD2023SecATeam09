package in.ac.bitspilani.wilp.splitter.model;

import in.ac.bitspilani.wilp.splitter.enums.ConnectionStatus;
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
@ToString
@Document(collection = Constants.CONNECTIONS)
public class Connection {
    @Id
    @Field(Constants.ID)
    private ObjectId connectionId;
    private ObjectId user1Id;
    private ObjectId user2Id;
    private ConnectionStatus status;

}
