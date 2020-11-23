import React, { useState, useEffect } from 'react'
import './App.css'

import Header from './components/header.component'
import Searchbox from './components/searchbox.component'
import CardList from './components/card-list.component'
import Scroll from './components/scroll.component'

//import { robotsArr } from './robots'

const App = () => {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => setRobots(users))
    .catch()
  }, [])

  const onSearchChange = (e) => {
    setSearchfield(e.target.value)
  }

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase()) || robot.email.toLowerCase().includes(searchfield.toLowerCase())
  )

  return (
    <div className="tc">
      <Header />
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        { robots.length ? <CardList robots={filteredRobots}/> : <h1>Loading...</h1>}
      </Scroll>
    </div>
  )
}

export default App