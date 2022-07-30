import React from 'react';
import { useStepperContext } from '../../contexts/StepperContext';

const BusinessDetails = () => {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };
    return (
        <div>
      <div>
        <h1 className="font-bold text-2xl mb-2">Business details (Continued)</h1>
        <p className="text-gray-500">Lets set up your business profile</p>
      </div>
      <div className="grid grid-cols-1 gap-4 ">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Website
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["websiteurl"] || ""}
              name="websiteurl"
              placeholder="URL"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 ">

            <div className=' '>
                <h1 className='font-bold uppercase'>Licences/ Offers</h1>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Insecured</p>
                </div>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Bounded</p>
                </div>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Free Estimates</p>
                </div>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Offers Financing</p>
                </div>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Offered Virtually</p>
                </div>

            </div>
            <div className=' '>
                <h1 className='font-bold uppercase'>Business Designation</h1>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Insecured</p>
                </div>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Bounded</p>
                </div>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Free Estimates</p>
                </div>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Offers Financing</p>
                </div>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Offered Virtually</p>
                </div>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Offered Virtually</p>
                </div>
                <div className='flex gap-4 mt-1 items-center '>
                    <input type="checkbox" className="mt-1  " />
                    
                    <p className='text '>Offered Virtually</p>
                </div>

            </div>
        </div>
      
    </div>
    );
};

export default BusinessDetails;