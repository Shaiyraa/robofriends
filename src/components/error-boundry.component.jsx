import React from 'react'

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }
  
  componentDidCatch(err, info) {
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) {
      return <h1>Oops, something went wrong!</h1>
    }
    
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default ErrorBoundry