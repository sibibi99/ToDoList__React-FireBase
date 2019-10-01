import * as types from './constant';
import { noteData } from '../fireBaseConnect'


export const addNoteAction = (nhanVao) =>{
  console.log('Nhận vào là tieu de la: ' + nhanVao.noteTitle +  '   Content: ' + nhanVao.noteContent);
  
  return dispatch =>{
    // Xử dụng hàm push() đưa dữ liệu lên FireBase
    noteData.push(nhanVao);

  }
}

