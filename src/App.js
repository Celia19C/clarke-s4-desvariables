import React, { Component } from 'react';
import Cover from './components/Cover';
import Form from './components/Form';
import Preview from './components/Preview';
import Footer from './components/Footer';
import './scss/main.css';


import addButton24px from './images/addButton24px.png';
import addButton32px from './images/addButton32px.png';
import addimg from './images/addimg.png';
import btnaddimg from './images/btnaddimg.png';
import btnclose from './images/btnclose.png';
import btndown from './images/btndown.png';
import btndownload from './images/btndownload.png';
import btndownload2 from './images/btndownload2.png';
import btnfile from './images/btnfile.png';
import btnfile2 from './images/btnfile2.png';
import btnprint from './images/btnprint.png';
import btnprint3 from './images/btnprint3.png';
import btnshare from './images/btnshare.png';
import btnshare2 from './images/btnshare2.png';
import btnshare3 from './images/btnshare3.png';
import btnview from './images/btnview.jpg';
import cinema from './images/cinema.png';
import cinemaSmall from './images/cinemaSmall.png';
import expandarrow from './images/expandarrow.png';
import expandbuttonmedium from './images/expandbuttonmedium.png';
import expandbutton from './images/expandbutton.png';
import facebook from './images/facebook.png';
import github from './images/github.png';
import group from './images/group.png';
import groupMobile from './images/groupMobile.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import logofinal from './images/logofinal.png';
import logoLetras from './images/logoLetras.png';
import logoLetrasRegular from './images/logoLetrasRegular.png';
import logoMaquina from './images/logoMaquina.png';
import logoPrueba from './images/logoPrueba.png';
import menos from './images/menos.png';
import minbutom from './images/minbutom.png';
import minus from './images/minus.svg';
import minus32 from './images/minus32.png';
import minus32px from './images/minus32px.png';
import music from './images/music.png';
import musicSmall from './images/musicSmall.png';
import read from './images/read.png';
import readSmall from './images/readSmall.png';
import sports from './images/sports.png';
import sportsSmall from './images/sportsSmall.png';
import travel from './images/travel.png';
import travelSmall from './images/travelSmall.png';
import twitter from './images/twitter.png';
import videogame from './images/videogame.png';
import videogameSmall from './images/videogameSmall.png'
import machine from './images/vintage8Machine.png';

class App extends Component {
  render() {
    return (
			<div className="App">
			<body className="wrapper body" id="contenedorPrincipal">
			 <header className="header">
				 <div className="container-logo">
					 <div>
						 <a href="index.html"><img src={logoMaquina} alt="logoscriptoras" className="machine-logo"/></a>
					 </div>
					 <div className="container-letters">
						 <a href="index.html"><img src={logoLetras} alt="logoscriptoras" className="letters-log"/></a>
					 </div>
				 </div>
				 <div className="container-icons">
					<button className="icons" id="btnview" title="Vista previa"></button>
					<button className="icons" id="btnprint" title="Imprimir"></button>
				 </div>
			 </header>
			 <main className="main-wrapper bloque index-main">

			 		<Form />


				 <div className="alert-dates invisible">
					 <button className="button-alert-img" type="button" name="button">
						 <img className="alert-cruise" src={btnclose} alt="cruise-button"/>
					 </button>
					 <p className="text-alert">¡Ojo! La fecha de inicio no debe ser posterior a la fecha de finalización.</p>
				 </div>
				 <div className="alert-dates invisible" id="alert-month">
					 <button className="button-alert-img" id="close-button-alert-month" type="button" name="button">
						  className="alert-cruise" src={btnclose} alt="cruise-button"/>
					 </button>
					 <p className="text-alert">¡Ojo! No has introducido el mes.</p>
				 </div>
			 </main>
			 <div id="btrs">
			<p><b>Comparte nuestra página en redes sociales</b></p>


			</div>
				<Footer />
			 </body>
			</div>

    );
  }
}

export default App;
