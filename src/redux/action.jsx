import * as types from './constant';
import { noteData } from '../fireBaseConnect'


export const addNoteAction = (nhanVao) =>{
  console.log('Biên nhận vào là: ' + nhanVao.noteTitle);
  
  return dispatch =>{
    // Xử dụng hàm push() đưa dữ liệu lên FireBase
    noteData.push(nhanVao);

  }
}

