import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch, Route, Link} from 'react-router-dom';
import HomePage from './screens/homepage';
import BlogListComponent from './screens/bloglist/index';


const STYLES = {
    width: '1000px',
    margin: '0 auto'
}

class Header extends React.Component {
	render(){
		return(
			<BrowserRouter>
							<div>
									<center>
											<h1><Link to='/'>Welcome to Aakash's Blog</Link></h1>
									</center>
									<div>
											<Switch>
													<Route path='/' exact component={HomePage}></Route>
													<Route path='/blogs' exact component={BlogListComponent}></Route>
											</Switch>
									</div>
							</div>

			</BrowserRouter>

		)
	}

 }

export default Header;
