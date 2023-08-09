import React from 'react';
import {useNavigate} from "react-router-dom"

function HomePage(props) {
  const About = () => {
    const navigate = useNavigate();
    return (
      <div>
        Home Page
      </div>
    );
  }
}
export default HomePage;
