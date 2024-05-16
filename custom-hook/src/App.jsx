import { useState, useEffect } from 'react';
import './App.css';

const useStorage = (key, initialValue) => {
  // Retrieve the value from local storage, or use the initialValue
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  // Update local storage when the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Function to update the value
  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return [value, updateValue];
};

// Usage example:
const App = () => {
  const [inputValue, setInputValue] = useStorage('textInput', '');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Local storage: {inputValue}</p>
    </div>
  );
};

export default App;

