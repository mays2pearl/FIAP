import axios from "axios"; /*Para se comunicar com a api, utilizaremos uma lib especializada em processos http, a lib no caso é a axios. */
import { useEffect, useState } from "react";


function Maysa(){

    const [usuarios, setUsuarios] = useState([]);/*useState Como teremos uma variavel que será dinamica, devemos utilizar esse hook, pois ele é responsável por cuidar da atualização em tempo real dessa variavel.*/

  useEffect(() => { /*useEffect Esse hook será executado toda vez que a tela for carregada, ou seja, utilizaremos ele para carregar nossa listagem inicial de usuarios. */
        axios.get('https://iot.14mob.com/api-fiap/public/index.php/users').then( response => {
            setUsuarios(response.data.users);
            console.log(response);
        })
    },[])


  return (
      <div className="formulario">
        <form>
        <label>Nome</label>
        <input name="name" value="" />
        <label>Email</label>
        <input name="email" value="" />
        <label>senha</label>
        <input name="password" value="" />
        <button type="submit">Enviar</button>  
        </form>
        <table className='minhaTabela'>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                </tr>
            
            </thead>  
            <tbody> 
                { usuarios.map( usuario => {
                    return (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.name}</td>
                            <td>{usuario.email}</td>
                        </tr>
                        )
                } ) }
            </tbody>
        </table>
    </div>
      
      
  );
}

export default Maysa;