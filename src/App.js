import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <h1>2 Way Binding</h1>
      <input type="input" onChange={(event) => (setValue(event.target.value))} />
      <p>{value}</p>
    </div>
  );
}

export default App;
