BEGIN;

CREATE TABLE authors(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    country_id INT
);
INSERT INTO migrations (name)
VALUES ('202110231234_create_authors');

COMMIT;