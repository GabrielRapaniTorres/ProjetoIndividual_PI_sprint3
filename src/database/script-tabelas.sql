-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE aquatech;

USE aquatech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('primeiroEstilo', 'rock');
insert into empresa (razao_social, codigo_ativacao) values ('segundoEstilo', 'sertanejo');
insert into empresa (razao_social, codigo_ativacao) values ('terceiroEstilo', 'classico');
insert into empresa (razao_social, codigo_ativacao) values ('quartoEstilo', 'mpb');
insert into empresa (razao_social, codigo_ativacao) values ('quintoEstilo', 'alternativo');
insert into empresa (razao_social, codigo_ativacao) values ('sextoEstilo', 'jazz');

insert into aquario (descricao, fk_empresa) values ('primeiroEstilo', 1);
insert into aquario (descricao, fk_empresa) values ('segundoEstilo', 2);
insert into aquario (descricao, fk_empresa) values ('terceiroEstilo', 3);
insert into aquario (descricao, fk_empresa) values ('quartoEstilo', 4);
insert into aquario (descricao, fk_empresa) values ('quintoEstilo', 5);
insert into aquario (descricao, fk_empresa) values ('sextoEstilo', 6);