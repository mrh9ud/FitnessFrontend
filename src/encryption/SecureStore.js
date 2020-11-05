import * as SecureStore from 'expo-secure-store';

const isSecureStorageAvailable = () => SecureStore.isAvailableAsync()

const setCredentials = async (jwtToken) => {
    try {
        await SecureStore.setItemAsync('token', jwtToken)
    } catch (error) {
        alert(error)
    }
}

const getCredentials = async key => {
    try {
        const credentials = await SecureStore.getItemAsync(key)
        return credentials
    } catch(error) {
        alert(error)
    }
}

const deleteCredentials = async () => {
    try {
        await SecureStore.deleteItemAsync('token')
    } catch(error) {
        alert(error)
    }
}
export { setCredentials, getCredentials, isSecureStorageAvailable, deleteCredentials }