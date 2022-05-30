import React from 'react';

const Banner = () => {
    //https://i.ibb.co/yy8qNDT/exavator.webp
    //https://i.ibb.co/DDZ4FK0/Wheel-Excavator.jpg

    const sectionStyle = {

        backgroundImage: "url(" + "https://i.ibb.co/k0G7HRx/rental-inventory-management.webp" + ")",
    };
    return (
        <div>
            <div class="hero min-h-screen" style={sectionStyle}
            >
                <div class="hero-content text-center text-neutral-content bg-yellow-100 opacity-[95%] rounded-[20px] w-4/5 my-4">
                    <div class="">
                        <h1 class="mb-5 font-bold text-black text-3xl font-bold">FIND WHAT YOU'RE LOOKING FOR.</h1>
                        <p class="mb-5 text-black text-xl">If you want to find any machinery in a specific location, You can search here.</p>
                        <input type="text" placeholder="City" class="input input-bordered w-[200px] max-w-xs mb-6 mr-2" />
                        <input type="text" placeholder="State" class="input input-bordered w-[200px] max-w-xs mb-6 mr-2" />
                        <input type="text" placeholder="Zip Code" class="input input-bordered w-[200px] max-w-xs mb-6 mr-2" />
                        <button class="btn btn-primary text-white mx-6 pb-1 font-bold">
                            <img src="https://i.ibb.co/r61JzJJ/transparent-bold-seo-and-marketing-outline-icon-magnifying-gla-5fcf5106efaf08-2068563616074222149818.png" alt="transparent-" className='w-5 h-5 mr-2 ' />
                            Search</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;