import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className="w-11/12 mx-auto py-5 ">
                <Navbar></Navbar>
            </header>

            <main className="w-11/12 mx-auto ">
                <Outlet></Outlet>
                
            </main>
        </div>
    );
};

export default AuthLayout;