import React from 'react';
import Navbar from '../components/Navbar';

function Page404() {
    return (
        <>
            <Navbar />
            <div className='not-found'>The page you were looking for was not found!</div>
        </>
    );
}

export default Page404;