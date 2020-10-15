import * as SecureStore from 'expo-secure-store';

const isSecureStorageAvailable = () => SecureStore.isAvailableAsync()

const setCredentials = async (data) => {
    try {
        await SecureStore.setItemAsync('token', data)
    } catch (e) {
        console.log(e)
    }
}

const getCredentials = async () => {
    try {
        const credentials = await SecureStore.getItemAsync('token')
        console.log('received credentials: ', credentials)
    } catch(e) {
        console.log(e)
    }
}

export { setCredentials, getCredentials, isSecureStorageAvailable }