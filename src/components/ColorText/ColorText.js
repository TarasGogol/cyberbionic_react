import React, {Component} from 'react';
import "./ColorText.scss"

class ColorText extends Component {

  state = {
    color: "red",
    colorNum: 0
  }

  componentDidMount() {
    const {colorArr} = this.props
    if (colorArr) {
      this.setState({color: colorArr[0]})
    }
  }


  colorHandler() {
    const {colorArr} = this.props

    let colorNum = this.state.colorNum+1
    if (colorNum > colorArr.length-1) {
      colorNum = 0;
    }

    this.setState({colorNum: colorNum,color: colorArr[colorNum]})
    // this.setState({color: colorArr[colorNum]})


    // if (this.state.colorNum < this.props.colorArr.length - 1) {
    //   this.setState((prevState)=>({colorNum: prevState.colorNum + 1}))
    //   this.setState({color: this.props.colorArr[this.state.colorNum + 1]})
    // } else {
    //   this.setState({colorNum: 0})
    //   this.setState({color: this.props.colorArr[0]})
    // }

  }

  render() {
    const {text, params, sizeHandler} = this.props

    // let fontSize;
    // if(params){
    //   fontSize = params.color
    // }else fontSize = 20

    const style = {
      color: this.props.color || this.state.color,
      fontSize: params?.fontSize || 20
      // border: "2px solid gray"
    }

    return (
      <div>
        <p onClick={() => this.colorHandler()} style={style} className={"p"}> {text} </p>
        {sizeHandler && <button onClick={(e) => sizeHandler(e, 15)}> size up </button>}


        {/*<p onClick={() => this.colorHandler()} style={{color:"black"}} className={"p"}> {this.props.name} </p>*/}

      </div>
    );
  }
}

export default ColorText;