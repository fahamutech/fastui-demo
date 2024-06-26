import {subscribeLoginFormData} from "../../../states/login_form.mjs";
import {inputErrorStyle} from "../../../services/reusable_styles.mjs";

/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function getDisplayMode(data) {
    // TODO: Implement the logic
    throw new Error('Method getDisplayMode not implemented');
}
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
    const subs = subscribeLoginFormData(({password_e})=>{
        data.component.states.setPasswordError(password_e);
    });
    return ()=>{
        subs.unsubscribe();
    }
}
