package in.ac.bitspilani.wilp.splitter.dto;

import in.ac.bitspilani.wilp.splitter.enums.TransactionStatus;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TransactionDetailsDTO {
    private Float amount;
    private TransactionStatus status;
}
