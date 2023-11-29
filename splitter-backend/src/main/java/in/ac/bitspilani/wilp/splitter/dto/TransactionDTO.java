package in.ac.bitspilani.wilp.splitter.dto;

import in.ac.bitspilani.wilp.splitter.enums.TransactionType;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TransactionDTO {
    private String transactionId;
    private String paidBy;
    private String description;
    private Float totalAmount;
    private LocalDateTime timestamp;
    private TransactionType transactionType;
    private Map<String, TransactionDetailsDTO> userTransactionDetails;
}
