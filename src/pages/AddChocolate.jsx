import React from 'react';

const AddChocolate = () => {

    const handleAddNewChocololate = e => {
        e.preventDefault();
        console.log('shakil')
    }
    return (
        <div className='bg-[#7B3F00] m-5 md:m-12 rounded-xl'>
            <h1 className='text-2xl md:text-3xl text-white font-semibold text-center py-14'>Add New Item Chocolate Here</h1>

            <div className='p-5'>
                <form className='space-y-2' onSubmit={handleAddNewChocololate}>

                    {/* Chocolate Name and  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center'>
                        <input type="text" name='name' placeholder="Chocolate Name" className="input input-bordered input-acent w-full" />
                        <input type="text" name='price' placeholder="Chocolate Price" className="input input-bordered input-acent w-full" />
                    </div>

                    {/* Chocolate country and quantity */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center'>
                        <select className="select select-acent w-full">
                            <option disabled selected>Impot of Country</option>
                            <option value='Bangladesh'>Bangladesh</option>
                            <option value='India'>India</option>
                            <option value='America'>America</option>
                            <option value='Nepal'>Nepal</option>
                        </select>
                        <input type="number" name='quantity' placeholder="Chocolate Quantity" className="input input-bordered input-acent w-full" />
                    </div>

                    {/* Chocolate date url and brad name */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center'>
                        <input type="date" name='quantity' placeholder="Chocolate Quantity" className="input input-bordered input-acent w-full" />
                        <select className="select select-acent w-full">
                            <option disabled selected>Name Of Brand</option>
                            <option value='Toblerone'>Toblerone</option>
                            <option value='Cadbury'>Cadbury</option>
                            <option value='Ghirardelli'>Ghirardelli</option>
                            <option value='Godiva'>Godiva</option>
                        </select>
                    </div>

                    {/* Chocolate photo url and Color code */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center'>
                        <select className="select select-acent w-full">
                            <option disabled selected>Impot of Country</option>
                            <option value='Bangladesh'>Bangladesh</option>
                            <option value='India'>India</option>
                            <option value='America'>America</option>
                            <option value='Nepal'>Nepal</option>
                        </select>
                        <input type="text" name='quantity' placeholder="Chocolate Quantity" className="input input-bordered input-acent w-full" />
                    </div>

                    {/* Chocolate discriptions */}


                    {/* submit button */}
                    <div className='grid grid-cols-1 justify-items-center'>
                        <input type="submit" className='btn btn-success btn-block' value="Add New Chocolate" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddChocolate;