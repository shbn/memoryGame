-- phpMyAdmin SQL Dump
-- version 4.2.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: May 08, 2015 at 08:41 AM
-- Server version: 5.5.38
-- PHP Version: 5.5.14


--
-- Database: `memorygame`
--

-- --------------------------------------------------------

--
-- Table structure for table `score`
--

CREATE TABLE `score` (
`id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `score` int(11) NOT NULL,
  `appid` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- AUTO_INCREMENT for table `score`
--
ALTER TABLE `score`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
ALTER TABLE `score`
 ADD PRIMARY KEY (`id`);
--
-- Dumping data for table `score`
--

INSERT INTO `score` (`id`, `name`, `email`, `score`, `appid`) VALUES
(1, 'test', 'test@test.com', 0, ''),
(25, 'Shibin', 'p.shibin@gmail.com', 95, 'memory-game');
