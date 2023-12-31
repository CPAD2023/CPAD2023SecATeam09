package in.ac.bitspilani.wilp.splitter.repository;

import in.ac.bitspilani.wilp.splitter.model.Transaction;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends MongoRepository<Transaction, ObjectId> {
    List<Transaction> findAllByUsersUserIdOrderByTimestampDesc(ObjectId userId);
    List<Transaction> findAllByPaidByAndUsersUserId(ObjectId userId1, ObjectId userId2);
}
