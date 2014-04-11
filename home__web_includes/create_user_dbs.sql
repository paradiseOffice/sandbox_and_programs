/*
  root: $Efd8ksdjfeh458934
  coconut: (admin)  / INSERT UPDATE SELECT
  
  CREATE USER 'coconut'@'localhost' IDENTIFIED BY '[see local-dev-server]';
  GRANT SELECT, INSERT, UPDATE ON paradiseOffice.* TO 'coconut'@'localhost';
  
*/
CREATE DATABASE paradiseOffice;
USE paradiseOffice;

CREATE TABLE users (
       custID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
       fName VARCHAR(20) NOT NULL,
       lName VARCHAR(25) NOT NULL,
       company VARCHAR(40),
       email VARCHAR(100) NOT NULL,
       uName VARCHAR(25) NOT NULL,
       password VARCHAR(300) NOT NULL,
       salt VARCHAR(300) NOT NULL
);
CREATE TABLE programs (
       progID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
       name VARCHAR(20) NOT NULL,
       url VARCHAR(250),
       tagline VARCHAR(100) NOT NULL,
       description TEXT,
       icon VARCHAR(200),
       dateCreated DATE NOT NULL,
       price NUMERIC DEFAULT '0.00',
       status ENUM("alpha", "beta", "stable") NOT NULL,
       versionNo VARCHAR(15)
);
CREATE TABLE custPrograms (
       custProgID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
       custID INT NOT NULL,
       progID INT NOT NULL,
       FOREIGN KEY (custID) REFERENCES users(custID),
       FOREIGN KEY (progID) REFERENCES programs(progID)
);

CREATE TABLE login_attempts (
  userid INT(11) NOT NULL,
  time VARCHAR(30) NOT NULL
);

