--キャラ一覧テーブル
CREATE TABLE IF NOT EXISTS charlist(
	title VARCHAR(20) ,
	name VARCHAR(20) ,
	race VARCHAR(10) NOT NULL,
	ability1 VARCHAR(50) ,
	ability2 VARCHAR(50) ,
	detail VARCHAR(1000),
	PRIMARY KEY(title,name)
	);