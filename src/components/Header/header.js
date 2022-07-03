import Logo from './Logo.svg';
import "./header.css";
import { Link } from 'react-router-dom';

function Header () {
  return (
    <div className='header'>       
        <a href="/"><img className='logo' src={ Logo } alt="logo" /></a>               
      <nav className='nav'>         
        <Link to={"/"} className='head-button'>TV Shows</Link>
        <Link to ={"/suggestMe"}  className='head-button'>Suggest me <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg></Link>     
      </nav>  
    </div>
  );
}

export default Header;