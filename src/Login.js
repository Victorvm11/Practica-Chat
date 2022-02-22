import logo from './logo.svg';
import './Login.css';
import React from 'react';
import reactDom from 'react-dom';
 
function IncorporarRegistro(props){
  return(
    <div>
      <p>{props.frase}</p>
    </div>
  )
}
class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state={value:"", valor : "", valor_password : ""}
 
    this.cambio=this.cambio.bind(this);
    this.registrar=this.registrar.bind(this);
    this.cambioPassword=this.cambioPassword.bind(this);
    this.iniciaSesion=this.iniciaSesion.bind(this);
  }
  cambio(event){
    this.setState({valor:event.target.value});
 
  }
  cambioPassword(event){
    this.setState({valor_password:event.target.value});
    //localStorage.setItem('nombrar',this.state.valor_usuario);
    //console.log(this.state.valor_usuario);
 
  }
  iniciaSesion(){
    var datos = new FormData;
    datos.append('usuario', this.state.valor)
    datos.append('password', this.state.valor_password)

    fetch("http://localhost/React/inicia.php",{
    method:'POST',
    body: datos
  })
  .then(res=>res.json())
  .then( (result)=>{
    if(result=='Funciona'){
      localStorage.setItem("usuario",this.state.valor);
      window.location.href="/Chat";
    }
  },
  (error)=>{
    alert ('El usuario y la contraseña no son correctos');
  }
  )
  }
  registrar(){
    var datos = new FormData;
    datos.append('usuario', this.state.valor)
    datos.append('password', this.state.valor_password)
    //datos.append('usuario',localStorage.getItem('nombrar') )

    fetch("http://localhost/React/iniciarsesion.php",{
    method:'POST',
    body: datos
  })
  .then(response =>
    console.log(response.ok)
    
    )
    .then(
      (result)=>{
        this.setState({valor : ""});
        this.setState({valor_password : ""});
        

      }
      
    )

  }
  render(){
    return(
      <form>
      <div className='card card-body'>
          <div class="form-group">
              <input type="text" value={this.state.valor} name="usuario" className='form-control' placeholder="Usuario" onChange={this.cambio} />
          </div>
          <div class="form-group">
              <input type="password" name="password" className='form-control' placeholder="Password" value={this.state.valor_password} onChange={this.cambioPassword} />
          </div>
          <div class="form-group">
              <input type="button" name="boton" value='Iniciar Sesion'  className='form-control' onClick={this.iniciaSesion}/>
          </div>
          <input type="button" name="boton" className='btn btn-success btn-block' value='Registrarme' onClick={this.registrar}/>

  </div>
  </form>
        

    );
  }
  }
  export default Chat;
