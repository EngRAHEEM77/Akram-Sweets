import React, { useContext, useState, useEffect } from 'react';
import './Xasa.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import profile_icon from '../../assets/profile_icon.png';

const Xasa = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('menu');
  const { isLoggedIn, getTotalCartAmount, logout } = useContext(StoreContext);
  const [showLogout, setShowLogout] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowLogout(!showLogout);
  };

  useEffect(() => {
    if (searchQuery) {
      navigate(`/explore-menu?search=${searchQuery}`);
    }
  }, [searchQuery, navigate]);

  const handleSearchIconClick = () => {
    setShowSearchInput(true);
  };

  return (
    <div className='Xasa'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="Xasa-menu">
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
        <a href='#footer' onClick={() => setMenu('contact us')} className={menu === 'contact us' ? 'active' : ''}>About Us</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Download</a>
        <Link to='/cart'><a href='#Cart' onClick={() => setMenu('Cart')} className={menu === 'Cart' ? 'active' : ''}>Cart</a></Link>
        <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>  
      </ul>
      <div className="Xasa-right">
        {showSearchInput && (
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        )}
        <button onClick={handleSearchIconClick}>
          <img src={assets.search_icon} alt="Search" />
        </button>
        <div className="Xasa-search-icon">

        </div>
        {isLoggedIn ? (
          <div className="profile-section">
            <img src={profile_icon} alt="Profile" onClick={handleProfileClick} />
            {showLogout && <span className="logout-text" onClick={logout}>Logout</span>}
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        )}
      </div>
    </div>
  );
};

export default Xasa;
