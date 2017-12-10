// @flow
import React from 'react';

type Props = {
  title: string,
  text: string,
};

const FlowTypeComponent = ({ title, text, handleClick }): Props => (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
);

export default FlowTypeComponent;