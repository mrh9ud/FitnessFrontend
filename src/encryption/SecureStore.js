import * as SecureStore from 'expo-secure-store';

const isSecureStorageAvailable = () => SecureStore.isAvailableAsync()

const setCredentials = async (jwtToken) => {
    try {
        await SecureStore.setItemAsync('token', jwtToken)
    } catch (error) {
        console.log(error)
    }
}

const getCredentials = async key => {
    try {
        const credentials = await SecureStore.getItemAsync(key)
        return credentials
    } catch(error) {
        console.log(error)
    }
}

const deleteCredentials = async () => {
    try {
        await SecureStore.deleteItemAsync('token')
    } catch(error) {
        console.log(error)
    }
}
export { setCredentials, getCredentials, isSecureStorageAvailable, deleteCredentials }