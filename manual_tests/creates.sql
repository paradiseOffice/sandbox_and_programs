CREATE TABLE manTesting (
       testID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
       app VARCHAR(30) NOT NULL,
       category VARCHAR(30) NOT NULL,
       descr TEXT NOT NULL,
       status ENUM("PASS", "FAIL")
);
