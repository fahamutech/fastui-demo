
/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function profileImageLoaded(data) {
    // console.log('Profile picture component started')
}
/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function updateRadius(data) {
    data.component.states.setBorderRadius(Math.random()*50);
}
