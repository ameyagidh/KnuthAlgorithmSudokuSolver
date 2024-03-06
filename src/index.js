// Import necessary modules from the React library
import React from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, redirect, RouterProvider } from 'react-router-dom';

// Import CSS styles
import './index.css';

// Import components
import Entrance from './Entrance';
import Solution from './Solution';
import SolutionMatrix from './SolutionMatrix';
import SudokuProvider from './SudokuProvider';

// Create a hash router with specified paths and elements
const router = createHashRouter([
  { path: '/', element: <Entrance /> }, // Route to the Entrance component for the root path
  { path: 'solution', element: <Solution /> }, // Route to the Solution component for '/solution' path
  { path: 'matrix', element: <SolutionMatrix /> }, // Route to the SolutionMatrix component for '/matrix' path
  { path: '*', loader: () => redirect('/') }, // Redirect to the root path for unknown paths
]);

// Create a root node for rendering React components
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the root component with React StrictMode for additional checks
root.render(
  <React.StrictMode>
    {/* Wrap the router provider with SudokuProvider to provide Sudoku-related data */}
    <SudokuProvider>
      {/* Provide the router to the application */}
      <RouterProvider router={router} />
    </SudokuProvider>
  </React.StrictMode>
);
