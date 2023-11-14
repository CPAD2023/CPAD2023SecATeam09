package in.ac.bitspilani.wilp.splitter.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import in.ac.bitspilani.wilp.splitter.util.Constants;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Document(collection = Constants.TRANSACTIONS)
public class Transaction {

    @Id
    @Field(Constants.ID)
    private ObjectId transactionId;
    private ObjectId paidBy;
    private String description;
    private Float totalAmount;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = Constants.TIMESTAMP_FORMAT)
    private LocalDateTime timestamp;
    private List<TransactionDetails> users;



}
