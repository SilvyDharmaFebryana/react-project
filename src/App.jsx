import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import Cookie from 'universal-cookie'
import { connect } from 'react-redux'
import { userKeepLogin } from './redux/actions/user'

import logo from './logo.svg';
import NewScreen from './views/screens/NewScreen';
import './App.css';
import TableProduct from './views/components/TableProduct';
import CounterScreen from './views/screens/CounterScreen';
import ProductCart from './views/components/ProductCart';
import ProductBook from './views/components/ProductBook';
import InputScreen from './views/screens/InputScreen';
import RegisterScreen from './views/screens/RegisterScreen';
import TodoReduxScreen from './views/screens/TodoReduxScreen';


import Handmaid from './views/assets/images/handmaid.png';
import Brave from './views/assets/images/brave.png';
import Crazy from './views/assets/images/crazyRich.png';
import Educated from './views/assets/images/educated.png';

import LoginForm from './views/screens/LoginForm';
import LifecycleScreen from './views/screens/LifecycleScreen';
import HomeScreen from './views/screens/HomeScreen';
import PageNotFound from './views/screens/PageNotFound';
import Navbar from './views/screens/Navbar';
import ProfileScreen from './views/screens/ProfileScreen';
import RegisterScreenNew from './views/screens/RegisterScreenNew';
import LoginScreenNew from './views/screens/LoginScreenNew';
import ListUser from './views/screens/ListUser';

const cookieObject = new Cookie();


class App extends React.Component {

  arrBooks = [
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


  bookArr = () => {
    return (
      this.arrBooks.map((val) => {
        return (
          <div className='col-lg-6 col-md-3'>
            <ProductBook dataBook={val} />
          </div>

        )
      })
    )
  }

  componentDidMount() {
    let cookieResult = cookieObject.get("authData");
    console.log(cookieResult);
    if (cookieResult){
      this.props.userKeepLogin(cookieResult)
    }
  }



  render() {
    return (
      <div className="App" >
        <Navbar />
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/Auth" component={RegisterScreenNew} />
          <Route exact path="/Login" component={LoginScreenNew} />
          <Route exact path="/Input" component={InputScreen} />
          <Route exact path="/Profile/:userId" component={ProfileScreen} />
          <Route exact path="/Account" component={ListUser} />
          <Route exact path="/Todo" component={TodoReduxScreen} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  userKeepLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));



//============================================================================================

// function App() {
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

  // let arrBooks = [
  //   {
  //     author: "Margaret Atwood",
  //     title: "The handmaid's tale",
  //     review: 4,
  //     desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
  //     price: 18.99,
  //     discount: 60,
  //     image: Handmaid,
  //     stock: 7,
  //   },
  //   {
  //     author: "Kevin Kwan",
  //     title: "Crazy rich asians",
  //     review: 5,
  //     desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
  //     price: 24.12,
  //     discount: 80,
  //     image: Crazy,
  //     stock: 0,
  //   },
  //   {
  //     author: "Aldous Huxley",
  //     title: "Brave new world",
  //     review: 3,
  //     desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
  //     price: 18.99,
  //     discount: 60,
  //     image: Brave,
  //     stock: 3,
  //   },
  //   {
  //     author: "Tara Westover",
  //     title: "Educated",
  //     review: 4.5,
  //     desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
  //     price: 34.21,
  //     discount: 0,
  //     image: Educated,
  //     stock: 3,
  //   },
  // ];


  // const bookArr = () => {
  //   return (
  //     arrBooks.map((val) => {
  //       return (
  //         <div className='col-lg-6 col-md-3'>
  //           <ProductBook dataBook={val} />
  //         </div>

  //       )
  //     })
  //   )
  // }

  // return (
    // <div className="App">
    //   <h1>Hello World</h1>
    //   {/* <div style={{marginLeft:'10px', marginTop:'50px'}}>
    //      <div className="row"> 
    //       {
    //        bookArr()
    //       }
    //      </div>
    //   </div> */}
    //   {/* <CounterScreen /> */}
    //   {/* <InputScreen /> */}
    //     {/* <RegisterScreen /> */}
    //   {/* <LoginForm /> */}
    //   {/* <LoginForm /> */}
    //   <LifecycleScreen />
    // </div>


//     <div className="App">
//         {/* <LifecycleScreen /> */}
//         <Navbar />
//         <br/>
//         <br/>
//         <br/>
//         <Switch>

//           <Route exact path="/" component={HomeScreen} />
//           <Route exact path="/Auth" component={RegisterScreenNew} />
//           <Route exact path="/Login" component={LoginScreenNew} />
//           <Route exact path="/Input" component={InputScreen} />
//           <Route exact path="/Profile/:userId" component={ProfileScreen} />
//           <Route exact path="/Account" component={ListUser} />
//           <Route exact path="/Todo" component={TodoReduxScreen} /> 
//           <Route path="*" component={PageNotFound} /> 

//         </Switch>
//     </div>

//   );
// }

// export default withRouter(App);

//=============================================================================

