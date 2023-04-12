import React, { useState } from "react";
import { Form, Formik } from "formik";
import { login } from "../api/employes.api";

function Login2() {
    return (
      <>
        <div>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={async (values) => {
              try {
                 
                 const response = await login(values);
                 //document.cookie= `token=${response.data.token}; max-age=${60*24*24*30}; path=/; samesite=None; secure;`
                 console.log(response)
               
              } catch (error) {
                console.error(error);
              }
            }}
          >
            {({ handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="User"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">Enviar</button>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }
  
  export default Login2;
  