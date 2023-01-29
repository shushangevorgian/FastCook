import {Text} from "react-native"
import { ForgotPassStyles } from "./ForgotPassStyles"
const Texts = () =>{
    return(
        <>
        <Text
            style={ForgotPassStyles.title}
            >Forgot Password?
            </Text>

            <Text
            style={ForgotPassStyles.infoText}
            >
             Do not worry. We will send account details to your email.                   
            </Text>

            </>
    )
}

export default Texts