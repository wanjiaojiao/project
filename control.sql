SET NAMES UTF8;
DROP DATABASE IF EXISTS control;
CREATE DATABASE control CHARSET=UTF8;
USE `control`;
DROP TABLE IF EXISTS `person`;
CREATE TABLE person (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ename` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` int(11) DEFAULT NULL,
  `professional` varchar(255) DEFAULT NULL,PRIMARY KEY (`id`)
);
INSERT INTO `person` VALUES ('1', '武大', '25','1', '计算机科学与技术');
INSERT INTO `person` VALUES ('2', '王二', '25','0', '计算机科学与技术');
INSERT INTO `person` VALUES ('3', '张三', '25','0', '计算机科学与技术');
INSERT INTO `person` VALUES ('4', '李四', '25','1', '计算机科学与技术');
INSERT INTO `person` VALUES ('5', '孙五', '25','0', '计算机科学与技术');
INSERT INTO `person` VALUES ('6', '钱六', '25','1', '计算机科学与技术');
INSERT INTO `person` VALUES ('7', '赵七', '25','1', '计算机科学与技术');
INSERT INTO `person` VALUES ('8', '刘八', '25','1', '计算机科学与技术');
INSERT INTO `person` VALUES ('9', '张九', '25','0', '计算机科学与技术');
INSERT INTO `person` VALUES ('10', '郑十', '25','1', '计算机科学与技术');

DROP TABLE IF EXISTS `reg`;
CREATE TABLE `reg` (
    `uid` int(11) NOT NULL,
     `uname` varchar(32) DEFAULT NULL,
     `upwd` varchar(32) DEFAULT NULL,
     `email` varchar(64) DEFAULT NULL,
     `phone` varchar(16) DEFAULT NULL
);
  INSERT INTO `reg` (`uid`, `uname`,`upwd`,`email`, `phone`) VALUES
  (1, 'dingding', '123456','ding@qq.com','13456354332'),
  (2, 'dangdang', '123456','dang@qq.com','14322354332'),
  (3, 'dada', '11212456', 'da@qq.com', '13501234567');