import React, {Component} from 'react';

class Counter extends Component {

  state={
    count:0
  }

  counterHandler(e,r){
    this.setState((state,props)=>({count:state.count+1}));
    // console.log(this.state.count)
    // console.log(e)
    // console.log(r)
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  render() {

    return (
      <div>
        {this.props.name}
        {this.state.count}

        {console.log(this.state.count)}
        <button onClick={(e)=> this.counterHandler(e,"zADasdf")}> click </button>
      </div>
    );
  }
}

export default Counter;