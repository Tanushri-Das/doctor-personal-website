import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import AllServiceCard from './AllServicesCard';

const AllServices = () => {

    const [allServices,setAllServices] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setAllServices(data);
            setLoading(false);
        })
    },[])
    if(loading){
    
        return <button className="btn btn-square btn-warning loading"></button>
    }
  return (
    <div className='mb-20'>
        <h2 className='text-violet-500 text-4xl font-bold mt-20 mb-10'>My All Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20 gap-6'>
            {
                allServices.map(myservices => <AllServiceCard key={myservices._id} myservices={myservices}></AllServiceCard>)
            }
        </div>
        
        
    </div>
  )
}

export default AllServices