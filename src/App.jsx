// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.scss';
import List from "./components/Text/List";
import Counter from "./components/Counter/Counter";
import ColorText from "./components/ColorText/ColorText";
import Header from "./components/Header/Header";
import {connect} from "react-redux";
import {decActionCreator, incActionCreator} from "./components/ReduxCounter/counterAction";

// import logo from "assets/img/margarita.jpg"
const logo = require(`./assets/img/blood_type_coffee.svg`).default;


class App extends Component {

  state={
    arr:[12,34,"asdf","asdf", 1],
    showCounter:true,
    count:5,
    header: {
      color:"green",
      fontSize:42
    }
  }

  counterHandler(){
    this.setState({count:this.state.count+1})
  }

  sizeHandler(e,sizeStep){
    console.log(e)
    this.setState({header:{fontSize:this.state.header.fontSize+sizeStep}})
  }

  render() {
      const {dispatch} = this.props

    return (
      <div className="App">

        <Header text={"This is Header"} params={this.state.header} sizeHandler={(e,size)=>this.sizeHandler(e,size)} />

          <button onClick={()=>dispatch(incActionCreator())}>+</button>
          <button onClick={()=>dispatch(decActionCreator())}>-</button>
          <button>RANDOM</button>
        {/*<button onClick={()=>this.sizeHandler()} > size up </button>*/}

        {/*<button onClick={()=>this.setState({color:"grey"})}>grey </button>*/}

        <ColorText text={"Легко учить React!!!"} color={"red"}/>
        {/*<ColorText text={"Добрый вечер!"} color={this.state.color}/>*/}

        <ColorText text={"Компонент меняющий цвет"} colorArr={["black","grey","blue"]} />
        <ColorText text={"Компонент меняющий цвет"} colorArr={["green","grey","blue"]} />
        <ColorText text={"Компонент меняющий цвет"} colorArr={["red","grey","orange","purple"]} />

        {/*<Functional/>*/}
        {/*<ClassComponent/>*/}

        {this.state.showCounter&&<Counter handler={()=>this.counterHandler()} name={"Counter"}/>}

        <button onClick={()=>this.setState({showCounter:!this.state.showCounter})}>click</button>

        <List text={"Доброе Утро!!!"} count={33} arr={this.state.arr}/>
        {/*<List text="Мы з Украины!!!" tanya="Киев"/>*/}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect()(App);



