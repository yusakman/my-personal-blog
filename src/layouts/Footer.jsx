import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  a {
	  color: #FFFAFA;
  }
  a:hover {
	  text-decoration: none;
	  color: #98FB98;
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
      <a href="https://twitter.com/yusak_man" target="_blank">Twitter</a>
	  {'-'}
	  <a href="https://www.instagram.com/yusak_man/" target="_blank">Instagram</a>
	  {'-'}
      <a href="https://github.com/yusakman" target="_blank">Github</a>
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
