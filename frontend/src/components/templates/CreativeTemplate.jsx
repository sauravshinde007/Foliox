import React from 'react';
import BaseTemplate from './BaseTemplate';
import { creativeConfig } from './templateConfigs';

const CreativeTemplate = ({ data, isPdf = false }) => {
  return <BaseTemplate data={data} templateConfig={creativeConfig} isPdf={isPdf} />;
};

export default CreativeTemplate;
