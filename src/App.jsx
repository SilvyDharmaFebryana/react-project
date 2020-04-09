import React from 'react';
import logo from './logo.svg';
import NewScreen from './views/screens/NewScreen';
import './App.css';
import TableProduct from './views/components/TableProduct';
import CounterScreen from './views/screens/CounterScreen';
import ProductCart from './views/components/ProductCart';

function App() {
  // let arr = ['Bandung', 'Jakarta', 'Bali']
  // const renderArr = () => {
  //   return (
  //     arr.map(val => {
  //       return (
  //           <CounterScreen arr={val} />
  //       )
  //     })
  //   )
  // }

  let arrProducts = [
    {
      nama: 'Lipstick',
      harga: 150000,
      desc: 'gincu mantep dengan warna alami',
      discount : 20,
      stock: 10
    },
    {
      nama: 'Bedak',
      harga: 270000,
      desc: 'Dempul biar malem mingguannya makin cancik',
      discount : 50,
      stock: 0

    },
    {
      nama: 'Foundation',
      harga: 300000,
      desc: 'menutup semua dosa dosa di wajah',
      discount : 0,
      stock: 5
    }
  ]


  const renderArr = () => {
      return (
        arrProducts.map((val) => {
          return (
              <ProductCart productData={val} />
             
          )
        })
      )
    }


  return (
    <div className="App">
      <h1> Hello World !</h1>
      {/* <ProductCart /> */}
      {
        renderArr()
      }
    </div>
  );
}

export default App;
