import React from "react";
import { Form, Formik } from "formik";
// import { useEffect, useState } from "react";
import { employeesRequest } from "../api/employes.api";
// import axios from "axios";

function Employeecreate() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          salary: "",
        }}
        onSubmit={async (values) => {
          try {
            const response = await employeesRequest(values);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
            />
            <label>Salaray</label>
            <input
              type="number"
              name="salary"
              placeholder="salario"
              onChange={handleChange}
            />

            <button type="submit">SEND</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Employeecreate;
