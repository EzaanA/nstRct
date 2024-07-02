import logo from '../../logo.png';

const Header = ()=>{
  return(
  <div className="navbar">
    <div className="logo">
    <img className="logoimg" 
    src={logo} />
    </div>
    <div className="navItems">
      <ul className="ulList">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  )
};

export default Header;