import React from 'react';
import { Context } from './Context';
import { useRef } from 'react';
import Main from './Main';


const Login = ( ) =>{
    const {token,setToken} = React.useContext(Context);
    const [display, setDisplay] = React.useState(false)
    const log = e =>{
      e.preventDefault();
      const nom = name.current.value.trim();
      const pas = pass.current.value.trim();
      if(nom.length <=4 || pas.length <= 4){
        alert("name yoki passwordning lengthi juda kichik (kami 4ta)");
        name.current.value = null;
        pass.current.value = null;
        return
      }
      fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: nom,
          password: pas
        })
      })
      .then(res => res.json())
      .then(data => {
        setToken(data["token"])
        data["token"] ? setDisplay(false) : setDisplay(true)
       })
      .catch(err =>{
          console.log(err);
      })
      name.current.value = null;
      pass.current.value = null;
    }
    
  const name = useRef()
  const pass = useRef()

    {
        if(token){
            return <Main/>
        }else{
            return(
                <div className='login'>
                      <form autoComplete="off" className='form d-flex mt-5 mx-auto w-50' onSubmit={log} >
                  <input className="form-control " ref={name} type="text" placeholder='name *'/>
                  <input className="form-control  mx-3" ref={pass} type="text" placeholder='pass *'/>
                  <button className='btn btn-danger' type='submit' >Login</button>
                </form>
         
                   <h1 className={display ? 'w-50 mx-auto my-5 alert alert-danger' : 'd-none'} >Ma'lumotlar xato kiritildi</h1>
                   
                </div>
             )
        }
    }
}

export default Login;