import React , {Component} from 'react'; 

import {Link} from 'react-router-dom';

import ReplyComment from './reply_comment';

class RedditComment extends Component{
	constructor(props){
		super(props);

		this.state = {
			header : [],
			comments : []
		}

	}

	componentDidMount(){
		const {subreddit, comment} =  this.props.match.params; 


		let url = `https://www.reddit.com/r/${subreddit}/comments/${comment}/.json`;

		fetch(url)
			.then(response=>{
				return response.json();
			})
			.then((response)=>{

				this.parse_json(response);
			})
	}



	parse_json(comments){
		let parsed_array = [] ; 

		// reddit comments are array of object with nested reply object with same structure
		let [header , comment_body] = comments; 
	
		this.setState({
						comments : comment_body.data.children , 
						header   : header.data.children[0] 
					});

	}

	render(){

		return ( 
				<div className ='container'>
					{
						this.state.header.data ? 
							(
								<div>
									<h1>{this.state.header.data.title} <Link  to='/'><i class="fa fa-backward" aria-hidden="true" /> </Link> </h1> 
									<div className='well'>
										{this.state.header.data.selftext}
									</div>
								</div>								

							) : 
							( <div class="row">
								<div class="col-md-3"></div>
								<div class="col-md-9">
									<span className='fa fa-refresh fa-spin fa-3x fa-fw loading-spinner'  /> 
								</div>
							</div>)


					} 
					<ul className="list-group">
					    {
							this.state.comments.map((post,index)=>{
							return(		
									<div>	
										<li className="list-group-item" eventKey={post.data.id}>{post.data.body}</li>

										<ul className='list-group reddit-comment-group'>

											<ReplyComment comment = {post} />
										</ul>
									</div>
								);

							})
						}

					</ul>

				</div>
				
			);
	}
}


export default RedditComment;