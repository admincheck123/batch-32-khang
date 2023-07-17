import Button from './componets/button';
// import CardList from './componets/layer/cardList';
import Layout from './componets/layout';
import CardList from './componets/cardList';
import React from 'react';
import OpenAtATime from './componets/buttonAcd';
import SliderImage from './componets/sliders'
import './App.css'
import Likebtn from './componets/likebtn';

function App() { // = Home Page
  return (
  //   <div className="App">
  //     <Layout
  //       headerTitle="Xin chào, đây là header!"
  //       footerTitle="Xin chào, đây là footer!"
  //     >
  //       <main className="container">
  //         {/* <Button
  //           icon={<i class="fa-brands fa-apple fa-xl" />}
  //           name="Continue with Apple"
  //           classes="bg-black"
  //         /> */}
  //         <CardList />
  //       </main>
  //     </Layout>
  //   </div>

//<OpenAtATime />

//<SliderImage/>
<Likebtn/>

   );

}

export default App;