import React from 'react';
import logo from './logo.svg';
import NewScreen from './views/screens/NewScreen';
import './App.css';
import TableProduct from './views/components/TableProduct';
import CounterScreen from './views/screens/CounterScreen';
import ProductCart from './views/components/ProductCart';
import ProductBook from './views/components/ProductBook';
import Handmaid from './handmaid.png';
import Brave from './brave.png';
import Crazy from './crazyRich.png';
import Educated from './educated.png';


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

  // let arrProducts = [
  //   {
  //     nama: 'Lipstick',
  //     harga: 150000,
  //     desc: 'gincu mantep dengan warna alami',
  //     discount : 20,
  //     stock: 10
  //   },
  //   {
  //     nama: 'Bedak',
  //     harga: 270000,
  //     desc: 'Dempul biar malem mingguannya makin cancik',
  //     discount : 50,
  //     stock: 0

  //   },
  //   {
  //     nama: 'Foundation',
  //     harga: 300000,
  //     desc: 'menutup semua dosa dosa di wajah',
  //     discount : 0,
  //     stock: 5
  //   }
  // ]

  // const renderArr = () => {
  //     return (
  //       arrProducts.map((val) => {
  //         return (
  //             <ProductCart productData={val} />
  //         )
  //       })
  //     )
  //   }

  // return (
  //   <div className="App">
  //     <h1> Hello World !</h1>
  //     {/* <ProductCart /> */}
  //     {
  //       renderArr()
  //     }


  // {/* <CounterScreen /> */}
  // </div>
  // );

  //=====================================================================================================================================

  let arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
  ];


  const bookArr = () => {
    return (
      arrBooks.map((val) => {
        return (
          <div className='col-lg-6 col-md-3'>
            <ProductBook dataBook={val} />
          </div>

        )
      })
    )
  }

  return (
    <div className="App">
      <h1>BOOK STORE</h1>

      <div style={{marginLeft:'10px', marginTop:'50px'}}>
         <div className="row"> 
          {
           bookArr()
          }
         </div>
      </div>
    
    </div>
  );
}

export default App;
