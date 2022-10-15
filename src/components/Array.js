import React from 'react'
import { CommentDate } from './Date'
import Img from './Img'
import Name from './Name'
import { Text } from './Text'
import './CommentWrapper.css'
import CommentWrapper from './CommentWrapper'


export const Array = ({ array }) => {
  return (
    <div className='mainBox'>
      {array.map((el) => {
        return (<div key={el.id} className="main">
          <CommentWrapper className="first-wrapper">

            <Img image={el.author.avatarUrl} />
            <Name name={el.author.name} />
          </CommentWrapper>
          <CommentWrapper className="second-wrapper">

            <Text text={el.text} />
            <CommentDate comment={el.date.toLocaleString()} />
          </CommentWrapper>

        </div>)
      })}
    </div>
  )
}

