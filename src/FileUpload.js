import React from 'react'
import firebase from 'firebase'

export default class FileUpload extends React.Component {
  constructor () {
    super()
    this.state = {
      uploadValue: 0,
      picture: ''
    }
  }

  handleUpload (event) {
    const file = event.target.files[0]
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`)
    const task = storageRef.put(file)

    task.on('state_changed', snapshot => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        uploadValue: percentage
      })
    }, error => {
      console.log(error.message)
    }, () => {
      this.setState({
        uploadValue: 100,
        picture: task.snapshot.downloadURL
      })
    })
  }

  render () {
    return (
      <div>
        <progress value={this.state.uploadValue} max='100' />
        <br />
        <input type='file' onChange={this.handleUpload.bind(this)} />
        <br />
        <img width='100' src={this.state.picture} />
      </div>
    )
  }
}
