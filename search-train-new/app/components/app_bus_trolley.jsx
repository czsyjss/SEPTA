import React from "react";
import {withRouter} from "react-router-dom";

import ScrollUpButton from "react-scroll-up-button";

//import Clock from './clock.jsx';
import Header from './header.jsx';
import SocialMedia from './social_media.jsx';
import BTHeader from './bt_header.jsx';
import BTHeader2 from './bt_header2.jsx';
import BTHeader3 from './bt_header3.jsx';

import Bus from './bus/bus.jsx';
import DefaultMap from './default_map.jsx';

const array = [10,11,13,15,34,36,101,102];
Array.prototype.contains = function(obj) {
	var i = this.length;
	while (i--) {
		if (this[i] == obj) {
			return true;
		}
	}
	return false;
}

class AppBusTrolley extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			bt: '',
			bt2: '',
			bt3: '',
			route: '',
			route2: '',
			route3: '',
			found: false,
			found2: false
		}
	}

	componentDidMount(){
		var bt;
		var bt2;
		var bt3;
		var route = this.props.match.params.route;
		var route2 = this.props.match.params.route2;
		var route3 = this.props.match.params.route3;
		//console.log("new" + route);

		if(array.contains(route)){
			bt = "trolley";
		}else{
			bt = "bus";
		}

		if(array.contains(route2)){
			bt2 = "trolley";
		}else{
			bt2 = "bus";
		}

		if(array.contains(route3)){
			bt3 = "trolley";
		}else{
			bt3 = "bus";
		}

		this.setState({
			bt: bt,
			bt2: bt2,
			bt3: bt3,
			route: route,
			route2: route2,
			route3: route3
		});

		var pathname = this.props.location.pathname;
		var regex = /^\/bus_trolley\/\d+(|\/)$/g;
		var found = regex.test(pathname);
		if (found){
			this.setState({found: found});
		}else{
			this.setState({found: found});
		}
		var regex2 = /^\/bus_trolley(\/\d+){2,}(|\/)$/g;
		var found2 = regex2.test(pathname);
		if (found2){
			this.setState({found2: found2});
		}else{
			this.setState({found2: found2});
		}
		//console.log(found);

	}

	componentWillReceiveProps(nextProps){
		var $navbar = $(".navbar-collapse");
		var _opened = $navbar.hasClass("in");
		//console.log(_opened);

		if(window.innerWidth<768 && _opened === true){
			//Bind this click with #collapse
			//close the collapse NavBar
			$navbar.collapse('hide');
		}

		var bt;
		var bt2;
		var bt3;
		var route = nextProps.match.params.route;
		var route2 = nextProps.match.params.route2;
		var route3 = nextProps.match.params.route3;
		//console.log("new" + route);

		if(array.contains(route)){
			bt = "trolley";
		}else{
			bt = "bus";
		}

		if(array.contains(route2)){
			bt2 = "trolley";
		}else{
			bt2 = "bus";
		}

		if(array.contains(route3)){
			bt3 = "trolley";
		}else{
			bt3 = "bus";
		}

		this.setState({
			bt: bt,
			route: route,
			bt2: bt2,
			route2: route2,
			bt3: bt3,
			route3: route3
		});

		var pathname = nextProps.location.pathname;
		var regex = /^\/bus_trolley\/\d+(|\/)$/g;
		var found = regex.test(pathname);
		if (found){
			this.setState({found: found});
		}else{
			this.setState({found: found});
		}
		var regex2 = /^\/bus_trolley(\/\d+){2,}(|\/)$/g;
		var found2 = regex2.test(pathname);
		if (found2){
			this.setState({found2: found2});
		}else{
			this.setState({found2: found2});
		}

		//console.log(pathname);
		//console.log(found);

		this.timerID = setTimeout(
			() => this.onClickBind(),
			1000 // update after 1 second
			);
	}

	onClickBind(){
		//Bind this click with #reloadBus
		$("#reloadBus").click();
	}

	componentWillUnmount(){
		clearTimeout(this.timerID);
	}


	render(){

		return(
			<div>
			<Header />
		    {/*<Clock title = "Bus/Trolley " />*/}
		    <hr/>

		    {!this.state.found && !this.state.found2 && <BTHeader />}
		    {this.state.found && <BTHeader2 />}
		    {this.state.found2 && <BTHeader3 />}

		    {this.state.route &&  <Bus route={this.state.route} bt={this.state.bt} 
		    route2={this.state.route2} bt2={this.state.bt2}
		    route3={this.state.route3} bt3={this.state.bt3} />}
		    {!this.state.route && <DefaultMap />}

			<SocialMedia />
		    <ScrollUpButton />
		    </div>
			);
	}
}

export default withRouter(AppBusTrolley);