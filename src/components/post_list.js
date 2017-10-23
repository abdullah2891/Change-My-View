import React, { Component } from 'react';
import CardView from  './posts/card_view'; 


class PostView extends Component{
	constructor(props) {
		super(props);
		this.state = {
			posts : []
		}
	}


	componentDidMount() {
		let url = 'https://www.reddit.com/r/pics/.json';

		fetch(url)
			.then(response=>{
				return response.json();
			})
			.then((res)=>{
				console.log(res);
				this.setState({posts : res.data.children});
			})
	}


	render(){
		return (
			<div>
				{
					this.state.posts.map(post=>{
						return(
								<CardView 
									heading = {post.data.title }
									url =  {post.data.url}
								/>
							)
					})
				}
				
			</div>
			);
	}
}

export default PostView;