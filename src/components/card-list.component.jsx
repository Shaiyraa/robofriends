import React from 'react'
import Card from './card.component'

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => <Card key={i} robot={robots[i]} />)}
    </div>
  )
}

export default CardList