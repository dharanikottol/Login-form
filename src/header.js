import React from 'react';

//import './header.css';

import {Link} from 'react-router-dom';

const Header = () => (

<div className = 'header'>

<Link className = 'option' to='/Loginform'>Login</Link>

<Link className = 'option' to='/Registerform'>Register</Link>
</div>

)


export default Header; //  to implement header feature
