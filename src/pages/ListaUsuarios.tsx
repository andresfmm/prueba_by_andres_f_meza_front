import React, { useState, useEffect } from 'react';

import DataTable from 'react-data-table-component';
import { HttpClient } from '../api/HttpClient';


import { Title } from '../components/content/Title';
import { TableUsersApi } from '../components/tables/TableUsersApi';
import { CrudUsersService } from '../services/CrudUsers';

export const ListaUsuarios = () => {

  const [loading, setLoading]    = useState(false);
  const [datausers, setDataUsers] = useState([]);
  const [error, setError] = useState('');

   useEffect(() => {
    getListOfUser();
   }, []);

   
   const httpClient = new HttpClient();

   const getListOfUser = async() => {
      setLoading(true);

      const usersList = new CrudUsersService( httpClient );
      const users_list = await usersList.getListUsers('users');
      
      if ( users_list.ok) {
          setDataUsers(users_list.msg);
      }else{
          setError(users_list.msg);
      }
      setLoading(false);
   }
   

  const delete_user = async(user:any) => {
    const usersList = new CrudUsersService( httpClient );
    const users_list = await usersList.deleteUser(`users/${user.id}`);

    if ( users_list.ok ) {
         getListOfUser();
    }
  }
  

  const restore_user = async(user:any) => {
    const usersList = new CrudUsersService( httpClient );
    const users_list = await usersList.restoreUser('users', { id: user.id });

    if ( users_list.ok ) {
         getListOfUser();
    }
  }


  const columns = [
    {
        name: 'Nombre',
        selector: (row:any) => row.name,
        sortable: true,
    },
    {
        name: 'Email',
        selector: (row:any) => row.email,
        sortable: true,
    },
    {
        name: 'Ciudad',
        selector: (row:any) => row.city,
        sortable: true,
    },
    {
        name: 'Nombre compañia',
        selector: (row:any) => row.company_name,
        sortable: true,
    },
    {
      name: 'Acciones',
      selector: (row:any) => row.active ? <button type="button" onClick={ () => delete_user(row)} className="btn btn-danger btn-sm">Eliminar</button> : <button type="button" onClick={ () => restore_user(row) } className="btn btn-warning btn-sm">Restaurar</button>,
      sortable: true,
  },
  ];

  return (
    <>
        <div className="row col-md-12">
            <div className="col align-self-center p-4">
              <div className="card rounded-3 shadow-sm p-3" >
                <Title title={'Listado datos api'}/>
                <DataTable
                    columns={columns}
                    data={datausers}
                    pagination
                />
              </div>
            </div>
        </div>
       
    </>
  )
}
