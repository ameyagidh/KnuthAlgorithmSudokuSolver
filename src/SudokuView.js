import React, { useContext, useRef, useEffect } from 'react';
import './SudokuView.css';
import { SudokuContext } from './SudokuProvider';

const SudokuView = () => {
  const sudokuData = useContext(SudokuContext);
  const {
    data = [], initialSudoku = [], logs, node, next, start, pause, skipToStart, skipToEnd, switchToNext,
  } = sudokuData;
  const { number } = node || {};

  const sudokuTable = () => {
    return data.map((row, i) => (
      <tr key={`tr_${i}`}>
        {row.map((cell, j) => (
          <td key={`td_${i}${j}`} className={number && number.row === i && number.column === j ? 'curCell' : ''}>
            {cell === 0 ? '' : cell}
          </td>
        ))}
      </tr>
    ));
  };

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  const Messages = ({ logs }) => (
    <ul>
      {logs.map((log, idx) => <li key={idx}>{log}</li>)}
      <AlwaysScrollToBottom />
    </ul>
  );

  return (
    <div className={'sudoku-view'}>
      <div className="content">
        <div className="column left">
          <div className="sudoku">
            <table className="table">
              <tbody>
                {sudokuTable()}
              </tbody>
            </table>
          </div>
        </div>

        <div className="column middle">
          <div className="placeholder"></div>
          <div className="buttons">
            <button onClick={start}>Start</button>
            <button onClick={next}>Next</button>
            <button onClick={pause}>Pause</button>
            <button onClick={skipToStart}>Skip To Start</button>
            <button onClick={skipToEnd}>Skip To End</button>
            <button onClick={switchToNext}>Next Sudoku</button>
          </div>
          <div className="Matrix-link">
            <a href="#/matrix" rel="noopener noreferrer"></a>
          </div>
          <div className="placeholder"></div>
        </div>

        <div className="column right">
          <div className="logs-text">
            Step-by-step process:
          </div>
          <div className="logs">
            <Messages logs={logs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SudokuView;
