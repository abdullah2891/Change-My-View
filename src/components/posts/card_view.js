import React, {Component} from 'react'; 
import {PanelGroup,Panel} from 'react-bootstrap/lib';
import TreeView from 'treeview-react-bootstrap';


class CardView extends Component{
	constructor(props) {
		super(props);
		this.state = {
			headers : [], 
			comments : {}
		}
	}


	componentDidMount(){
		fetch(`${this.props.url}.json`)
			.then(response => {
				return response.json() })
			.then(response=> {
				this.parse_json(response);
			})
			.catch(error => {
				console.log(error);
			});
	}

	parse_json(comments){
		let parsed_array = [] ; 

		// reddit comments are array of object with nested reply object with same structure
		let [header , comment_body] = comments; 

		parsed_array = parsed_array.concat(header.data.children); 
		parsed_array = parsed_array.concat(comment_body.data.children); 

		this.setState({headers : parsed_array});

	}

	onkeyupHandler(event){
		console.log("up", event.pageY);

	}

	onkeydownHandler(event){
		console.log("donw", event.pageY);

	}
	
	handlerClick(event,index){
		console.log(event);
	}

	render(){

		return(
				<div onMouseUp={e=> {this.onkeyupHandler(e)} } 
					onMouseDown={e=>{ this.onkeydownHandler(e)} }>

					<div className="comment-card">
							<div className="row">
								<div className="col-md-9">
									{this.props.self_text}												
								</div>
							</div>
								
					</div>

				{
					this.state.headers.map((post,index)=>{
							if(post.data.body){
								return(
										<div className="comment-card">
											<div className="row">

												<div className="col-md-9">
													{post.data.body}												
												</div>

												<div className="col-md-3">
													<i className="fa fa-arrow-up" 
														onClick={e => {this.handlerClick(e, index) } } />
												</div>

											</div>
									
										</div>
									
								);
							}
						})
				}
				</div>
		);
	}
}

export default CardView;




		// <!-- <br/>
		// 								we don't have any action now so get rid of this hideous button 
		// 								we may go to total gesture control 
		// 								<div className="icons-container">
		// 									<i className="fa fa-thumbs-up" aria-hidden="true"></i>
		// 									<i className="fa fa-thumbs-down" aria-hidden="true"></i>
		// 									<i className="fa fa-floppy-o" aria-hidden="true"></i>
		// 								</div> -->
		// 