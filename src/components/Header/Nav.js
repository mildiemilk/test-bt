import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to={{ pathname: '/login' }}>HOME</Link>

        </nav>
      </div>
    )
  }
}

export default Nav
