package in.ac.bitspilani.wilp.splitter.service;

import in.ac.bitspilani.wilp.splitter.dto.TransactionDTO;

import java.util.List;

public interface TransactionService {
    TransactionDTO createTransaction(final TransactionDTO transactionDTO);

    TransactionDTO getTransactionDetails(final String transactionId);
    List<TransactionDTO> getTransactionsByUserId(final String userId);
    List<TransactionDTO> getTransactionsBetweenUsers(final String userId1, final String userId2);

    TransactionDTO updateTransaction(final String transactionId, final TransactionDTO transactionDTO);
}
