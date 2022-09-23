import React, { useState } from 'react';
import { HttpClient } from '../api/HttpClient';
import { Title } from '../components/content/Title'
import { useForm } from '../hooks/useForm';
import { CrudUsersService } from '../services/CrudUsers';
import { validateForm } from '../utils/Validation';

export const CrearUsuario = () => {

  const [loading, setLoading]    = useState(false);
  const [message, setMessage] = useState('');
  const [colortxtmessage, setColorTxtMessage] = useState('');

  
  
  const [ formState, handleInputName ]:any = useForm({
    name: '',
    email: '',
    city: '',
    company_name: ''
  });

  const { name, email, city, company_name }:any = formState;


  const createUser = async(event:any) => {

    setColorTxtMessage('');

      if ( !validateForm()  ) return false;

       event.preventDefault();

       setLoading(true);

      const httpClient = new HttpClient();
      const createUserService = new CrudUsersService( httpClient );
      const users = await createUserService.createUserService('users', { name, email, city, company_name });

      if ( users.ok) {
          setColorTxtMessage('text-success');
          setMessage(users.msg);
      }else{
          setColorTxtMessage('text-danger');
          setMessage(users.msg);
      }
      setLoading(false);
  }


  return (
    <>
       

          <div className="row col-md-12">
          <Title title={'Crear usuario'}/>
            <p className={`text-center fs-3  mt-4 ${colortxtmessage} `} >
                {message}
            </p>
            <div className="col align-self-center p-4">
              <div className="card rounded-3 shadow-sm p-3" >
                <div className="card-body">
                  <form className="need-validate" onSubmit={createUser}>
                    <div className="row">
                      
                       <div className="col-md-6">
                          <label className="form-label">Nombre</label>
                          <input type="text" className="form-control" onChange={handleInputName} name="name" required/>
                       </div>
                       <div className="col-md-6">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" onChange={handleInputName} name="email" required/>
                       </div>
                    </div>
                    <div className="row">
                       <div className="col-md-6">
                          <label className="form-label">Ciudad</label>
                          <input type="text" className="form-control" onChange={handleInputName} name="city" required/>
                       </div>
                       <div className="col-md-6">
                          <label className="form-label">Nombre compañia</label>
                          <input type="text" className="form-control" onChange={handleInputName} name="company_name" required/>
                       </div>
                    </div>
                   <div className="mt-3 float-end">
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
                          <button type="submit" className="btn btn-primary">Crear usuario</button>
                      </div>
                      
                    }
                      
                    </div> 
                  </form>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}


{/* <form>
                      <div className="form-group">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="">
                          <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="">
                          <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                      </div>
                  </form> */}