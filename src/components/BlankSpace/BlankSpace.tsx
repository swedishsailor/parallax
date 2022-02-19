import React from 'react'
import { FC } from 'react';
import './BlankSpace.scss';

interface Title {
  header: string;
}

const BlankSpace:FC<Title> = (props) => {
  return (
    <div className='BlankSpace'>
      <h1 className='topHeader'>{props.header}</h1>
    </div>
  )
}

export default BlankSpace