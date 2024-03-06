import React from 'react';
import Matrix from './Matrix';
import NeuLayout from './NeuLayout';

// SolutionMatrix component represents the matrix view page of the app
const SolutionMatrix = () => {
  return (
    <NeuLayout>
      {/* Render Matrix component within NeuLayout */}
      <Matrix />
    </NeuLayout>
  );
};

export default SolutionMatrix;
