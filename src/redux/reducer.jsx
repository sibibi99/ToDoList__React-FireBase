import * as types from './constant';
import { noteData } from '../fireBaseConnect';

const stateDefault = {
  DanhSachNote: [],
  isEdit: false,
  editItem: {},
  isAdd: false,
  AlernShow: false,
  AlernContent: '',
  AlernType: ''
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
      // Sự Kiện khi add Note hoặc Sửa
      case types.CHANGE_ADD_STATUS :{
        console.log('isAdd');
        
      return {...state, isAdd: !state.isAdd}
      }
      // Sự Kiện Aler
      case types.ALERN_ON :{        
      return {...state, AlernShow: true,
         AlernContent: action.AlernContent,
         AlernType: action.AlernType,
        }
      }
      case types.ALERN_OFF :{        
      return {...state, AlernShow: false}
      }
      case types.GET_EDIT_DATA :{
        //console.log(action.editObject);      
      return {...state, editItem: action.editObject}
      }
      case types.EDITING_DATA :{
        //Update dữ liệu lên FireBase
        console.log(action.editObject);        
        noteData.child(action.editObject.id).update({
          noteTitle: action.editObject.noteTitle,
          noteContent: action.editObject.noteContent
        })  
        console.log('Cap Nhat Thanh Cong!');
            
      return {...state, editItem: {}}
      }
      case types.DELETE_ITEM :{
       
        noteData.child(action.idItem).remove()  
        console.log('Xoa Thanh Cong!');
            
      return {...state, editItem: {}}
      }
  }
  return {...state}
}

export default QuanLyNoteReducer;