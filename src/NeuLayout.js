import React from 'react';
import logo from './logo.png';
import GithubLogo from './GithubLogo.png';

// NeuLayout component represents a layout for the  Sudoku Solver app
const NeuLayout = ({ children }) => {
  return (
    <div className="neu-layout">
      {/* Header section */}
      <header className="header">
        <div className="logo">
          {/* NEU logo */}
          <img src={logo} alt="NEU logo" height="60px" width="60px" />
        </div>

        <div className="title">
          {/* App title */}
         My Sudoku Solver
        </div>

        {/* Placeholder for additional header content */}
        <div className="placeholder"></div>

        <div className="git-link">
          {/* GitHub link */}
          <a href="https://github.com/ameyagidh/KnuthAlgorithmSudokuSolver" target="_blank">
            <img src={GithubLogo} alt="GitHub logo" height="30px" width="30px" />
          </a>
        </div>
      </header>

      {/* Main content */}
      {children}

      {/* Footer section */}
      <footer className="footer">
        <div className="semester">
          Sudoku
        </div>

        {/* Placeholder for additional footer content */}
        <div className="placeholder"></div>

        <div className="author">
          {/* Authors in alphabetical order */}
          By - Ameya Santosh Gidh
        </div>
      </footer>
    </div>
  );
};

export default NeuLayout;
