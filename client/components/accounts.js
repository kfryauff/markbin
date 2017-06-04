import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'


// Uses Blaze and Meteor Templating to render Accounts UI
class Accounts extends Component {
  componentDidMount() {
    // render Blaze accounts form & place into div
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container))
  }

  componentWillUnmount() {
    // find forms and destroy them (necessary when circumventing react)
    Blaze.remove(this.view)
  }

  render() {
    return (
      <div ref="container"></div>
    )
  }
}

export default Accounts
