package in.ac.bitspilani.wilp.splitter.repository;

import in.ac.bitspilani.wilp.splitter.model.Connection;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ConnectionRepository extends MongoRepository<Connection, ObjectId> {

    /*
     * Query to get the connection between users
     * where clause is having condition {(user1="u1" and user2="u2") or (user1="u2" and user2="u1")}
     */
    @Query("{ $or: [ { $and: [ { 'user1Id': ?0 }, { 'user2Id': ?1 } ] }, { $and: [ { 'user1Id': ?1 }, { 'user2Id': ?0 } ] } ] }")
    Optional<Connection> findConnectionsBetweenUsers(ObjectId user1Id, ObjectId user2Id);

    @Query("{ $or: [ { 'user1Id': ?0 }, { 'user2Id': ?0 } ] }")
    List<Connection> findAllByUserId(ObjectId userId);
}
