import {
    changeLoginProgress,
    getLoginFormData,
    getLoginProgressValue,
    mergeLoginFormData,
    subscribeLoginProgress
} from "../../../states/login_form.mjs";
import {loginRemote} from "../../../services/user.mjs";
import {addLoginLog} from "../../../states/login_logs.mjs";

/**
 * @param data {
 * {component: {states: *,inputs: *}, args: Array<*>}
 * }
 */
export function handleSubmit(data) {
    if (getLoginProgressValue()) {
        console.log('Another login on going');
        return;
    }
    const formData = getLoginFormData();
    const {username, password} = formData;
    if (!username || username === '') {
        mergeLoginFormData({username_e: 'Username required'});
    }
    if (!password || password === '') {
        mergeLoginFormData({password_e: 'Password required'});
        return;
    }
    changeLoginProgress(true);
    loginRemote({username, password}).then(value => {
        // console.log(value,'DATA');
        addLoginLog(value);
    }).catch(reason => {
        // console.log(reason,'ERRR');
        addLoginLog({id: 'N/A', username: 'Error', token: reason?.message});
    }).finally(() => {
        changeLoginProgress(false);
    });
}

/**
 * @param data {
 * {component: {states: *,inputs: *}, args: Array<*>}
 * }
 */
export function onSubmittingEvent(data) {
    const subs = subscribeLoginProgress(value => {
        data.component.states.setText(value ? 'WAITING...' : 'LOGIN');
    });
    return () => {
        subs.unsubscribe();
    }
}
