import React, { Component } from 'react'
import { connect } from 'react-redux';


class NoteItem extends Component {
  // Sửa Note
  editNote = () => {
    this.props.changStatus()
    //console.log(this.props.Note);
    // Đẩy object Note lên Reducer
    this.props.getEditData(this.props.Note)
  }
  // Xóa Note
  deleteNote = (id) => {
    this.props.deleteItem(id)
    this.props.alernOn('Xóa Thành Công: ' + this.props.Note.noteTitle, 'info')
  }

  render() {
    return (
      <div className="card mb-2">
        <div className="card-header" role="tab" id="note1">
          <div className="row ">
            <div className="col">
              <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#noteList" href={'#number' + this.props.i} aria-expanded="true" aria-controls="noteContent1">
                  {this.props.noteTitle}
                </a>
              </h5>
            </div>
            <div className='col d-flex flex-row-reverse'>
            <div className=" btn-group">
              <button onClick = {() => this.editNote()} className='btn btn-warning'>Sua</button>
              <button onClick = {() => this.deleteNote(this.props.Note.id)} className='btn btn-danger'>Xoa</button>
            </div>

            </div>
          </div>
        </div>
        <div id={'number' + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
          <div className="card-body">
            {this.props.noteContent}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    AlernType: state.QuanLyNoteReducer.AlernType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changStatus: () => {
      dispatch({
        // Không cần đưa lên Action, gọi trực tiếp lên Reducer
        type: 'CHANGE_EDIT_STATUS'
      })
    },
    getEditData: (editObject) => {
      dispatch({
        type: 'GET_EDIT_DATA',
        editObject
      })
    },
    deleteItem: (idItem) => {
      dispatch({
        type: 'DELETE_ITEM',
        idItem
      })
    },
    alernOn: (AlernContent) => {
      dispatch({
        // BẮt Sự kiện Aler
        type: 'ALERN_ON',
        AlernContent
      })
    },
    alernOff: () => {
      dispatch({    
        type: 'ALERN_OFF'
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);