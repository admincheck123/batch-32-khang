import React from 'react';
import './App.css';

//import ButtonAccordions from "./componets/buttonAcd";
//import ButtonTabs from "./componets/buttonTabs";
//import Form from './componets/form';
//import Likes from "./componets/likebtn";
import PlayList from 'componets/playlist';
//import SliderImage from "./componets/sliders";
// import LoginForm from 'componets/form/login';
// import ProductList from 'componets/product/productList';

function App() { // = Home Page
  return (
    // <div className/="App">
    //   <Layout
    //     headerTitle="Xin chào, đây là header!"
    //     footerTitle="Xin chào, đây là footer!"
    //   >
    //     <main className="container">
    //       {/* <Button
    //         icon={<i className="fa-brands fa-apple fa-xl" />}
    //         name="Continue with Apple"
    //         classes="bg-black"
    //       /> */}
    //       <CardList title="Nhân viên ưu tú" />
    //     </main>
    //   </Layout>
    // </div>
    // <CardList title="Nhân viên xuất sắc" />
    // <ButtonAccordions />

//    <Form/>

      <div>
      {/* <Likes /> */}
      <PlayList/>
      {/* <ButtonAccordions /> */}
      {/* <ButtonTabs /> */}
      {/* <SliderImage /> */}
      {/* <LoginForm/> */}
      {/* <ProductList /> */}
      </div>

  );
}

export default App;
