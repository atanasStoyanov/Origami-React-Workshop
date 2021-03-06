import React, { Component } from 'react';
import Origamis from '../../components/origamis';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import UserContext from '../../Context';

class Publications extends Component {
  static contextType = UserContext;

  render() {
    return (
      <PageLayout>
        <Title title="Publications" />
        <Origamis />
      </PageLayout>
    );
  }
}

export default Publications;
