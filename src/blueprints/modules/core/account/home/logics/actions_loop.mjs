
/**
* @param data {
* {component: {states: *,inputs: *}, args: Array<*>}
* }
*/
export function onStart(data) {
    // TODO: Implement the logic
    // throw new Error('Method onStart not implemented');
    data.component.states.setData([
        {_key: 'al1', actionElement: `https://picsum.photos/800/300`,},
        {_key: 'al2', actionElement: `https://picsum.photos/800/200`,},
        {_key: 'al3', actionElement: `https://picsum.photos/800/700`,},
        {_key: 'al4', actionElement: `https://picsum.photos/800/900`,},
        {_key: 'al5', actionElement: `https://picsum.photos/800/350`,},
    ])
}