import { combineReducers } from "redux";
/* CombineReducers é utilizado quando se tem vários reduces, isto é, varias funcionalidades dentro da aplicação */
import course from "./course";

export default combineReducers({
  course
});

/* 
exemplo de como organizar o código se houvesse mais de um reducer
{ 
    course: { modules: [], activeLesson:{}, activeModule:{} },
    user: { nome: '', avatar: ''}
 } */
