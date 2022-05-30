import React from 'react';

const Recommended = () => {
    return (
        <div>
            <h2 className='text-center text-primary text-5xl font-bold mb-6 mt-12'>RECOMMENDED FOR YOU</h2>
            <div className='grid grid-cols-2 align-center block mx-auto m-16"'>
                <div class="card w-100 bg-base-100 shadow-xl m-6">
                    <figure><img src="https://i.ibb.co/2yhxr7P/1272836-1-1536x1130.jpg" alt="Shoes" /></figure>
                    <div class="card-body static">
                        <h2 class="card-title text-primary text-center block">
                            2015 Yale NDR035
                            <div class="badge badge-primary text-white absolute bottom-[295px] right-4">Recommended</div>
                        </h2>
                        <p >Make: YALE </p>
                        <p>Model: NDR035 </p>
                        <p>Year: 2015</p>

                        <div class="card-actions mx-auto ">
                            <button class="btn btn-primary px-10 text-white mt-2">Details</button>
                        </div>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Ironbeez</div>
                            <div class="badge badge-outline">machinery</div>
                        </div>
                    </div>
                </div>

                <div class="card w-100 bg-base-100 shadow-xl m-6">
                    <figure><img src="https://i.ibb.co/c3VWmYY/2012-Hyster-J30-XNT.jpg" alt="Shoes" /></figure>
                    <div class="card-body static">
                        <h2 class="card-title text-primary text-center block">
                            2018 Hyster J35XNT
                            <div class="badge badge-primary text-white absolute bottom-72 right-4">Recommended</div>
                        </h2>
                        <p>Make: HYSTER </p>
                        <p>Model: J35XNT </p>
                        <p>Year: 2018</p>

                        <div class="card-actions mx-auto ">
                            <button class="btn btn-primary px-10 text-white mt-2">Details</button>
                        </div>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Ironbeez</div>
                            <div class="badge badge-outline">machinery</div>
                        </div>
                    </div>
                </div>

                <div class="card w-100 bg-base-100 shadow-xl m-6">
                    <figure><img src="https://i.ibb.co/bmC3XWk/365157-1.jpg" className='w-100' alt="Shoes" /></figure>
                    <div class="card-body static">
                        <h2 class="card-title text-primary text-center block">
                            2016 Hyster N45ZR2

                        </h2>
                        <div class="badge badge-primary text-white absolute bottom-72 right-4 ">Recommended</div>
                        <p>Make: HYSTER </p>
                        <p>Model: N45ZR2 </p>
                        <p>Year: 2016</p>

                        <div class="card-actions mx-auto ">
                            <button class="btn btn-primary px-10 text-white mt-2">Details</button>
                        </div>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Ironbeez</div>
                            <div class="badge badge-outline">machinery</div>
                        </div>
                    </div>
                </div>

                <div class="card w-100 bg-base-100 shadow-xl m-6">
                    <figure><img src="https://i.ibb.co/d7Fy7cJ/365157-0.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-primary text-center block">
                            2011 Yale ERP040
                            <div class="badge badge-primary text-white absolute bottom-72 right-4">Recommended</div>
                        </h2>
                        <p>Make: Yale </p>
                        <p>Model: ERP040 </p>
                        <p>Year: 2011</p>
                        <div class="card-actions mx-auto ">
                            <button class="btn btn-primary px-10 text-white mt-2">Details</button>
                        </div>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Ironbeez</div>
                            <div class="badge badge-outline">machinery</div>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default Recommended;