import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HtmlSectionMain, TitleMain } from 'components/SectionMain/SectionMain.styled';

export class SectionMain extends Component {
  PropTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, children } = this.props;

    return (
      <HtmlSectionMain>
        <TitleMain>{title}</TitleMain>
        {children}
      </HtmlSectionMain>
    );
  }
}
