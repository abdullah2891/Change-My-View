import React, { Component } from 'react';
import {Switch , Route} from 'react-router-dom';

import App from './App'; 
import RedditComment  from './components/posts/reddit_comment';

class RouteCollection extends Component{



	render(){
		return (
			<Switch>
				<Route exact path='/' component={App}/>
				<Route path='/comment/:subreddit/:comment' component={RedditComment} />
			</Switch>
		)

	}
}


export default RouteCollection;