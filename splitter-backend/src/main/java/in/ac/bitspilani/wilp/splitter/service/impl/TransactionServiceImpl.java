package in.ac.bitspilani.wilp.splitter.service.impl;

import in.ac.bitspilani.wilp.splitter.repository.TransactionRepository;
import in.ac.bitspilani.wilp.splitter.service.TransactionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
}
