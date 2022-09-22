import React, { useState } from 'react';
import { HttpClient } from '../api/HttpClient';
import { TableUsersApi } from '../components/tables/TableUsersApi';
import { PlaceHolderService } from '../services/PlaceHolderService';


export const Index = () => {

  const [loading, setLoading]    = useState(false);
  const [datausers, setDataUsers] = useState([]);
  const [error, setError] = useState('');
  


  const consultar = async() => {

    setLoading(true);

    const httpClient = new HttpClient();
    const placeHolderService = new PlaceHolderService( httpClient );
    const users = await placeHolderService.saveJsonPlaceholder();
    
    if ( users.ok) {
        setDataUsers(users.msg);
    }else{
        setError(users.msg);
    }
    setLoading(false);
     

  }

  return (
    <>
       <p className='text-center fs-3 text-muted mt-3'>
           Consultar y guardar datos del api jsonplaceholder 
       </p> 

       <p className='text-center fs-3 text-danger mt-4'>
       {error}
       </p>

       {
          loading 
          ? 
          <div className='text-center'>
             <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Un momento por favor...
              </button>
           </div>
          : 
          <div className='text-center'>
              <button className="btn btn-primary" type="button" onClick={consultar}>
                consultar api
              </button>
          </div>
          
       }

       <TableUsersApi data={datausers}/>
    </>
  )
}
