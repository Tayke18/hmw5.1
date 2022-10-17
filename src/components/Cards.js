import React from 'react'
import Card from './Card';
import CardLayout from './CardLayout';
import "./Cards.css"

const Cards = ({ array }) => {
  return (
    <div className='cards'>
      {array.map((el) => {
        return (
          <div key={el.id} className="mini-box"   >
            <CardLayout wallpaper={el.wallpaper} >
              <Card
                info={el.userInfo}
                img={el.profilePic}
                name={el.username} />
            </CardLayout></div>
        )
      })}

    </div>
  )
}

export default Cards;
