import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HtmlSection, Title } from 'components/Section/Section.styled';

export class Section extends Component {
  PropTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, children } = this.props;

    return (
      <HtmlSection>
        <Title>{title}</Title>
        {children}
      </HtmlSection>
    );
  }
}
