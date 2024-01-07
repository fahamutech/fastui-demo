import {subscribeLoginProgress} from "../../../states/login_form.mjs";

/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function onStart(data) {
    // TODO: Implement the logic
    const subs = subscribeLoginProgress(value => {
        data.component.states.setCondition(value);
    });
    return () => {
        subs.unsubscribe();
    }
}