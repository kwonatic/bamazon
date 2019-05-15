DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INTEGER(20) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(20) NOT NULL,
department_name VARCHAR(20) NOT NULL,
price VARCHAR(20) NOT NULL,
stock_quantity VARCHAR(20) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("Nintendo Switch", "Electronics", 299, 10),
("Water Bottle", "Beverage", 1, 200),
("Ball", "Sports Goods", 15, 250);



