import AsyncStorage from '@react-native-async-storage/async-storage';
export const GetToken =  async () =>{
    
    try {
        const value = await AsyncStorage.getItem('access_token')
        if(value !== null) {
            return value
        }

    }
    catch(error){
        console.log(error);
    }
}

export const SetToken = async (tokenData) =>{
    
    try {
        const value = await AsyncStorage.setItem('access_token', tokenData.access_token )
        if(value !== null) {
            return value
        }

    }
    catch(error){
        console.log(error);
    }
}

export const SetDataLogin =  async (receivedObj) => {
   
    try {
        const value1 = await AsyncStorage.setItem('user_id', receivedObj.user.id.toString())
        const value2 = await AsyncStorage.setItem('username', receivedObj.user.username)
        if((value1  &&  value2) !== null) {
            return value1, value2
        }

    }
    catch(error){
        console.log(error);
    }
}

export const SetDataSignUp =  async (receivedObj) => {
   
    try {
        const value1 = await AsyncStorage.setItem('name', receivedObj.user.name)
        const value2 = await AsyncStorage.setItem('username', receivedObj.user.username)
        if((value1  &&  value2) !== null) {
            return value1, value2
        }

    }
    catch(error){
        console.log(error);
    }
}

export const SetDataForgotPass =  async (receivedObj) => {
   
    try {
        const value = await AsyncStorage.setItem('email', receivedObj.user.email)
        if(value !== null) {
            return value
        }

    }
    catch(error){
        console.log(error);
    }
}
export const SetDataConfirmCode =  async (receivedObj) => {
   
    try {
        const value = await AsyncStorage.setItem('token', receivedObj.user.token)
        if(value !== null) {
            return value
        }

    }
    catch(error){
        console.log(error);
    }
}


