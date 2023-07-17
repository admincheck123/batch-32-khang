// import React from 'react';

// import Card from '../card';

// import './card.css';

// function CardList(props) {
//   return (
//     <div className="card-list">
//       <Card
//         image="https://picsum.photos/200"
//         name="ROBORT PATTINSON"
//         role="developer"
//         birthday="23/05/2014"
//         mark="B+"
//         edu="MCA"
//         address="Bangalore"
//         email="robot12@gmail.com"
//         phone="0900909099"
//       />
//       <Card
//         image="https://picsum.photos/200"
//         name="XINCHAO "
//         role="developer"
//         birthday="23/05/2014"
//         mark="B+"
//         edu="MCA"
//         address="Bangalore"
//         email="robot12@gmail.com"
//         phone="0900909099"
//       />
//       <Card
//         image="https://picsum.photos/200"
//         name="ROBORT PATTINSON"
//         role="developer"
//         birthday="23/05/2014"
//         mark="B+"
//         edu="MCA"
//         address="Bangalore"
//         email="robot12@gmail.com"
//         phone="0900909099"
//       />
//       <Card
//         image="https://picsum.photos/200"
//         name="ROBORT PATTINSON"
//         role="developer"
//         birthday="23/05/2014"
//         mark="B+"
//         edu="MCA"
//         address="Bangalore"
//         email="robot12@gmail.com"
//         phone="0900909099"
//       />
//       <Card
//         image="https://picsum.photos/200"
//         name="ROBORT PATTINSON"
//         role="developer"
//         birthday="23/05/2014"
//         mark="B+"
//         edu="MCA"
//         address="Bangalore"
//         email="robot12@gmail.com"
//         phone="0900909099"
//       />
//       <Card
//         image="https://picsum.photos/200"
//         name="ROBORT PATTINSON"
//         role="developer"
//         birthday="23/05/2014"
//         mark="B+"
//         edu="MCA"
//         address="Bangalore"
//         email="robot12@gmail.com"
//         phone="0900909099"
//       />
//     </div>
//   );
// }

// export default CardList;


import React, { useEffect, useState } from 'react';

import Card from '../card';

import './card.css';

const userInfo = {
  image: "https://picsum.photos/200",
  name: "ROBORT PATTINSON",
  role: "developer",
  birthday: "23/05/2014",
  mark: "B+",
  edu: "MCA",
  address: "Bangalore",
  email: "robot12@gmail.com",
  phone: "0900909099",
  age: 18,
};

function CardList(props) {
  const [user, setUser] = useState(userInfo);

  useEffect(() => {
    // setUser({
    //   ...user,
    //   name: "TRINH DINH PHUONG",
    // })

    // setUser((preState) => {
    //   return ({
    //     ...preState,
    //     name: "TRINH DINH PHUONG",
    //   })
    // })

    setUser((preState) => ({
      ...preState,
      name: "TRINH DINH PHUONG",
    }));
  }, []);

  const onPlusAge = () => {
    setUser((preState) => ({
      ...preState,
      age: preState.age - 1,
    }));
  }

  const onMinusAge = () => {
    setUser((preState) => ({
      ...preState,
      age: preState.age + 1,
    }));
  }

  const onDfAge = () => {
    setUser((preState) => ({
      ...preState,
      age: preState.age = 18,
    }));
  }
  console.log('««««« user »»»»»', user);

  return (
    <>
      <h1 className="mt-5">{props.title}</h1>

      <div className="card-list">
        <Card
          info={user}
          onPlusAge={onPlusAge}
          onMinusAge={onMinusAge}
          onDfAge={onDfAge}
        />
      </div>

      <hr />
    </>
  );
}

export default CardList;