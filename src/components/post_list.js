import React, { Component } from 'react';
import CardView from  './posts/card_view'; 
import {PanelGroup,Panel} from 'react-bootstrap/lib';
 

class PostView extends Component{
	constructor(props) {
		super(props);
		this.state = {
			posts : []
		}
	}


	componentDidMount() {
		let url = 'https://www.reddit.com/r/changemyview/.json';

		fetch(url)
			.then(response=>{
				return response.json();
			})
			.then((res)=>{
				this.setState({posts : res.data.children});

			})
	}


	render(){
		return (
				<div className="container-fluid">
					<PanelGroup defaultActiveKey="1" accordion>

				    {
						this.state.posts.map((post,index)=>{
							return(
									<Panel 
										collapsible 
										header=  {post.data.title} 
										eventKey= {index}>
											<CardView 
												url= {post.data.url}
												self_text = {post.data.selftext}
											/>
										</Panel>
								)
						})
					}
				 </PanelGroup>	

				</div>
				 
			);
	}
}

export default PostView;