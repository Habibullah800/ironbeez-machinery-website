import React from 'react';

const Navbar = () => {
    return (
        <div><div class="navbar bg-base-100">
            <div class="flex-1">
                <img className='h-14 ml-0 lg:ml-12 ' src="https://i.ibb.co/4Vn1f3c/Iron-Beez-3.png.png" alt="Iron-Beez" border="0" />
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li className='mr-0 lg:mr-8 text-lg font-bold'><a>Home</a></li>
                    <li className='mr-0 lg:mr-8 text-lg font-bold'><a>Sell</a></li>
                    <li className='mr-0 lg:mr-8 text-lg font-bold'><a>Rent</a></li>
                    <li className='mr-0 lg:mr-8 text-lg font-bold'><a>Finance</a></li>
                    <li className='mr-0 lg:mr-8 text-lg font-bold'><a>Log in</a></li>
                    <div className='mr-0 lg:mr-9'>
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                    </div>
                </ul>
            </div >
        </div >
        </div >
    );
};

export default Navbar;