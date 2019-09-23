import React, { Component } from 'react'
import Nav from './component/Nav'
import NoteList from './component/NoteList'
import NoteForm from './component/NoteForm'
import {noteData} from './fireBaseConnect'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  addData = (item) => {
    noteData.push(item)
  }
  render() {
    // Lấy dữ liệu
    // noteData.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // })
    
    return (
      <div>
        <Nav/>
        .<div className="container">
          .<div className="row">
            <NoteList/>
            <NoteForm />
          </div>
        </div>
      </div>
    )
  }
}


 //   const pushData = () => {
  //   var connectData = firebaseConnect.database().ref('DataNote');
  //   connectData.push({
  //     title: 'Tiêu đề mới',
  //     noteContent: 'Nội dung mới vừa thêm',
  //     id: 4
  //   })
  //   console.log(123);
  // }
  // const xoaData = id => {
  //   var connectData = firebaseConnect.database().ref('DataNote');
  //   connectData.child(id).remove();
  //   console.log('Xoa thanh cong');
    
  // }