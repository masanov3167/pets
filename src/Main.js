import React, { useEffect, useState } from 'react';
import { Context } from './Context';

const Main = () =>{
    const {token} = React.useContext(Context);

    const [value, setValue] = useState({
        isFetched: false,
        data: {},
        error: false,
    });

    useEffect(() =>{
          fetch('http://localhost:8000/user', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              'access_token': token
            },
            })
          .then(res => res.json())
          .then(data => setValue({
              isFetched: true,
              data: data,
              error: false,
            }),)
          .catch(err =>{
              console.log(err);
              setValue({
                error: true,
                isFetched: false,
                data: {}
              })
          })
      },[token])
    return(
        <ol className='list w-75 mx-auto my-5'>
             {value.error ? (
               <>
                  <h1 className='alert alert-danger' >Server yoki sizning internetingizda muammo</h1>
               </>
             ) : (
               <></>
             )}
  
               {value.isFetched && (value.data.data ? (
                          <>
                               <h1 className='alert alert-success text-center'>{value?.data["message"]}</h1>

                                <div className='d-flex justify-content-between flex-wrap' >
                                    {value.data.data.map((e,i) =>(
                                        <ol className='card p-0 mb-5' style={{"width":"27%"}} key={i}  >
                                            <img className='card-img-top w-100' style={{"height":"150px"}} src={e.img} alt={e.name} />
                                            <div className="card-body w-100 m-0">
                                                <h4 className="card-title">name: {e.name}</h4>
                                                <h6>type: {e.type.map(a =>a).join(', ')}</h6>
                                                <h6>weight: {e.weight}</h6>
                                                <h6>height: {e.height}</h6>
                                             </div>
                                        </ol>
                                    ))}
                                </div>
                          </> 
                   ) : (
                     <>
                       <h1 className='alert alert-danger' >afsuski ma'lumotlar yuklanmadi </h1>
                     </>
                   ))}
         </ol>
    )
}

export default Main;