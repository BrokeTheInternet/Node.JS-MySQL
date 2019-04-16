DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT(11) NOT NULL primary key,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(250) NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (1, "Xbox One", "Electronics", 299.99, 30);
    
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (2, "Playstation 4", "Electronics", 299.99, 30);
    
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (3, "Tom Clancy's: The Division 2", "Video Games", 59.99, 50);
    
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (4, "Halo Infinite", "Video Games", 59.99, 80);
    
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (5, "Apple MacBook Pro", "Computers", 1499.99, 120);
    
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (6, "Microsoft Surface Pro", "Computers", 1199.99, 111);
    
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (7, "iPhone XS Max", "Cell Phones", 899.99, 218);
    
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (8, "Samsung Galaxy S8", "Cell Phones", 699.99, 243);
    
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (9, "GoPro hero 7", "Cameras", 399.99, 188);
    
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (10, "Sony A3000", "Cameras", 469.99, 135);
    
SELECT * FROM products;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '5361869LoL'