import React from "react";
import fetchJsonp from "fetch-jsonp";
import ScrollUpButton from "react-scroll-up-button";

import Header from './header.jsx';
import Search from './train/search.jsx';
import SocialMedia from './social_media.jsx';

class AppTrain extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			trains: [], //initiate state.trains
			alertTrains: []
		};
	};

	componentDidMount(){
		this.tick();
		this.timerID = setInterval(
			() => this.tick(),
			10000 // update every 10 second
			);
	}

	componentWillUnmount(){
		clearInterval(this.timerID);
	}

    //http://apitest.septa.org/beta/TrainView/    The old API
	tick(){
		//get the TrainView API data
		fetchJsonp(`https://www3.septa.org/api/TrainView/index.php`,{
			timeout: 6000,
		}).then(
		response =>{
			return response.json()
		}).then(
		json =>{
			this.setState({trains: json});
		});

		//get the Alert API data
		fetchJsonp(`https://www3.septa.org/api/Alerts/get_alert_data.php?
			req1=rr_route_warm,rr_route_gc,rr_route_med,rr_route_apt,
			rr_route_che,rr_route_chw,rr_route_cyn,rr_route_fxc,rr_route_landdoy,
			rr_route_nor,rr_route_pao,rr_route_trent,rr_route_wilm,rr_route_wtren`,{
				timeout: 6000,
			}).then(
			response =>{
				return response.json()
			}).then(
			json =>{
				this.setState({alertTrains: json});
			});
	}

	render(){
		return(
			<div className = "component">
			<Header />
		    <hr/>
		    <Search trains={this.state.trains} alertTrains={this.state.alertTrains} />
		    <SocialMedia />
		    <ScrollUpButton />
		    </div>
			)
	}
}

export default AppTrain;