import React from 'react'

export const TableUsersApi = ({data}:any) => {
  return (
    <>
        {
            data.length > 0 &&
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">cuidad</th>
                    <th scope="col">Compañia</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(  (user:any) => 
                            <tr key={user.email}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        )
                        
                    }
                </tbody>
            </table>
        }
       
    </>
  )
}
