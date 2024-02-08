import {Component} from 'react'

import {v4} from 'uuid'

import './App.css'

const colorList = ['yellow', 'green', 'orange', 'brown', 'blue']

class Home extends Component {
  state = {
    userInput: '',
    userWebSite: '',
    userPassword: '',
    addCommentList: [],
    isTrue: false,
    isShow: false,
    searchInput: '',
  }

  addComments = event => {
    event.preventDefault()
    const {userInput, userWebSite, userPassword} = this.state
    const initial = userWebSite.slice(0, 1).toUpperCase()
    const randomeColor = colorList[Math.ceil(Math.random() * 5)]

    const newComment = {
      id: v4(),
      initialValue: initial,
      userinput: userInput,
      website: userWebSite,
      password: userPassword,
    }
    this.setState(prevState => ({
      addCommentList: [...prevState.addCommentList, newComment],
      userInput: '',
      userPassword: '',
      userWebSite: '',
      isTrue: true,
    }))
  }

  onDeletePasswords = id => {}

  onWebsite = event => {
    this.setState({userWebSite: event.target.value})
  }

  onPassword = event => {
    this.setState({userPassword: event.target.value})
  }

  onUsername = event => {
    this.setState({userInput: event.target.value})
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      userInput,
      userWebSite,
      userPassword,
      addCommentList,
      searchInput,
    } = this.state
    const {isTrue} = this.state

    console.log(userInput)
    console.log(userPassword)
    console.log(userWebSite)
    console.log(addCommentList.length)
    console.log(isTrue)
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="inner-bg">
          <form onSubmit={this.addComments}>
            <div className="addBg">
              <h1 className="h">Add New Password</h1>
              <div className="container-bg">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icons"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onWebsite}
                  value={userWebSite}
                />
              </div>
              <div className="container-bg">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icons"
                />
                <input
                  type="text"
                  placeholder="Enter User"
                  onChange={this.onUsername}
                  value={userInput}
                />
              </div>
              <div className="container-bg">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icons"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onPassword}
                  value={userPassword}
                />
              </div>
              <div className="Add-align">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="pm"
          />
        </div>
        <div className="display-d">
          <div className="lower-con">
            <div>
              <p>Your Passwords</p>
            </div>
            <div className="lower-search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search"
                onChange={this.onSearch}
              />
            </div>
          </div>
          <hr />
          <div className="check-boxs">
            <input type="checkbox" id="showPasswords" />
            <label htmlFor="showPasswords">Show Passwords</label>
          </div>
          <ul className="commentsList">
            {addCommentList.map(each => (
              <li className="lists">
                <p>{each.initialValue}</p>
                <div>
                  <p>{each.website}</p>
                  <p>{each.userinput}</p>
                  <p>{each.password}</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="delete"
                    onClick={this.onDeletePasswords}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                      alt="delete"
                      className="delete-img"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
