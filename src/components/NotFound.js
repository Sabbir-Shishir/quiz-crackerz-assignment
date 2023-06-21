import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='py-16 px-52 App-header'>
            <Link to='/home' className='btn btn-outline btn-primary mb-4'>Go To Home</Link>
            <div className="alert alert-error py-10 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className='text-lg'>Not Found ! 404</span>
            </div>
        </div>
    );
};

export default NotFound;