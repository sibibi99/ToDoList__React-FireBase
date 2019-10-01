import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNoteAction } from '../redux/action'

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteContent: '',
      id: ''
    }
  }

  componentWillMount() {
    if (this.props.editItem) {  //Nếu là Sửa thì có dữ liệu
      this.setState({
        noteTitle: this.props.editItem.noteTitle,
        noteContent: this.props.editItem.noteContent,
        id: this.props.editItem.id
      })
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
    // Trường hợp sửa
    if (this.state.id) {
// console.log('Đang sửa dũ liệu');
      // Gom dữ liệu vào biến editObject
      var editObject = {};
      editObject.id = this.state.id;
      editObject.noteTitle = this.state.noteTitle;
      editObject.noteContent = this.state.noteContent;
      // Đưa lên Store
      // console.log(editObject);
      
      this.props.editDataStore(editObject)
      // Đóng Form
      this.props.changStatus();
      // Gọi hàm THông báo
      this.props.alernOn('Sửa Thành Công!', 'warning')

    } else { // Trường Hợp Thêm Mới
      var item = {};
      item.noteTitle = title;
      item.noteContent = content;
      // Gửi item lên App xu ly
      // this.props.getData(item);
      // alert('Them moi' + JSON.stringify(item) + 'Thanh Cong!')
      this.props.addNoteAction(item)
       // Đóng Form
       this.props.changStatus();
       // Gọi hàm THông báo
       this.props.alernOn('Thêm Mới Thành Công!', 'success')
    }
  }
  // Render Tiêu đề
  titleNote = () => {
    if(this.props.isAdd){
      return <h3>Thêm Note mới</h3>
    } else {
      return <h3>Sửa Note</h3>
    }
  }
  // Render Button
  ButtonNote = () => {
    if(this.props.isAdd){
      return <button onClick={() => this.getData(this.state.noteTitle, this.state.noteContent)} type='reset' className="btn btn-danger btn-block">Lưu</button>
    } else {
      return <button onClick={() => this.getData(this.state.noteTitle, this.state.noteContent)} type='reset' className="btn btn-warning btn-block">Cập Nhật</button>
    }
  }

  render() {
    // console.log(this.props.editItem);

    return (
     <div classname="col-4" style={{backgroundColor: '#0c8877', padding: 20, borderRadius: 5, color: 'yellow'}}>
        {this.titleNote()}
        <form>
          <div className="form-group">
            <label htmlFor="noteTitle">Tên note</label>
            <input defaultValue={this.props.editItem.noteTitle} onChange={(e) => this.isChange(e)} type="text" name="noteTitle" id="noteTitle" className="form-control" placeholder="Tiêu đề note" aria-describedby="noteTitle" />
          </div>
          <div className="form-group">
            <label htmlFor="noteContent">Nội dung note</label>
            <textarea onChange={(e) => this.isChange(e)} type="text" name="noteContent" id="noteTitle" className="form-control" placeholder="Nội dung note" aria-describedby="noteTitle" defaultValue={this.props.editItem.noteContent} />
          </div>
          {this.ButtonNote()}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    editItem: state.QuanLyNoteReducer.editItem,
    isAdd: state.QuanLyNoteReducer.isAdd
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNoteAction: (nhanVao) => {
      dispatch(addNoteAction(nhanVao))
    },
    editDataStore: (editObject) => {
      dispatch({
        type:'EDITING_DATA',
        editObject} )
    },
    changStatus: () => {
      dispatch({
        // Không cần đưa lên Action, gọi trực tiếp lên Reducer
        type: 'CHANGE_EDIT_STATUS'
      })
    },
    alernOn: (AlernContent, AlernType) => {
      dispatch({
        // BẮt Sự kiện Aler
        type: 'ALERN_ON',
        AlernContent,
        AlernType
      })
    },
    alernOff: () => {
      dispatch({    
        type: 'ALERN_OFF'
      })
    },
  }
}

// export default (NoteForm);
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);


