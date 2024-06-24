import {mergeLoginFormData, subscribeLoginFormData} from "../../../states/login_form.mjs";
import {inputStyle, inputStyleBorderColor} from "../../../services/reusable_styles.mjs";

/**
 * @param data {
 * {component: {states: *,inputs: *}, args: Array<*>}
 * }
 */
export function onTextChange(data) {
    const value = data.args[0].target.value;
    data.component.states.setUsername(value);
    mergeLoginFormData({username: value, username_e: ''});
}

/**
 * @param data {
 * {component: {states: *,inputs: *}, args: Array<*>}
 * }
 */
export function getStyle(data) {
    const {borderColor} = data.component.states;
    return inputStyle(borderColor);
}

/**
 * @param data {
 * {component: {states: *,inputs: *}, args: Array<*>}
 * }
 */
export function listeningForInputError(data) {
    const subs = subscribeLoginFormData(value => {
        const {username_e} = value;
        if (username_e && username_e !== '') {
            data.component.states.setBorderColor('red');
        } else {
            data.component.states.setBorderColor(inputStyleBorderColor);
        }
    });
    return () => {
        subs.unsubscribe();
    }
}
