package in.ac.bitspilani.wilp.splitter.model;

import in.ac.bitspilani.wilp.splitter.enums.TransactionStatus;
import lombok.*;
import org.bson.types.ObjectId;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class TransactionDetails {
    private ObjectId userId;
    private Float amount;
    private TransactionStatus status;
}
