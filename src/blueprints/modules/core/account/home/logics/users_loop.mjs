/**
 * @param data {
 * {component: {states: *,inputs: *}, args: Array<*>}
 * }
 */
export function onStart(data) {
    // TODO: Implement the logic
    // throw new Error('Method onStart not implemented');
    data.component.states.setData([
        {
            _key: 'ul1',
            person_name: 'Joshua Mshana',
            person: 'https://picsum.photos/800/500',
            person_number: '0764943055',
        },
        // {_key: 'ul2', person: 'https://picsum.photos/800/680'},
        // {_key: 'ul3'},
        {_key: 'ul4', person: 'https://picsum.photos/800/600'},
    ])
}