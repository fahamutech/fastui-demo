import {subscribeLoginFormData} from "../../../states/login_form.mjs";
import {inputErrorStyle} from "../../../services/reusable_styles.mjs";

/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function getStyle(data) {
    return inputErrorStyle();
}
/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function listeningForError(data) {
    const subs = subscribeLoginFormData(({username_e})=>{
       data.component.states.setUsernameError(username_e);
    });
    return ()=>{
        subs.unsubscribe();
    }
}
