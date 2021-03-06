/**
 * app.jsx file
 * This allows you to choose to enter bus/trolley or train component 
 *
 */
import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import { Link } from 'react-router-dom';

import Clock from './clock.jsx';
import SocialMedia from './social_media.jsx';

import RegionalRail from '../../images/RegionalRail.png';
import BusTrolley from '../../images/BusTrolley.png';

class App extends React.Component{

	render(){

		return(
			<center>
			<Clock title = "SEPTA " />
			<br/>
			<br/>
			<div>
			  <Link to='/regionalrail'>
			    <img src={RegionalRail} alt="RegionalRail" />
			    <br/>
			    <h4>Regional Rail</h4>
			  </Link>
			  <br/>
			  <br/>
			  <Link to='/bus_trolley'>
			    <img src={BusTrolley} alt="BusTrolley" />
			    <br/>
			    <h4>Bus/Trolley</h4>
			  </Link>
		    </div>
		    <br/>
		    <br/>
		    <SocialMedia />
		    <ScrollUpButton ContainerClassName="ScrollUpButton__Container"/>
		    </center>
			)
	}
}

export default App;