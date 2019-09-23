import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNoteAction } from '../redux/action'

 class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteContent:''
    }
  }
  // Lay Event
    isChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      // console.log(name);
      // console.log(value);
      this.setState({
        [name]: value
      }) 
    }
    // Add Note
    getData = (title, content) => {
      var item = {};
      item.noteTitle = title;
      item.noteContent = content;
      // Gửi item lên App xu ly
      // this.props.getData(item);
      // alert('Them moi' + JSON.stringify(item) + 'Thanh Cong!')
      this.props.addNoteAction(item)
    }

  render() {
    return (
      <div className="col-4">
      <h3>Thêm Note</h3>
      <form>
      <div className="form-group">
        <label htmlFor="noteTitle">Tên note</label>
        <input onChange = {(e) => this.isChange(e)} type="text" name="noteTitle" id="noteTitle" className="form-control" placeholder="Tiêu đề note" aria-describedby="noteTitle" />
        <small id="noteTitle" className="text-muted">Điền tiêu đề vào đây</small>
      </div>
      <div className="form-group">
        <label htmlFor="noteContent">Nội dung note</label>
        <textarea onChange = {(e) => this.isChange(e)} type="text" name="noteContent" id="noteTitle" className="form-control" placeholder="Nội dung note" aria-describedby="noteTitle" defaultValue={""} />
      </div>
      <button onClick = {() => this.getData(this.state.noteTitle, this.state.noteContent)} type = 'reset' className="btn btn-success btn-block">Lưu</button>
      </form>
    </div>
    )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    addNoteAction: (nhanVao) => {
      dispatch(addNoteAction(nhanVao))
    }
  }
}

// export default (NoteForm);
export default connect(null, mapDispatchToProps)(NoteForm);


