import React, { Component } from 'react'
import { Alert, AlertContainer } from "react-bs-notifier";import { connect } from 'react-redux';


class AlernInfo extends Component {
  handleDismiss = () => {
    this.props.alernOff()
  }
  render() {
    if(this.props.AlernShow === false) return null;
    return (
      <AlertContainer position='top-right'>
        <Alert  onDismiss = {() => this.handleDismiss()} timeout= {1000} type={this.props.AlernType}>{this.props.AlernContent}
        </Alert>
    </AlertContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    AlernShow: state.QuanLyNoteReducer.AlernShow,
    AlernContent: state.QuanLyNoteReducer.AlernContent,
    AlernType: state.QuanLyNoteReducer.AlernType
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    alernOff: () => {
      dispatch({type: 'ALERN_OFF'})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlernInfo)