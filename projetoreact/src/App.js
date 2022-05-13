import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Lista from './lista/Lista.js';
import 'bootstrap/dist/css/bootstrap.css';
import Cartao from './cartao/Cartao';



function App() {


  const [usuarios, setUsuarios] = useState([]);
  const [id,setId] = useState("");
  const [nome,setNome] = useState("");
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  
  function salvarFormulario(){
      

      let parametros = {
          name: nome,
          email: email,
          password: senha
      }
      axios.post('https://iot.14mob.com/api-fiap/public/index.php/users', parametros).then(response => {
          if(response.status == 201){
              alert('Ebaaaaa deu certo')
              atualizarLista();
          }else{
              alert('lascou')
          }
      }).catch( error => console.log(error));

  }

  

  function atualizarUsuarioApi(){

      let parametros = {
          name: nome,
          email: email,
          password: senha
      }
      axios.put('https://iot.14mob.com/api-fiap/public/index.php/users/'+ id, parametros).then(response => {
          if(response.status == 200){
              alert('Ebaaaaa deu certo')
              atualizarLista();
          }else{
              alert('lascou')
          }
      }).catch( error => console.log(error));
  }

  function atualizarUsuario(usuario){
      setId(usuario.id);
      setNome(usuario.name);
      setEmail(usuario.email);
      setSenha(usuario.password);
  }

  function atualizarLista(){
    axios.get('https://iot.14mob.com/api-fiap/public/index.php/users').then( response => {
          setUsuarios(response.data.users);
      })
  }
  
  
useEffect(() => {
  atualizarLista();
  },[])


return (
  <div className="container">
   <Cartao titulo="Cadastro de usuario">
  <form onSubmit={event => {
      event.preventDefault();
      if(id != ''){
          atualizarUsuarioApi()
      }else{
          salvarFormulario();
      }
      
      return false;
  } } > 
  <div className="form-group">
  <label>Nome</label>
  <input className="form-control" name="name" value={ nome }  onChange={ e => setNome(e.target.value) } />
  </div>
  <div className="form-group">
  <label>Email</label>
  <input className="form-control" name="email" value={ email } onChange={ e => setEmail(e.target.value) } />
  </div>
  <div className="form-group">
  <label>senha</label>
  <input className="form-control" name="password" value={ senha } onChange={ e => setSenha(e.target.value) } />
  </div>
  
  <button className="btn btn-primary mt-3" type="submit">Enviar</button>
  </form>
  </Cartao>
  <Cartao titulo="Lista de usuarios">
 <Lista 
  usuarios={usuarios} 
  atualizarLista = { e => atualizarLista() } 
  onEditar= { usuario => atualizarUsuario(usuario) } />
  </Cartao>
</div>
    
    
);

  
}

export default App;