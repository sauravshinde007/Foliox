import React from 'react';
import BaseTemplate from './BaseTemplate';
import { modernConfig } from './templateConfigs';

const ModernTemplate = ({ data, isPdf = false }) => {
  return <BaseTemplate data={data} templateConfig={modernConfig} isPdf={isPdf} />;
};

export default ModernTemplate;
