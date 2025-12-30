import React from 'react';

interface TerminalLoaderProps {
  text?: string;
  className?: string;
}

export const Component: React.FC<TerminalLoaderProps> = ({ 
  text = "Sending...", 
  className = "" 
}) => {
  return (
    <div className={`terminal-loader relative bg-gray-900 border border-gray-600 font-mono text-lg p-8 pt-5 w-64 shadow-lg rounded border-opacity-80 overflow-hidden ${className}`}>
      <div className="terminal-header absolute top-0 left-0 right-0 h-7 bg-gray-700 rounded-t px-3 flex items-center justify-between">
        <div className="terminal-title text-gray-200 text-base leading-7">
          Status
        </div>
        <div className="terminal-controls flex gap-2">
          <div className="control close w-3 h-3 rounded-full bg-red-500"></div>
          <div className="control minimize w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="control maximize w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="text text-green-400 inline-block whitespace-nowrap overflow-hidden mt-7">
        {text}
      </div>
    </div>
  );
};