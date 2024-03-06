// Import logo image and CSS styles
import logo from './logo.png';
import './App.css';

// Define a functional component for the Entrance page
function Entrance() {
  return (
    // Render the Entrance page with header and content
    <div className="App">
      <header className="App-header">
        {/* Display the logo */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* Display a message */}
        <p>
          Solve the my Sudoku!
        </p>
        {/* Provide a link to enter the solution page */}
        <a
          className="App-link"
          href="#/solution"
          rel="noopener noreferrer"
        >
          Enter
        </a>
      </header>
    </div>
  );
}

// Export the Entrance component for external use
export default Entrance;
