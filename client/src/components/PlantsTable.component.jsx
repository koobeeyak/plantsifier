import React from 'react';

const PlantsTable = ({ plants }) => (
  <div>
    {
      plants.map(plant => (
        <p key={plant.id}>{plant.commonName}</p>
      ))
    }
  </div>
);

export default PlantsTable;
