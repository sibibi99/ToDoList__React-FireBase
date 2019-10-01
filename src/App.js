import React, { Component } from 'react'
import Nav from './component/Nav'
import NoteList from './component/NoteList'
import NoteForm from './component/NoteForm'
import { noteData } from './fireBaseConnect'
import { connect } from 'react-redux';
import AlernInfo from './component/AlernInfo'


class App extends Component {

  // Hàm Show Form
  showForm = () => {
    // console.log(this.props.isEdit);

    if (this.props.isEdit) {
      return <NoteForm />
    }
  }
  // Hàm Add sự kiện thêm Note
  handleAdd = () => {
    this.props.changEditStatus()
    this.props.changAddStatus() 
  }
  render() {
    return (
      <div>
        <Nav />
        <AlernInfo/>
        <div className="container my-4">
          <div class="row">
            <div className='col-md-6 w-100 '>
              <form className="  ">
                <input className="form-control " type="search" placeholder="Tìm Note..." aria-label="Search" />
              </form>
            </div>
            <div className='col-md-6'>
              <button onClick={(event) => {this.handleAdd(event)}} className="btn btn-outline-success my-2 my-sm-0" type="submit">Thêm Note</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4">
            <NoteList />
            {this.showForm()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isEdit: state.QuanLyNoteReducer.isEdit,
    isAdd: state.QuanLyNoteReducer.isAdd
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changEditStatus: () => {
      dispatch({
        // Để hiện thị Form ra
        type: 'CHANGE_EDIT_STATUS'
      })
    },
    changAddStatus: () => {
      dispatch({
        // Để hiện thị Form ra
        type: 'CHANGE_ADD_STATUS'
      })
    },
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);

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