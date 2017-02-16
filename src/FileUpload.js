import React from 'react'

export default class FileUpload extends React.Component {
  constructor () {
    super()
    this.state = {
      uploadValue: 0
    }
  }

  render () {
    return (
      <div>
        <progress value={this.state.uploadValue} max='100' />
        <br />
        <input type='file' onChange={this.props.onUpload} />
      </div>
    )
  }
}
