import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
 
  constructor(){
    super();
    this.state = {notas:[], categorias:[]}
    this._novasNotas = this._novasNotas.bind(this);
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas);
    this.props.categorias.inscrever(this._novasCategorias);
  }
  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas);
    this.props.categorias.desinscrever(this._novasCategorias);
  }
  _novasNotas(notas){
    this.setState({...this.state,notas})
  }
  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias })
  }
  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.props.filtrarNotas(evento.target.value);
  }

  render() {

    return (
      <section>
        <select 
        onChange={this._handleMudancaCategoria.bind(this)}
        className="form-cadastro_input"
        >
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index} >{categoria}</option>;
          })}
        </select>
        <ul className="lista-notas">
          {this.state.notas.map((nota, index) => {
            return (
              <li className={"lista-notas_item " + nota.classeDisplay} key={index}>
                
                <CardNota 
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo} 
                texto={nota.texto}
                categoria={nota.categoria}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListaDeNotas;
