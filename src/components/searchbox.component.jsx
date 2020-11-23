import React from 'react'

const Searchbox = ({ searchChange }) => (
  <div className="pa2">
    <input className="pa3 ba b--green bg-lightest-blue" 
    aria-label="Search robots"
    type="search" 
    placeholder="search robots"
    onChange={searchChange} 
    />
  </div>
)

export default Searchbox