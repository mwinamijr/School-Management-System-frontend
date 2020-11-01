import React from 'react';
import { Route } from "react-router-dom";

import AboutPage from './containers/About';
import BlogListPage from './containers/Blog';
import ServicesPage from './containers/Services';
import Home from './containers/HomePage';
import ContactPage from './components/ContactForm';
import BlogDetail from './components/BlogDetail';

import Nursery from './components/education/nursery/Nursery';
import Primary from './components/education/primary/Primary';

const BaseRouter = () => {
	return (
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/about/" component={AboutPage} />
				<Route exact path="/blog/" component={BlogListPage} />
				<Route exact path="/blog/:articleID/" component={BlogDetail} />
				<Route exact path="/contact/" component={ContactPage} />
				<Route exact path="/services/" component={ServicesPage} />

				<Route exact path="/education/nursery/" component={Nursery} />
				<Route exact path="/education/primary/" component={Primary} />
			</div>
		)
}

export default BaseRouter;