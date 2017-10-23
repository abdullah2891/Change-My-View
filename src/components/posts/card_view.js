import React, {Component} from 'react'; 
import {Panel} from 'react-bootstrap/lib';


class CardView extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			  <div>
			    <Panel header={this.props.heading}>
			    <img src={this.props.url} alt="" height="100" width="100" />
			      <span className="glyphicon glyphicon-arrow-up"/>
			      <span className="glyphicon glyphicon-arrow-down"/>
			    </Panel>
			 </div>
		);
	}
}

export default CardView;
