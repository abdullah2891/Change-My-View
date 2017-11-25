import React , {Component} from 'react'; 




class ReplyComment extends Component{

	constructor(props){
		super(props);

	}



	render(){
		let post =  this.props.comment;
		return (
				<ul className="list-group">
					{
						post.data.replies &&
											post.data.replies.data.children.map((reply,index)=>{
												if(!reply.data.body){
													return ;
												}

												return (
														

														<li className="list-group-item reddit-comment" eventKey={index}>
															{reply.data.body}
															<ReplyComment comment = {reply} />

														</li>

													)
												
											})
					}
				</ul>
			)
	}

}



export default ReplyComment;