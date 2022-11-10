import AsyncStorage from '@react-native-async-storage/async-storage';
export const GetToken =  async () =>{
    //return AsyncStorage.getItem('access_token');
    try {
        const value = await AsyncStorage.getItem('access_token')
        if(value !== null) {
            return value
        }

    }
    catch(errr){
        console.log(err);
    }
}

export const SetToken = async (tokenData) =>{
    //return AsyncStorage.setItem('access_token', tokenData.access_token )
    try {
        const value = await AsyncStorage.setItem('access_token', tokenData.access_token )
        if(value !== null) {
            return value
        }

    }
    catch(err){
        console.log(err);
    }
}

export const SetData =  async (receivedObj) => {
    // return (
    //     AsyncStorage.setItem('admin_id', receivedObj.user.id),
    //     AsyncStorage.setItem('username', receivedObj.user.username)
    // )
    try {
        const value1 = await AsyncStorage.setItem('admin_id', receivedObj.user.id)
        const value2 = await AsyncStorage.setItem('username', receivedObj.user.username)
        if((value1  &&  value2) !== null) {
            return value1, value2
        }

    }
    catch(errr){
        console.log(err);
    }
}
