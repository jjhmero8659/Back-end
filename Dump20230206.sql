-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: bootdb
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `notebook`
--

DROP TABLE IF EXISTS `notebook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notebook` (
  `id` int NOT NULL,
  `ranking` int DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  `gpa` float DEFAULT '0',
  `pExplan_image1` varchar(200) DEFAULT NULL,
  `pExplan_image2` varchar(200) DEFAULT NULL,
  `pExplan_image3` varchar(200) DEFAULT NULL,
  `pro_image1` varchar(200) DEFAULT NULL,
  `pro_image2` varchar(200) DEFAULT NULL,
  `iframe1` varchar(200) DEFAULT NULL,
  `iframe2` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notebook`
--

LOCK TABLES `notebook` WRITE;
/*!40000 ALTER TABLE `notebook` DISABLE KEYS */;
INSERT INTO `notebook` VALUES (1,1,'LG전자 그램 20년형 17인치 i5',4.4,'./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5.jpg','./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5_2.jpg',NULL,'/img/Notebook/Notebook_detail/LG_gram_20_17_i5_2.jpg','/img/Notebook/Notebook_detail/LG_gram_20_17_i5.jpg','https://www.youtube.com/embed/hUCKW8YUkGM','https://www.youtube.com/embed/oUzRG2Mq9f0'),(2,2,'삼성전자 갤럭시북 플렉스 13인치 i5',4.5,'./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5.jpg','./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5_2.jpg',NULL,'/img/notebook/flex13_i5_1.jpg','/img/notebook/flex13_i5_2.jpg','https://www.youtube.com/embed/hUCKW8YUkGM','https://www.youtube.com/embed/oUzRG2Mq9f0'),(3,3,'LG전자 그램 20년형 14인치 i5',4.3,'./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5.jpg','./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5_2.jpg',NULL,'/img/notebook/gram_20_14_1.jpg','/img/notebook/gram_20_14_1.jpg','https://www.youtube.com/embed/hUCKW8YUkGM','https://www.youtube.com/embed/oUzRG2Mq9f0'),(4,4,'삼성전자 갤럭시북 플렉스 13인치 i7',4.1,'./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5.jpg','./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5_2.jpg',NULL,'/img/notebook/flex13_i7_1.jpg','/img/notebook/flex13_i7_2.jpg','https://www.youtube.com/embed/hUCKW8YUkGM','https://www.youtube.com/embed/oUzRG2Mq9f0'),(5,5,'삼성전자 갤럭시북 이온 15인치 i5 MX250',3.9,'./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5.jpg','./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5_2.jpg',NULL,'/img/notebook/ion_15_i5MX250_1.jpg','/img/notebook/ion_15_i5MX250_2.jpg','https://www.youtube.com/embed/hUCKW8YUkGM','https://www.youtube.com/embed/oUzRG2Mq9f0'),(6,6,'MSI GP시리즈 GP76 Leopard 11UG',5,'./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5.jpg','./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5_2.jpg',NULL,'/img/notebook/msi_GP76_1.jpg','/img/notebook/msi_GP76_2.jpg','https://www.youtube.com/embed/hUCKW8YUkGM','https://www.youtube.com/embed/oUzRG2Mq9f0'),(7,7,'주연테크 리오나인 젠 L8CS37',4,'./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5.jpg','./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5_2.jpg',NULL,'/img/notebook/tech_L8CS37_1.jpg','/img/notebook/tech_L8CS37_2.jpg','https://www.youtube.com/embed/hUCKW8YUkGM','https://www.youtube.com/embed/oUzRG2Mq9f0'),(8,8,'MSI 모던시리즈 모던15 A11M-i5 카본 그레이',3,'./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5.jpg','./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5_2.jpg',NULL,'/img/notebook/A11M-i5_1.jpg','/img/notebook/A11M-i5_2.jpg','https://www.youtube.com/embed/hUCKW8YUkGM','https://www.youtube.com/embed/oUzRG2Mq9f0'),(9,9,'레노버 V15 Gen2 82KD000UKR 8GB램',4.1,'./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5.jpg','./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5_2.jpg',NULL,'/img/notebook/82KD000UKR_1.jpg','/img/notebook/82KD000UKR_2.jpg','https://www.youtube.com/embed/hUCKW8YUkGM','https://www.youtube.com/embed/oUzRG2Mq9f0'),(10,10,'에이서 니트로 5 AN515-58-71Z5',4,'./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5.jpg','./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5_2.jpg',NULL,'/img/notebook/AN515-58-71Z5_1.jpg','/img/notebook/AN515-58-71Z5_2.jpg','https://www.youtube.com/embed/hUCKW8YUkGM','https://www.youtube.com/embed/oUzRG2Mq9f0'),(11,11,'주연테크 리오나인 젠 L6CS36',4,'./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5.jpg','./img/Notebook/Notebook_spec_image/LG_gram_20_17_i5_2.jpg',NULL,'/img/notebook/L6CS36_1.jpg','/img/notebook/L6CS36_2.jpg','https://www.youtube.com/embed/hUCKW8YUkGM','https://www.youtube.com/embed/oUzRG2Mq9f0');
/*!40000 ALTER TABLE `notebook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notebookprice`
--

DROP TABLE IF EXISTS `notebookprice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notebookprice` (
  `id` int NOT NULL,
  `haemil` varchar(100) DEFAULT NULL,
  `wemake` varchar(100) DEFAULT NULL,
  `interpark` varchar(100) DEFAULT NULL,
  `_11st` varchar(100) DEFAULT NULL,
  `lotte` varchar(100) DEFAULT NULL,
  `auction` varchar(100) DEFAULT NULL,
  `gmarcket` varchar(100) DEFAULT NULL,
  `tmon` varchar(100) DEFAULT NULL,
  `ssg` varchar(100) DEFAULT NULL,
  `coupang` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `foreignID` FOREIGN KEY (`id`) REFERENCES `notebook` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notebookprice`
--

LOCK TABLES `notebookprice` WRITE;
/*!40000 ALTER TABLE `notebookprice` DISABLE KEYS */;
INSERT INTO `notebookprice` VALUES (1,'2,240,000','2,249,000','2,249,000','2,367,360','2,392,350','2,367,360','2,508,500',NULL,NULL,NULL),(2,NULL,NULL,'1,748,000','1,634,080',NULL,'1,634,070','1,634,080',NULL,NULL,NULL),(3,NULL,NULL,'767,040','799,000','906,170','933,480','767,030',NULL,NULL,NULL),(4,NULL,NULL,'1,699,000','1,980,000','1,899,000','1,698,990','1,698,990',NULL,NULL,NULL),(5,NULL,NULL,'1,249,000',NULL,NULL,'1,248,990','1,248,990',NULL,NULL,NULL),(6,NULL,'1,893,680','1,799,000','1,729,000',NULL,'1,729,000','1,619,000',NULL,NULL,'1,619,000'),(7,NULL,NULL,'1,849,000','1,399,000','1,849,000','1,849,000','1,849,000','1,849,000','1,849,000',NULL),(8,NULL,NULL,NULL,'599,000',NULL,'598,990','598,990',NULL,NULL,NULL),(9,NULL,'448,980','497,030','451,200','500,000','449,000','448,980',NULL,NULL,NULL),(10,NULL,NULL,'1,249,000',NULL,NULL,'1,248,990','1,248,990',NULL,NULL,NULL),(11,NULL,'1,599,000','1,599,000','1,599,000','1,599,000','1,599,000',NULL,'1,599,000',NULL,NULL);
/*!40000 ALTER TABLE `notebookprice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `uname` varchar(45) NOT NULL,
  `id` varchar(45) NOT NULL,
  `passwd` varchar(45) NOT NULL,
  `profileImg` varchar(45) DEFAULT '/img/user_profile_img/Skul_heroslayer.png',
  `email` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `gender` varchar(45) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bootdb'
--

--
-- Dumping routines for database 'bootdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-06 23:06:05
