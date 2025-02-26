import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [hasResult, setHasResult] = useState(false);

  const handleNumber = (number: string) => {
    if (hasResult) {
      setDisplay(number);
      setEquation(number);
      setHasResult(false);
    } else {
      if (display === '0') {
        setDisplay(number);
        setEquation(number);
      } else {
        setDisplay(display + number);
        setEquation(equation + number);
      }
    }
  };

  const handleOperator = (operator: string) => {
    setHasResult(false);
    setDisplay('0');
    setEquation(equation + ' ' + operator + ' ');
  };

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(equation);
      setDisplay(result.toString());
      setEquation(result.toString());
      setHasResult(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setHasResult(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setHasResult(false);
  };

  const Button = ({ value, onClick, className = '' }: { value: string; onClick: () => void; className?: string }) => (
    <button
      onClick={onClick}
      className={`p-4 text-xl font-semibold rounded-lg transition-colors ${className}`}
    >
      {value}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 bg-indigo-600 text-white flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            Calculator
          </h1>
          <span className="text-sm opacity-75">Azure Static Web App</span>
        </div>
        
        <div className="p-6">
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <div className="text-gray-600 text-sm h-6">{equation || '\u00A0'}</div>
            <div className="text-3xl font-bold text-right">{display}</div>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            <Button value="7" onClick={() => handleNumber('7')} className="bg-gray-100 hover:bg-gray-200" />
            <Button value="8" onClick={() => handleNumber('8')} className="bg-gray-100 hover:bg-gray-200" />
            <Button value="9" onClick={() => handleNumber('9')} className="bg-gray-100 hover:bg-gray-200" />
            <Button value="÷" onClick={() => handleOperator('/')} className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600" />
            
            <Button value="4" onClick={() => handleNumber('4')} className="bg-gray-100 hover:bg-gray-200" />
            <Button value="5" onClick={() => handleNumber('5')} className="bg-gray-100 hover:bg-gray-200" />
            <Button value="6" onClick={() => handleNumber('6')} className="bg-gray-100 hover:bg-gray-200" />
            <Button value="×" onClick={() => handleOperator('*')} className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600" />
            
            <Button value="1" onClick={() => handleNumber('1')} className="bg-gray-100 hover:bg-gray-200" />
            <Button value="2" onClick={() => handleNumber('2')} className="bg-gray-100 hover:bg-gray-200" />
            <Button value="3" onClick={() => handleNumber('3')} className="bg-gray-100 hover:bg-gray-200" />
            <Button value="-" onClick={() => handleOperator('-')} className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600" />
            
            <Button value="C" onClick={handleClear} className="bg-red-100 hover:bg-red-200 text-red-600" />
            <Button value="0" onClick={() => handleNumber('0')} className="bg-gray-100 hover:bg-gray-200" />
            <Button value="=" onClick={handleEqual} className="bg-indigo-600 hover:bg-indigo-700 text-white" />
            <Button value="+" onClick={() => handleOperator('+')} className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;