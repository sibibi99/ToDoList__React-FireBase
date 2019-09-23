import * as types from './constant';
import { noteData } from '../fireBaseConnect'
import { type } from 'os';


export const addNoteAction = (nhanVao) =>{
  console.log('Biên nhận vào là: ' + nhanVao.noteTitle);
  
  return dispatch =>{
    // Xử dụng hàm push() đưa dữ liệu lên FireBase
    noteData.push(nhanVao);

  }
}
export const layDanhSachNoteAction = () =>{
  return dispatch => {        
 
  }
};

