export const loginRemote = ({username, password}) => {
    return fetch('https://smartstock-faas.bfast.fahamutech.com/account/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(async value => {
        if (value.ok) {
            return await value.json();
        } else {
            throw await value.json();
        }
    });
}
