import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './App.css'

import Header from './components/header.component'
import Searchbox from './components/searchbox.component'
import CardList from './components/card-list.component'
import Scroll from './components/scroll.component'
import ErrorBoundry from './components/error-boundry.component'

import { setSearchfield, requestRobots } from './redux/actions'

const App = ({ onSetSearchfield, onRequestRobots, searchField, robots, isPending }) => {

  useEffect(() => {
    onRequestRobots()
  }, [onRequestRobots])

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase()) || robot.email.toLowerCase().includes(searchField.toLowerCase())
  )

  return (
    <div className="tc">
      <Header />
      <Searchbox searchChange={onSetSearchfield} />
      <Scroll>
        { !isPending ? 
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>   
          : 
          <h1>Loading...</h1>}
      </Scroll>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  }
}

const mapDispatchToProps = dispatch => ({
  onSetSearchfield: event => dispatch(setSearchfield(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
})

export default  connect(mapStateToProps, mapDispatchToProps)(App)