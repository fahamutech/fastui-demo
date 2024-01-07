import {subscribeLoginLogs} from "../../../states/login_logs.mjs";

/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function onStart(data) {
    // data.component.states.setData(['hello', 'world'])
    const subs = subscribeLoginLogs(values=>{
        // console.log(values,'VALUESSSS');
        // data.component.states.setData([]);
        data.component.states.setData(values);
    });
    return ()=>{
        return subs.unsubscribe();
    }
}
/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function listContainerClicked(data) {
    // TODO: Implement the logic

}