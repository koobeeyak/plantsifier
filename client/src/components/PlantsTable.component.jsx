import React from 'react';

const PlantsTable = ({ arePlantsLoading }) => (
  <span>
    {`Am I loading plants? ${ arePlantsLoading }`}
  </span>
);

export default PlantsTable;
