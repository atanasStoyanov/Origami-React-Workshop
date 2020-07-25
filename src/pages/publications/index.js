import React from 'react';
import styles from './index.module.css';
import Origamis from '../../components/origamis';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';

const Publications = () => {
  return (
    <PageLayout>
      <Title title="Publications"/>
      <Origamis />
    </PageLayout> 
  );
}

export default Publications;
