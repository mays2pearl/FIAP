
import { useState, useReducer } from 'react';
import './App.css';

// Reducer - Redutor, filtro, um robozinho. É dividido em três partes estado, event, contexto.

//evento - quem dispara o reducer.
//estado - é a informação armazenada
//contexto - é a área de atuação.
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function Register() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {};


  // function expression - Só existe a partir desta linha. Ela não sofre: Hoisting.
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };


  return (
    <div className="App">
     <h1>Formulario de Cadstro</h1>

    {submitting && (
      <div>
        <p>Enviando o formulario...</p>
        <ul>
          {Object.entries(formData).map(([name, value])=>(
            <li key={name}>
              <strong>{name}</strong>: {value.toString()}
            </li>
          ))}
        </ul>
        </div>
    )}

     <form onSubmit={handleSubmit}>
       <fieldset>
       <label>
         <p>CPF:</p>
         <input type="text" name='cpf' id='cpf' required onChange={handleChange}></input>
       </label>
       </fieldset>
       <button type='submit'>Enviar</button>
     </form>
    </div>
  );
  
} 

export default Register;
