import logo from './logo.svg';
import './App.css';
import React from 'react';
import reactDom from 'react-dom';
 
function Incorporar(props){
  return(
    <div>
      <p>{props.frase}</p>
    </div>
  )
}
class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state={value:"", valor : "", valor_usuario : "", comentarios:[], NumeroMensaje: ""}
 
    this.cambio=this.cambio.bind(this);
    this.insertar=this.insertar.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
    this.cambioUsuario=this.cambioUsuario.bind(this);
    this.borrar=this.borrar.bind(this);
  }
  cambio(event){
    this.setState({valor:event.target.value});
 
  }
  cambioUsuario(event){
    this.setState({valor_usuario:event.target.value});
    //localStorage.setItem('nombrar',this.state.valor_usuario);
    //console.log(this.state.valor_usuario);
 
  }
  componentDidMount(){
    fetch("http://localhost/React/mostrar.php",{

    }
    ).then(
      res =>
      res.json()
      
    )
    .then(
      (result)=>{
        this.setState({valor : ""});
        this.setState({comentarios: result});
        

      }
    )
  }
  borrar(){
    
    //datos.append('usuario',localStorage.getItem('nombrar') )

    fetch("http://localhost/React/borrar.php",{

  })
  .then(res =>
    res.json()
    
    )
    .then(
      (result)=>{
        alert("Borrado correctamente")
        window.location.reload();
      }
    )
  }
  
  insertar(){
    var datos = new FormData;
    datos.append('comentario', this.state.valor)
    datos.append('usuario', localStorage.getItem('usuario'))
    //datos.append('usuario',localStorage.getItem('nombrar') )

    fetch("http://localhost/React/insertar.php",{
    method:'POST',
    body: datos
  })
  .then(response =>
    console.log(response.ok)
    
    )
    .then(
      (result)=>{
        this.componentDidMount()
      }
    )

  }
  
  render(){
    return(
      
      <div className='App'>
        <header className='App-header'>
          <div className='usuario'>
          <h1 id='titulo'><b>{localStorage.getItem('usuario')}</b></h1>
          </div>

          <div className='borde'>
            <div className='scroll'>
        <h2 className='mensaje'>Mensajes</h2><div id='cuadro_texto'>{this.state.comentarios.map(mostrar=>(<li id='lista' key={mostrar.NumeroMensaje}><b>{mostrar.Usuario}:</b>{mostrar.Mensaje}</li>))}</div>
        </div>
        <div className='borde1'></div>
        <div className='espacio'>
         <h2> Escriba un mensaje</h2>
         </div>
         
         <div className='espacio1'>
         <input type="text" id='campo_texto' name='comentario' value={this.state.valor} onChange={this.cambio}/>
         
         </div>
          <input type='button' name='boton' value='Enviar' onClick={this.insertar}/>
          
          <div id='borrarMensaje'>
         
         <input type="button" name="bBorrar" value='Borrar Mensajes'  className='btn btn-success btn-danger' onClick={this.borrar}/>
         </div>
      
          
         
          </div>
          <a className='cerrar' href='/Inicia'>Cerrar Sesion</a>
        </header>

      </div>
    );
  }
  }
  export default Chat;