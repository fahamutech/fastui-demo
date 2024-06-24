
/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function onStart(data) {
    // TODO: Implement the logic
    // throw new Error('Method onStart not implemented');
    data.component.states.setData([
        {_key: '001', waist_index: '001', waist_name: 'Lee Style'},
        {_key: '002', waist_index: '002', waist_name: 'Usiku Kuchele'},
        {_key: '003', waist_index: '003', waist: 'https://picsum.photos/800/600'},
        {_key: '004', waist_index: '004', waist: 'https://picsum.photos/800/230'},
    ])
}