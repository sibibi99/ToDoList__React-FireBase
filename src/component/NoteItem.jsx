import React, { Component } from 'react'

export default class NoteItem extends Component {
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
              <button className='btn btn-warning'>Sua</button>
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
