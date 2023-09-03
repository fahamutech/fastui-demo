export const loginRemote = ({username, password}) => {
    return fetch('https://smartstock-faas.bfast.fahamutech.com/account/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(value => value.json());
}
