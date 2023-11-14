package in.ac.bitspilani.wilp.splitter.util;

public interface Constants {
    // DB CONSTANTS
    String USERS = "users";
    String CONNECTIONS = "connections";
    String TRANSACTIONS = "transactions";

    // APP CONSTANTS
    String ID = "_id";
    String TIMESTAMP_FORMAT = "dd-MM-yyyy hh:mm:ss";

    // EXCEPTION CONSTANTS
    String WRONG_CREDENTIALS_MSG = "Wrong Credentials";
    String PHONE_NUMBER_ALREADY_EXIST_MSG = "Given Phone Number is already exist with an user. Please user another phone number.";
    String UPI_ID_ALREADY_EXIST_MSG = "Given UPI ID is already exist with an user. Please user another UPI ID.";
    String EMAIL_ALREADY_EXIST_MSG = "Given Email is already exist with an user. Please user another email address.";
    String USER_DOES_NOT_EXIST_MSG = " not found!";

    String CONNECTION_ALREADY_EXIST_MSG = "Connection already exist with status ";
    String NO_SUCH_CONNECTION_EXIST_MSG = "No such connection exist.";
    String INVALID_AMOUNT_MSG = "Amount cannot be negative or zero. Provide a valid amount.";
}
