import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary-focus text-primary-content">
                <div className="flex-1">
                    <Link to='/home' className="btn btn-ghost normal-case text-3xl font-mono">
                        Learnify
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-lg'>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li className='text-lg'>
                            <Link to='/topics'>Topics</Link>
                        </li>
                        <li className='text-lg'>
                            <Link to='/statistics'>Statistics</Link>
                        </li>
                        <li className='text-lg'>
                            <Link to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;