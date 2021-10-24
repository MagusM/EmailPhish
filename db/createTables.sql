CREATE TABLE Users (
    id SERIAL,
    name varchar(255),
    email varchar(255),
  	password varchar(255),
	created Time,
	last_login Time,
    Primary key(id),
);

CREATE TABLE Emails (
    id SERIAL,
    user_id integer,
    email varchar(255),
  	status integer,
	sentTime Time,
	Primary key(id),
	CONSTRAINT userConst
      FOREIGN KEY(user_id) 
	  REFERENCES Users(id)
	  ON DELETE SET NULL
);