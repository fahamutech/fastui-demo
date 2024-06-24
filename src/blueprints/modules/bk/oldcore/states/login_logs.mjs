import {BehaviorSubject, debounceTime, distinctUntilChanged, throttle} from "rxjs";

const loginLogs = new BehaviorSubject([]);

export const addLoginLog = log => {
    const prev = loginLogs.getValue();
    const data = [log,...prev];
    // console.log(prev,'PREV DATA');
    // console.log(data,'NEW DATA');
    loginLogs.next(data);
}

export const getLoginLogs = loginLogs.getValue;

export const subscribeLoginLogs = (fn) => loginLogs.subscribe(fn);