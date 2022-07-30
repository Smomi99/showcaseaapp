import React from 'react';

const SingleService = (props) => {
    const {title,brand,area} = props.service;
    return (
            
        <div className=' p-2 shadow-md grid grid-cols-1  border rounded'>
        <div className='flex items-center gap-2 '>
        <img class="w-16 h-16 rounded-full" src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="Rounded avatar"/>
            <p className='text-gray-400'>{brand}</p>
        </div>
        <h1 className='text-blue-400 font-bold text-md'>{title}</h1>
        <div className='flex items-center gap-2'>
                <p className='font-bold text-sm'>{area}</p>
                <p className='text-gray-300 text-sm'>July 26</p>
        </div>
    </div>
   
    );
};

export default SingleService;