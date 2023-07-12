'use client'
import React from "react"
import { Register } from "../../services/firebase/auth"
import "./register.css"

function Register() {

      const [state, setState] = React.useState({
            email: "",
            password: "",
            confirmPassword: "",
            displayName: ""
      })

      function onchange(event) {
            const value = event.target.value;
            const name = event.target.name;

            setState({
                  ...state,
                  [name]: value
            })
      }

      function onRegister(event){
            event.preventDefault();
            const {email, password, displayName, confirmPassword} = state;
            if(confirmPassword === password){
                  const sendable = {
                        email,
                        password,
                        displayName
                  }
                  singup (sendable)
            }else {
                  alert("Las contraseñas no coinciden")
            }
      }

      return (
            <div className = "Container" >
                  <form onSumbit={onRegister} style = {{
                        display: "flex",
                        flexaction: "column",
                  }}>
                        <input required onChange={onChange} name="email" type="email" value={state.email}></input>
                        <input required onChange={onChange} name="password" type="password" value={state.password}></input>
                        <input required onChange={onChange} name="confirmPassword" type="password" value={state.confirmPassword}></input>
                        <input required onChange={onChange} name="displayName" type="text" value={state.displayName}></input>
                        <buttom type="sumbit">Registrarte</buttom>     
                  </form>    
            </div>
      )
}


export default Register;