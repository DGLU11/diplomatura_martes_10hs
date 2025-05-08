-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 08-05-2025 a las 22:38:05
-- Versión del servidor: 5.7.40
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lf studio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombredelaobra` varchar(250) NOT NULL,
  `descripcion` text NOT NULL,
  `lugar` text NOT NULL,
  `fechadeinicio` varchar(300) NOT NULL,
  `tipodeobra` text NOT NULL,
  `estado` text NOT NULL,
  `img_id` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `nombredelaobra`, `descripcion`, `lugar`, `fechadeinicio`, `tipodeobra`, `estado`, `img_id`) VALUES
(27, 'Casa con doble altura', 'Se dice doble altura, en arquitectura, cuando una casa, departamento o edificación tienen un cielo raso de una altura considerable. A menudo es el doble o más que la altura del cielo raso tradicional de 2,75 mts.', 'Costa esmeralda, Buenos Aires', 'Abril 2024', 'Remodelacion', 'Finalizada', 'hpujyo8say4wxpsio8nx'),
(28, 'Ventanales de hierro', 'Ambas opciones tienen su lugar en el diseño arquitectónico. Si buscas algo moderno, práctico y fácil de mantener, las ventanas de aluminio son tu mejor opción. Pero si tu proyecto requiere un toque clásico, artístico o de alta seguridad, las ventanas de herrería pueden ser la elección perfecta', 'Ingeniero Maschwitz', 'Enero 2025', 'Construccion', 'En obra', 'sphaqluo2pia0chhf2ps'),
(22, 'Minimalisto en la sala de estar', 'El minimalismo es una corriente artística y una filosofía de vida que enfatiza la simplicidad, la pureza y la reducción a lo esencial. Se centra en la eliminación de lo superfluo y la búsqueda de la belleza a través de la ausencia de exceso.', 'Los Cardales', 'Diciembre 2024', 'Finalizada', 'sdgdssdg', 'mew6fr0hdkjxkbzcfinz'),
(16, 'Vidrio', '', 'Pilar, Buenos Aires', 'Marzo 2025', 'Remodelacion', 'En Obra', 'miee1y6te8uvmtcesjqw'),
(29, 'Madera', 'San Isidro', 'San Isidro', 'Abril 2024', 'Remodelacion', 'Finalizada', 'lfl1ttrakeo2hjpmefty');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
