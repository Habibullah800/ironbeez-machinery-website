import React from 'react';

const Footer = () => {
    return (
        <div className='p-6 '>
            <footer class="footer p-10 bg-base-100 text-base-content">
                <div >
                    <span class="font-bold text-lg mb-2">WANT TO TAKE PART IN THIS REVOLUTION?</span>
                    <h1 className='text-base font-medium'>Have a service, a product, content, etc…that </h1>
                    <h1 className='font-medium text-base mb-3'>would greatly benefit our community? Let's talk! </h1>
                    <div className='flex items-center mb-1'>
                        <img src="https://i.ibb.co/Mpg4Qdd/transparent-star-icon-favorite-place-icon-maps-and-location-fi-600fdc09d73bb8-8923080416116521058816.png" alt="email-icon" className='w-6 h-7 mr-2' border="0" />
                        <a class="link link-hover text-base font-normal mb-1">
                            Reynoldsburg, Ohio 43068</a>
                    </div>
                    <div className='flex items-center mb-1'>
                        <img src="https://i.ibb.co/HHjXhn1/transparent-phone-icon-phone-receiver-icon-interface-icon-5f9bf5a757d2f3-3571187416040564873597.png" alt="email-icon" className='w-6 h-6 mr-2' border="0" />
                        <a class="link link-hover text-base font-normal mb-1">
                            (616) 953-6133</a>
                    </div>
                    <div className='flex items-center mb-1'>
                        <img src="https://i.ibb.co/zbPDfFK/transparent-line-text-font-logo-triangle-5da9e127e31d61-5922804215714143119303.png" alt="email-icon" className='w-6 h-6 mr-2' border="0" />
                        <a class="link link-hover text-base font-normal mb-1">
                            support@website.com</a>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div >
                        <h2 className='font-bold text-lg mb-3'>SUBSCRIBE TO OUR NEWSLETTER</h2>
                        <h1 className=' text-base font-medium'>Always stay up to date on our ever evolving </h1>
                        <h1 className='text-base font-medium'>product features and technology.</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text  text-base font-normal">Enter Your Email address</span>
                            </label>
                            <label class="input-group">
                                <span className='font-semibold '>Email</span>
                                <input type="text" placeholder="info@gmail.com" class="input input-bordered" />
                            </label>
                        </div>
                        <button class="btn btn-primary btn-wide mt-2">SUBMIT</button>
                    </div>
                </div>
            </footer>
            <hr className='w-5/6 mx-auto'></hr>
            <div className='flex p-10'>
                <div className='lg:flex-1'>
                    <p>© Copyright 2022 IronBeez</p>
                </div>
                <div className='lg:flex-2'>
                    <p>
                        <a class="link link-hover mr-2">Privacy Policy |</a>
                        <a class="link link-hover mr-2">Terms And Conditions |</a>
                        <a class="link link-hover mr-2">Contact Us</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;