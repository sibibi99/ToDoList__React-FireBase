import React, { Component } from 'react'
import { connect } from 'react-redux';


class NoteItem extends Component {
  editNote = () => {
    this.props.changStatus()
    //console.log(this.props.Note);
    // Đẩy object Note lên Reducer
    this.props.getEditData(this.props.Note)
    
  }
  render() {
    return (
      <div className="card mb-2">
        <div className="card-header" role="tab" id="note1">
          <div className="row">
            <div className="col-md-10">
              <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#noteList" href={'#number' + this.props.i} aria-expanded="true" aria-controls="noteContent1">
                  {this.props.noteTitle}
                </a>
              </h5>
            </div>
            <div className="col-md-2 btn-group">
              <button onClick = {() => this.editNote()} className='btn btn-warning'>Sua</button>
              <button className='btn btn-danger'>Xoa</button>
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
    }
  }
}
export default connect(null, mapDispatchToProps)(NoteItem);