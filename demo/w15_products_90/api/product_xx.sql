CREATE TABLE product_xx (
    id int NOT NULL PRIMARY KEY,
    title varchar(255),
    price real,
    category varchar(255),
    img varchar(255),
    remote_img varchar(255)
)

INSERT INTO product_xx (id, title, price, category, img, remote_url)
VALUES
(7, 'Albany Sectional', 10.99, 'Ikea', './images/product-7.jpg', ''),
(8, 'Sofa Set', 69.99, 'Liddy', './images/product-8.jpg', ''),
(9, 'Utopia Sofa', 69.99, 'Liddy', './images/product-9.jpg', ''),
(10, 'Modern Bookshelf', 8.99, 'Marcos', './images/product-10.jpg', ''),
(11, 'Albany Table', 79.99, 'Marcos', './images/product-11.jpg', ''),
(12, 'Leather Sofa', 39.95, 'Liddy', './images/product-22.jpg', ''),
(1, 'Emperor Bed', 21.99, 'Liddy', './images/product-1.jpg', ''),
(2, 'Accent Chair', 25.99, 'Caressa', './images/product-2.jpg', '')


INSERT INTO product_xx (id, title, price, category, img, remote_url)
VALUES
(20, 'Nathan Sofa', 88.99, 'Ikea', './images/product-20.jpg', 'https://sldvcsgcmhhgtrjjccxd.supabase.co/storage/v1/object/public/demo/1122/nathan-fertig-FBXuXp57eM0-unsplash.jpg'),

INSERT INTO product_xx (id, title, price, category, img, remote_url)
VALUES
(1, 'Emperor Bed', 21.99, 'Liddy', './images/product-1.jpg', ''),
(2, 'Accent Chair', 25.99, 'Caressa', './images/product-2.jpg', ''),
(3, 'High-Back Bench', 9.99, 'Ikea', './images/product-3.jpg', ''),
(4, 'Wooden Table', 19.99, 'Ikea', './images/product-4.jpg', ''),
(5, 'Dining Table', 69.99, 'Caressa', './images/product-5.jpg', ''),
(6, 'Entertainmint Center', 25.99, 'Liddy', './images/product-6.jpg', ''),
(7, 'Albany Sectional', 10.99, 'Ikea', './images/product-7.jpg', ''),
(8, 'Sofa Set', 69.99, 'Liddy', './images/product-8.jpg', ''),
(9, 'Utopia Sofa', 69.99, 'Liddy', './images/product-9.jpg', ''),
(10, 'Modern Bookshelf', 8.99, 'Marcos', './images/product-10.jpg', ''),
(11, 'Albany Table', 79.99, 'Marcos', './images/product-11.jpg', ''),
(12, 'Leather Sofa', 39.95, 'Liddy', './images/product-22.jpg', '')