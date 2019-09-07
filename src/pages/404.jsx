import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ErrorPage = center => (
  <Layout>
    <Helmet title={'404'} />
    <Header title="404" />
    <Container center={center}>
      <h1>Something went wrong T.T</h1>
      <h3>Or this page does not exist</h3>
      <h3>
        You can return to the <Link to="/">Homepage</Link>.
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

Container.propTypes = {
  center: PropTypes.object,
};
