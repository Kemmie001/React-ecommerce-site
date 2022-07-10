import { Content, Wrapper } from './styles';
import { FaSearch } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Nav() {
	const [isNavExpanded, setisNavExpanded] = useState(false)
	return (
		<Wrapper>
            <Content>
                <div>
                <div className="head-logo">
                <div className="logo">
                    <img src="/assets/logo.png" alt="" />
                </div>
                <span className="search-wrapper">
                    <input type="search" name="" placeholder="Search ..." id="" />
                    <div className="search-icon"><FaSearch /></div>
                    <button><span>Search</span></button>
                    <div className='bar-cont' onClick={() => {
                            setisNavExpanded(!isNavExpanded);
                        }} >
                        <FiMenu  className="bar"></FiMenu>
                    </div>
                    
                </span>
            </div>
                    <div className="nav">
                        <div onClick={() => {
						setisNavExpanded(false);
					}} className={
                            isNavExpanded ? "overlay expanded" : "overlay"
                        }>
                            <div>
                            <ul className="nav-bar">
                                <li className="logo">
                                    <img src="/assets/logo.png" alt="" />
                                </li>
                                <li className="">
                                   <Link to ='/'>Home</Link>
                                </li>
                                <li className="">
                                    <Link to='/products'>Products</Link>
                                </li>
                                <li className="">
                                <Link to='/about'>About</Link>
                                </li>
                                <li className="">
                                <a href='/Contact'>Contact us</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrapper>
	)
}

export default Nav