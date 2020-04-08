import React from 'react';
import logo from './logo.svg';
import NewScreen from './views/screens/NewScreen';
import './App.css';
import TableProduct from './views/components/TableProduct';

function App() {
  let arr = ['Bandung', 'Jakarta', 'Malang']
  const renderArr = () => {
    return (
      arr.map((val, idx) => {
        return (
          <>
            <p>{val}</p>
            <p>{idx + 1}</p>
            <NewScreen />
          </>
        )
      })
    )
  }

  return (
    <div className="App">
      <h1 className="green-text">Hello World</h1>
      <h4 style={{ border: '1px solid black', marginTop: '8px' }}>
        Test style
      </h4>
      {/* {
        renderArr()
      } */}
      <TableProduct />
    </div>
  );
}

export default App;
