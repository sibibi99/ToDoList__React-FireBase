import React, { Component } from 'react'
import Nav from './component/Nav'
import NoteList from './component/NoteList'
import NoteForm from './component/NoteForm'
import {noteData} from './fireBaseConnect'
import { connect } from 'react-redux';


class App extends Component {

// Hàm Show Form
  showForm = () => {
    // console.log(this.props.isEdit);
    
    if(this.props.isEdit) {
      return <NoteForm />
    }
  }
  render() {

    
    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="row mt-4">
            <NoteList/>
            {this.showForm()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {  
  return {
    isEdit: state.QuanLyNoteReducer.isEdit
  }
}



export default connect(mapStateToProps, null)(App);

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