import React, { Component } from 'react';
import { noteData } from '../fireBaseConnect';
import { connect } from 'react-redux';
import { layDanhSachNoteAction } from '../redux/action'
import NoteItem from './NoteItem';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFireBase: []
    }
  }

  // Lấy dữ liệu trên FireBase
  layDanhSachNote = () => {
    console.log(this.state.dataFireBase);
    
    if (this.state.dataFireBase) {
      return this.state.dataFireBase.map((item, index) => {
        return (
          <NoteItem
            key={index}
            i = {index}
            noteTitle={item.noteTitle}
            noteContent={item.noteContent}
          />
        )
      })
    }
  }

  //  Thực hiện trước khi render
  componentWillMount() {
    noteData.on('value', (notes) => {
      // Notes Firebase trả về dữ liệu là 1 element => ta phải duyệt thành mảng  
      var arrayData = [];
      notes.forEach(element => {
        const key = element.key;
        const noteTitle = element.val().title;
        const noteContent = element.val().noteContent;
        arrayData.push({
          id: key,
          noteTitle: noteTitle,
          noteContent: noteContent
        })
      })
      this.setState({
        dataFireBase: arrayData
      })
    })
  }


  render() {
    return (
      <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          {this.layDanhSachNote()}

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.QuanLyNoteReducer.DanhSachNote);

  return {
    DanhSachNote: state.QuanLyNoteReducer.DanhSachNote
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // layDanhSachNote: () => {
    //   dispatch(layDanhSachNoteAction());
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
