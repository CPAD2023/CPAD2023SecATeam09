package in.ac.bitspilani.wilp.splitter.controller;

import in.ac.bitspilani.wilp.splitter.dto.TransactionDTO;
import in.ac.bitspilani.wilp.splitter.service.TransactionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/v1/transactions")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping
    public ResponseEntity<TransactionDTO> createTransaction (@RequestBody final TransactionDTO transactionDTO){
        TransactionDTO txnDTO = transactionService.createTransaction(transactionDTO);
        return new ResponseEntity<>(txnDTO, HttpStatus.CREATED);
    }

    @PutMapping("/{transactionId}")
    public ResponseEntity<TransactionDTO> updateTransaction (
            @PathVariable final String transactionId,
            @RequestBody final TransactionDTO transactionDTO) {
        TransactionDTO updatedTransactionDTO = transactionService.updateTransaction(transactionId,transactionDTO);
        return  new ResponseEntity<>(updatedTransactionDTO, HttpStatus.ACCEPTED);
    }

    @GetMapping
    public ResponseEntity<List<TransactionDTO>> getAllTransactionBetweenTwoUsers(
            @RequestParam(name = "user1Id") String user1Id,
            @RequestParam(name = "user2Id") String user2Id ) {
        List<TransactionDTO> transactionDTOList = transactionService.getTransactionsBetweenUsers(user1Id, user2Id);
        return new ResponseEntity<>(transactionDTOList, HttpStatus.OK);
    }

    @GetMapping("/{transactionId}")
    public ResponseEntity<TransactionDTO> getTransactionDetails (@PathVariable final String transactionId) {
        TransactionDTO transactionDTO = transactionService.getTransactionDetails(transactionId);
        return new ResponseEntity<>(transactionDTO, HttpStatus.OK);
    }
}
