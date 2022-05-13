import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import "./Lista.css";
//import { useEffect, useState } from "react";

function Lista(props){
    
    function removerUsuario(id){
        axios.delete("https://iot.14mob.com/api-fiap/public/index.php/users/" + id).then( response => {
            alert('Deu certo removi o usuario')
            props.atualizarLista()
        }).catch( error => console.log(error));
  
    }

    return(
        <table className='minhaTabela table  table-striped'>
          <thead>
              <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
              </tr>
          
          </thead>  
          <tbody> 
              { props.usuarios.map( usuario => {
                  return (
                      <tr key={usuario.id}>
                          <td>{usuario.id}</td>
                          <td>{usuario.name}</td>
                          <td>{usuario.email}</td>
                          <td>
                              <button className="btn btn-primary" onClick={ event => props.onEditar(usuario) } > Editar </button>
                              <button className="btn btn-danger botao" onClick={ event => removerUsuario(usuario.id) } > Deletar </button>
                          </td>
                          
                      </tr>
                      )
              } ) }
          </tbody>
      </table>
    )
}

export default Lista;