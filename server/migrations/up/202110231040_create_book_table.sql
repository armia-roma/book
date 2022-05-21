BEGIN;

CREATE TABLE book (
    book_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    total_pages VARCHAR(250) NOT NULL,
    year date, 
    author_id INT,
    category_id INT NOT NULL,
    description VARCHAR(255)  
);
INSERT INTO migrations (name)
VALUES ('202110231040_create_book_table');

COMMIT;