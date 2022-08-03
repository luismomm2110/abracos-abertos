import { useState } from "react";

export const useForm = (initialValues, url) => {
  const [formFields, setFormFields] = useState(initialValues);

  const handleInput = (event) => {
    event.preventDefault();
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(formFields).some((field) => field.length === 0)) {
      alert("Preencha todos campos");
      return;
    }

    fetch(`http://localhost:9000/api/${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formFields),
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    setFormFields({ ...initialValues });
  };

  return [formFields, handleInput, handleSubmit];
};
