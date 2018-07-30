import React, { Component } from 'react'
import Rows from './rows'

class StoryTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      rows: []
    }
  }

  componentDidMount () {
    const { nxt, assetId } = this.props
    nxt.record
      .get(`${assetId}:general.title`)
      .then(({ value }) => {
        this.setState({
          title: value
        })
      })
    nxt.record
      .get(`${assetId}:story.editor`)
      .then(({ value }) => {
        this.setState({
          rows: value.document.nodes
        })
      })
  }

  render () {
    const { assetId } = this.props
    return (
      <div>
        <p><b>{this.state.title}</b></p>
        <hr />
        <Rows rows={this.state.rows}/>
      </div>
    )
  } 
}

export default StoryTemplate
