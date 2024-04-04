CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  nickname VARCHAR(100) NOT NULL
);

INSERT INTO user (email, hashed_password, nickname) VALUES ('admin@gmail.com', '$argon2id$v=19$m=19456,t=2,p=1$qzWosbo3+hIDMnFIqxd/fg$lSdNbfxb7GNdiq0E0KXsqXSGh1C7jQSGR7ryqKpqawE', 'admin');

CREATE TABLE publish (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  image VARCHAR(255) NOT NULL,
  description TEXT,
  id_user INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES user(id)
);

INSERT INTO publish (image, description, id_user) VALUES ('https://cdn.motor1.com/images/mgl/8LAjo/s1/2020-nissan-gt-r-nismo.jpg', 'Voici la voiture de mes rêves', 1);