import React, { Component } from 'react';
import CardView from  './posts/card_view'; 
import {PanelGroup,Panel} from 'react-bootstrap/lib';
 
import {Link} from 'react-router-dom';


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

	navigateComment(link){

	}



	render(){
		let subreddit = 'changemyview';
		return (
				<div className="container-fluid">
					<ul className="list-group">
					    {
							this.state.posts.map((post,index)=>{
								let link = `/comment/${subreddit}/${post.data.id}`;
								return(			
										<li className="list-group-item" eventKey={post.data.id}><Link to={link}>{post.data.title}</Link></li>
									)
							})
						}

					</ul>
				</div>	
				 
			);
	}
}

export default PostView;