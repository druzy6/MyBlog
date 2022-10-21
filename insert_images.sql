DELIMITER $$
CREATE PROCEDURE `insert_image` ( entered_src VARCHAR(256), entered_img_file LONGBLOB)	
BEGIN
	insert into images (src, img_file) Values(entered_src, entered_img_file);
END$$
DELIMITER;
