import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './services.css';
const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })

    },[])
    return (
        <div className=''>
            <h1 className='font-bold text-xl'>Discover your next local service pro here 👇</h1>
        
            <div className='grid grid-cols-1  gap-4 mt-2'>
            {
                services.map(service => <SingleService key={service.key} service={service}></SingleService>)
            }

            </div>
            
        </div>
    );
};

export default Services;