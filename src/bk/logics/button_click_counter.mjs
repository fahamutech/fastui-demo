import {profileCardState} from "../../blueprints/modules/core/services/profile_card_state.mjs";

/**
 * @param data {
 * {component: {states: *,inputs: *}, args: Array<*>}
 * }
 */
export function counterLister(data) {
    const subs = profileCardState.subscribe((value) => {
        data.component.states.setCounter(`Button clicked times: ${value}`);
    });
    return () => {
        subs.unsubscribe();
    }
}
/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function onMounted(data) {
    console.log('Counter tracker mounted')
}