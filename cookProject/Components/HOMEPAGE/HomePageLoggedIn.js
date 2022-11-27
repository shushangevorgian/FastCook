import { Text } from "react-native"
import HeaderPart from "./HeaderPart"
import SearchPart from "./SearchPart"
import ShowPicktures from "./ShowPicktures"
const LoggedInHomePage = () =>{
    return(
        <>
        <HeaderPart/>
        <Text>What do you whant to cook today?</Text>
        <SearchPart/>
        <ShowPicktures/>
        </>
    )
}



export default LoggedInHomePage