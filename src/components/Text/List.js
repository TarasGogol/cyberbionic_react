import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from "./List.scss"
import {connect} from "react-redux";
import {CHANGETITLE} from "../../redux/actionConst";
import {changeTitleCreator} from "../../redux/action";


class List extends Component {
  state={
    value:""
  }
  render() {
    const {text,tanya,count,arr, dispatch} = this.props

    console.log(arr)

    // const text = "Доброе Утро!!!"
    const list = arr?.map((el,i)=>{
      return <p key={uuidv4()}>{i} - {el}</p>
    })
    return (
        <>
          {/*<button onClick={()=>dispatch(changeTitleCreator("Redux"))}>Change title</button>*/}
          <button onClick={()=>dispatch({type:"Trololo"})}>Change title</button>
          {list}

          <form action="">
            <input type="text" value={this.state.value} onChange={(e)=>this.setState(({value:e.target.value}))}/>

          </form>

        </>
    );
  }
}

export default connect()(List);
// export default List;