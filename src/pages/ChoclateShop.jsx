import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Chocolate from './Chocolate';

const ChoclateShop = () => {

    const loadedChocolates = useLoaderData();
    const [chocolates, setChocolates]=useState(loadedChocolates);

    return (
        <div>
            <h1 className='text-xl md:text-3xl text-white font-bold text-center bg-[#371D10] py-5' >Here Have ALL Chocolates {chocolates.length}</h1>

            <div className='grid p-10 md:grid-cols-2 gap-3 md:p-20'>
                {
                    chocolates.map(chocolate=> <Chocolate
                    key={chocolate._id}
                    chocolate={chocolate}
                    ></Chocolate>)
                }
            </div>
        </div>
    );
};

export default ChoclateShop;