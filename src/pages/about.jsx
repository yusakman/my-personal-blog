import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="About"></Header>
    <Container center = {center}>
		<div>
			<h1>2017</h1>
			<p>
			It was the year where I first encountered crypto. I also figured out that the technology behind crypto was revolutionizing our world. Since then I never look back and keep learning about this technology.
			</p>
			<h1>2018</h1>
			<p>
			The winter of the industry finally coming. At the end of this year, I realized investing was not enough. I need to build something on this technology. Building require more skills. I decided to learn programming.
			</p>
			<h1>2019</h1>
			<p>
			This year, I decided to keep learning about blockchain technology, moreover, I also trying to build something on this industry. That's why I created this blog. The goal of this blog is to document my journey into blockchain industry, moreover to become a blockchain developer. My narrative maybe not interested, but who cares? At least I'm being me.
			</p>
		</div>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
