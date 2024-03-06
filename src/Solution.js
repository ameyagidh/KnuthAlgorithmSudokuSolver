import React from 'react';
import SudokuView from './SudokuView';
import NeuLayout from './NeuLayout';

// Solution component represents the solution page of the app
const Solution = () => {
  return (
    <NeuLayout>
      {/* Render SudokuView component within NeuLayout */}
      <SudokuView />
    </NeuLayout>
  );
};

export default Solution;
