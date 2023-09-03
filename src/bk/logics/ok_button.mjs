import {profileCardState} from "../../blueprints/modules/core/services/profile_card_state.mjs";

/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function okButtonPressed(data) {
    // const prev = data.component.states.counter;
    // console.log(prev);
    profileCardState.increment();
}
/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function onButtonMounted(data) {
    // TODO: Implement the logic
    console.log('Button mounted');
}