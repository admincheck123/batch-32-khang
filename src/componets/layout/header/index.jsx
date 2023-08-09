import { Link } from 'react-router-dom';

import { AUTH, LOCATION } from 'constants/index';

import './header.css';

function Header(props) {
  const { title } = props;

  return (
    <header className="App-header">
      <ul className="d-flex justify-content-between mx-auto">
        {
          AUTH.map((item, index) => <li key={index} className="xoachan"><Link to={item.path}>{item.title}</Link></li>)
        }
      </ul>
    </header>
  )
}

export default Header;