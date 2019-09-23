import * as types from './constant';

const stateDefault = {
  DanhSachNote: [],
}

const QuanLyNoteReducer = (state = stateDefault, action) => {
  switch(action.type){
      case types.LAY_DANH_SACH_NOTE :{
      state.DanhSachNote = action.DanhSachNote;
      }
      case types.ADD_NOTE :{
      state.DanhSachNote = action.DanhSachNote;
      }
  }
  return {...state}
}

export default QuanLyNoteReducer;