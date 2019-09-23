import * as types from './constant';
import { noteData } from '../fireBaseConnect';

const stateDefault = {
  DanhSachNote: [],
  isEdit: false,
  editItem: {}
}

const QuanLyNoteReducer = (state = stateDefault, action) => {
  switch(action.type){
      case types.LAY_DANH_SACH_NOTE :{
      state.DanhSachNote = action.DanhSachNote;
      }
      case types.ADD_NOTE :{
      state.DanhSachNote = action.DanhSachNote;
      }
      case types.CHANGE_EDIT_STATUS :{
      return {...state, isEdit: !state.isEdit}
      }
      case types.GET_EDIT_DATA :{
        //console.log(action.editObject);      
      return {...state, editItem: action.editObject}
      }
      case types.EDITING_DATA :{
        //Update dữ liệu lên FireBase
        // console.log(action.editObject);        
        noteData.child(action.editObject.id).update({
          title: action.editObject.noteTitle,
          noteContent: action.editObject.noteContent
        })  
        console.log('cao nhat thanh cong');
            
      return {...state, editItem: {}}
      }
  }
  return {...state}
}

export default QuanLyNoteReducer;