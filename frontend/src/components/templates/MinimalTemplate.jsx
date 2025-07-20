import React from 'react';
import BaseTemplate from './BaseTemplate';
import { minimalConfig } from './templateConfigs';

const MinimalTemplate = ({ data, isPdf = false }) => {
  return <BaseTemplate data={data} templateConfig={minimalConfig} isPdf={isPdf} />;
};

export default MinimalTemplate;
