import React, {Component} from 'react';
import ColorText from "../ColorText/ColorText";
import {connect} from "react-redux";
import ReduxCounter from "../ReduxCounter/ReduxCounter";

class Header extends Component {

  state={

  }

  handler(){

  }

  render() {
    const {params,sizeHandler, title} = this.props;

    console.log(title)

    return (
      <div>
        <ReduxCounter/>
        <ColorText sizeHandler={sizeHandler} params={params} text={title} colorArr={["fuchsia","grey","orange","purple","aquamarine"]} />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    title: state.title
  }
}

export default connect(mapStateToProps)(Header);