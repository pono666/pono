SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `ponodata` ;
USE `ponodata` ;

-- -----------------------------------------------------
-- Table `ponodata`.`projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ponodata`.`projects` (
  `project_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `image_name` VARCHAR(45) NOT NULL,
  `description` LONGTEXT NOT NULL,
  PRIMARY KEY (`project_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ponodata`.`employers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ponodata`.`employers` (
  `employers_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `location` VARCHAR(45) NULL,
  `image_name` VARCHAR(45) NULL,
  `description` LONGTEXT NULL,
  PRIMARY KEY (`employers_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ponodata`.`dates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ponodata`.`dates` (
  `dates_id` INT NOT NULL AUTO_INCREMENT,
  `from` DATE NULL,
  `to` DATE NULL,
  PRIMARY KEY (`dates_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ponodata`.`education`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ponodata`.`education` (
  `education_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `location` VARCHAR(45) NULL,
  `image_name` VARCHAR(45) NULL,
  `description` LONGTEXT NULL,
  PRIMARY KEY (`education_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ponodata`.`education_has_dates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ponodata`.`education_has_dates` (
  `education_education_id` INT NOT NULL,
  `dates_dates_id` INT NOT NULL,
  PRIMARY KEY (`education_education_id`, `dates_dates_id`),
  INDEX `fk_education_has_dates_dates1_idx` (`dates_dates_id` ASC),
  INDEX `fk_education_has_dates_education_idx` (`education_education_id` ASC),
  CONSTRAINT `fk_education_has_dates_education`
    FOREIGN KEY (`education_education_id`)
    REFERENCES `ponodata`.`education` (`education_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_education_has_dates_dates1`
    FOREIGN KEY (`dates_dates_id`)
    REFERENCES `ponodata`.`dates` (`dates_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ponodata`.`employers_has_dates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ponodata`.`employers_has_dates` (
  `employers_employers_id` INT NOT NULL,
  `dates_dates_id` INT NOT NULL,
  PRIMARY KEY (`employers_employers_id`, `dates_dates_id`),
  INDEX `fk_employers_has_dates_dates1_idx` (`dates_dates_id` ASC),
  INDEX `fk_employers_has_dates_employers1_idx` (`employers_employers_id` ASC),
  CONSTRAINT `fk_employers_has_dates_employers1`
    FOREIGN KEY (`employers_employers_id`)
    REFERENCES `ponodata`.`employers` (`employers_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_employers_has_dates_dates1`
    FOREIGN KEY (`dates_dates_id`)
    REFERENCES `ponodata`.`dates` (`dates_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
