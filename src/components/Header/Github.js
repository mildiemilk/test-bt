import React from 'react'
import { Router, Route, Link } from 'react-router'
import { GithubButton, GithubCount, GithubLink } from '../Styled'

class Github extends React.Component {
  state = {
    count: 0,
  }

  componentDidMount = async () => {
    const url = 'https://api.github.com/repos/didierfranc/redux-react-starter'
    const res = await fetch(url).then(r => r.json())
    this.setState({ count: res.stargazers_count })
  }

  render() {
    return (
      <header>
        <nav>
          <Link to={{ pathname: '/' }}>
            LogIn
          </Link>
          <ul>
            <li>
              <Link to={{ pathname: '/pages' }}>
                All pages
              </Link>
            </li>
            <li>
              <a href="#">
                About us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Github
