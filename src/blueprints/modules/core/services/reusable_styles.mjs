export const profilePictureStyles = borderRadius => ({
    width: 100,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 'auto',
    marginBottom: 'auto',
    height: 100,
    borderRadius: borderRadius,
    backgroundColor: '#f5f5f5'
});

export const inputStyleBorderColor = '#0019FF';

export const inputStyle = (borderColor = inputStyleBorderColor) => {
    return {
        height: 48,
        paddingLeft: 8,
        paddingRight: 8,
        color: '#252525',
        fontSize: 16,
        border: `1px solid ${borderColor}`,
        borderRadius: 6,
        // background: '#D9D9D9'
    }
}


export const inputErrorStyle = () => {
    return {
        fontFamily: 'Inter',
        color: 'red',
        fontSize: 14,
        marginBottom: 10
    }
}