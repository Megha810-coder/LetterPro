/*
SQLyog Trial v13.1.5  (64 bit)
MySQL - 10.1.38-MariaDB : Database - letter
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`letter` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `letter`;

/*Table structure for table `bill` */

DROP TABLE IF EXISTS `bill`;

CREATE TABLE `bill` (
  `bill_id` int(11) NOT NULL AUTO_INCREMENT,
  `bill_active` varchar(5) DEFAULT NULL,
  `bill_name` varchar(30) DEFAULT NULL,
  `pro_quantity` float DEFAULT NULL,
  `pro_rate` varchar(20) DEFAULT NULL,
  `sale_rate` float DEFAULT NULL,
  PRIMARY KEY (`bill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `bill` */

/*Table structure for table `erp_enquiry_request` */

DROP TABLE IF EXISTS `erp_enquiry_request`;

CREATE TABLE `erp_enquiry_request` (
  `enq_id` int(11) NOT NULL AUTO_INCREMENT,
  `enq_company_name` varchar(100) DEFAULT NULL,
  `enq_contact_id` int(11) DEFAULT NULL,
  `enq_date` date DEFAULT NULL,
  `enq_description` varchar(255) DEFAULT NULL,
  `enq_email` varchar(100) DEFAULT NULL,
  `enq_name` varchar(100) NOT NULL,
  `enq_post_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`enq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `erp_enquiry_request` */

/*Table structure for table `newbill` */

DROP TABLE IF EXISTS `newbill`;

CREATE TABLE `newbill` (
  `nbill_id` int(11) NOT NULL AUTO_INCREMENT,
  `bill_active` varchar(30) DEFAULT NULL,
  `date` varchar(30) DEFAULT NULL,
  `date1` date DEFAULT NULL,
  `invoice_no` int(11) DEFAULT NULL,
  `loss` int(11) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL,
  `pro_name` varchar(30) DEFAULT NULL,
  `profit` int(11) DEFAULT NULL,
  `quantity` varchar(30) DEFAULT NULL,
  `rate` varchar(30) DEFAULT NULL,
  `total` varchar(30) DEFAULT NULL,
  `unitPrice` varchar(30) DEFAULT NULL,
  `unitTotal` varchar(30) DEFAULT NULL,
  `unit_rate` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`nbill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `newbill` */

/*Table structure for table `person` */

DROP TABLE IF EXISTS `person`;

CREATE TABLE `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `person` */

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `add_quantity` varchar(30) DEFAULT NULL,
  `p_active` varchar(5) DEFAULT NULL,
  `p_name` varchar(30) DEFAULT NULL,
  `quantity` varchar(30) DEFAULT NULL,
  `rate` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `product` */

/*Table structure for table `product_report` */

DROP TABLE IF EXISTS `product_report`;

CREATE TABLE `product_report` (
  `pr_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(30) DEFAULT NULL,
  `invoice_no` int(11) DEFAULT NULL,
  `loss` int(11) DEFAULT NULL,
  `pr_active` varchar(30) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL,
  `pro_name` varchar(30) DEFAULT NULL,
  `profit` int(11) DEFAULT NULL,
  `quantity` varchar(30) DEFAULT NULL,
  `rate` varchar(30) DEFAULT NULL,
  `total` varchar(30) DEFAULT NULL,
  `unitPrice` varchar(30) DEFAULT NULL,
  `unitTotal` varchar(30) DEFAULT NULL,
  `unit_rate` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`pr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `product_report` */

/*Table structure for table `proposal` */

DROP TABLE IF EXISTS `proposal`;

CREATE TABLE `proposal` (
  `pro_id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(30) DEFAULT NULL,
  `ass_clerk` varchar(30) DEFAULT NULL,
  `cleark` varchar(30) DEFAULT NULL,
  `college_code` varchar(30) DEFAULT NULL,
  `contact_no` varchar(30) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `dist_director` varchar(30) DEFAULT NULL,
  `dy_director` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `file_status` varchar(30) DEFAULT NULL,
  `head_clerk` varchar(30) DEFAULT NULL,
  `pro_active` varchar(30) DEFAULT NULL,
  `pro_name` varchar(30) DEFAULT NULL,
  `proposal` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`pro_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

/*Data for the table `proposal` */

insert  into `proposal`(`pro_id`,`address`,`ass_clerk`,`cleark`,`college_code`,`contact_no`,`date`,`dist_director`,`dy_director`,`email`,`file_status`,`head_clerk`,`pro_active`,`pro_name`,`proposal`) values 
(16,'Pune','1','1','1601','9933346789','2019-09-09','-','-','megha@gmail.com','1','-','1','Godavari College','Request for Salary Increament'),
(39,'Pune','1','0','0000','9089787812','2020-03-20',NULL,'1','megha@gmail.com','1','1','1','S.P.College','Special Allowance Request'),
(40,'Pune','0','1','1256','8909786789','2020-03-17','-','1','megha@gmail.com','1','-','1','R.C.M. College','Request to Increase the Daily Allowance'),
(46,'asddasd','1','1','6789','8909786789','2020-03-04',NULL,NULL,'megha@gmail.com','1','-','1','opop','asdsd'),
(47,'Pune','1','1','9090','9922279101','2020-08-20',NULL,NULL,'megha@gmail.com','1','-','1','SPCollege','data....');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
