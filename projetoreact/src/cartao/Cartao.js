import 'bootstrap/dist/css/bootstrap.css';
import './Cartao.css';

function Cartao(props) {

    return(
   <div class="card my-3 cartao">
       <div class="card-body">

       <h5 class="card-title">{props.titulo}</h5>
       {props.children}
   </div>
   </div>
    )
}

export default Cartao;