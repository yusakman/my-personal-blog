import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import logo from '../../static/logo/profile.jpg';

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="About Yusak"></Header>
    <Container center = {center}>
  		<div>
        <p>
          <img src={logo} alt="YM Logo" />
        </p>
        <p>
          Hey there, I’m Yusak. Currently, I’m documenting my journey to become a blockchain developer.
          I got into <i>cryptocurrency</i> a couple of years ago.
          The technology behind it drew my attention. It's called the <b>Blockchain</b>.
        </p>
        <p>
          I believe blockchain is the most disruptive invention since the internet.
          It holds vast promise for every business, society, and us individually.
          And will have a powerful impact in the next few decades.
        </p>
        <p>
          That's the reason why I'm 100% into the blockchain.
          I learn to program so I can build something and contribute to the blockchain ecosystem.
        </p>
        <p>
          The goal of this blog is to share my journey to become a blockchain developer.
          I hope I can give valuable insight to everyone who wants to learn about blockchain.
        </p>
        <p>
          Hit me up on <a href="https://instagram.com/yusak_man" target="_blank"><b>Instagram</b></a> or
          <a href="https://twitter.com/yusak_man" target="_blank"><b> Twitter</b></a>.
          My DMs are open, don't hesitate to contact me.
        </p>
  		</div>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
