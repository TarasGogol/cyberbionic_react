import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import "./Text.scss"

const Text = (props) => {

  const {text,tanya,count,arr} = props

  console.log(arr)

  // const text = "Доброе Утро!!!"

  const list = arr?.map((el,i)=>{
    return <p key={uuidv4()}>{i} - {el}</p>
  })

  return (
    <>
      {list}
    </>
  );
};

export default Text;