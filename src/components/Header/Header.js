import React, {Component} from 'react';
import ColorText from "../ColorText/ColorText";

class Header extends Component {

  state={

  }

  handler(){

  }

  render() {
    const {text,params,sizeHandler} = this.props;

    // console.log(params)

    return (
      <div>
        <ColorText sizeHandler={sizeHandler} params={params} text={text} colorArr={["fuchsia","grey","orange","purple","aquamarine"]} />
      </div>
    );
  }
}

export default Header;