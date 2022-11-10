import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ServiceCard from './ServicesCard';

const Services = () => {

    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('https://doctor-personal-server-side.vercel.app/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div>
     
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20 gap-6'>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
        <Link to={`/services`}>
            <button className="btn btn-primary mt-12">See All</button>
        </Link>
        
    </div>
  )
}

export default Services