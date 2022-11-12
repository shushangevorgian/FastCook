import { Text } from "react-native"
import HeaderPart from "./HeaderPart"
import SearchPart from "./SearchPart"
const LoggedInHomePage = () =>{
    return(
        <>
        <HeaderPart/>
        <Text>What do you whant to cook today?</Text>
        <SearchPart/>
        </>
    )
}



export default LoggedInHomePage