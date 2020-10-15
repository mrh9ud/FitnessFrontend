import * as SecureStore from 'expo-secure-store';

const isSecureStorageAvailable = () => SecureStore.isAvailableAsync()

const setCredentials = async (jwtToken) => {
    try {
        await SecureStore.setItemAsync('token', { jwtToken })
    } catch (e) {
        console.log(e)
    }
}

const getCredentials = async () => {
    try {
        const credentials = await SecureStore.getItemAsync('token')
        return credentials
    } catch(e) {
        console.log(e)
    }
}

export { setCredentials, getCredentials, isSecureStorageAvailable }