import {BehaviorSubject, distinctUntilChanged, Subscription} from "rxjs";

const formData = new BehaviorSubject({
    username: '',
    password: '',
    username_e: '',
    password_e: ''
});
const loginProgress = new BehaviorSubject(false);

export const changeLoginProgress = flag => loginProgress.next(!!flag);

/**
 *
 * @param fn{(value: *)=>void}
 * @return {Subscription}
 */
export const subscribeLoginProgress = (fn) => loginProgress.pipe(distinctUntilChanged()).subscribe(fn);

export const getLoginProgressValue = ()=> loginProgress.getValue();

/**
 *
 * @param data {{[p:string]:any}}
 */
export const mergeLoginFormData = data => {
    formData.next({
        ...formData.getValue(),
        ...data
    });
}

export const getLoginFormData = () => formData.getValue();

/**
 *
 * @param fn{(value: *)=>void}
 * @return {Subscription}
 */
export const subscribeLoginFormData = (fn) => formData.pipe(distinctUntilChanged()).subscribe(fn);

