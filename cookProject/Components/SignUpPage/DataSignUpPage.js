import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons  from "react-native-vector-icons/AntDesign"
export const DataSignUpPage = [
    {
        id:1,
        name: "username",
        value: "username",
        type: "text",
        icon: <Icons name="user" size={30} color="gray"/>,
    },

    {
        id: 2,
        name: "password",
        value: "password",
        type: "password",
        icon: <Icons name="lock" size={30} color="gray"/>,

    },
    {
        id:3,
        name: "email",
        value: "email",
        icon: <Icon name="email-outline" size={30} color="gray"/>
    },
    {
        id: 4,
        name: "phonenumber",
        value: "phonenumber",
        icon: <Icons name="phone" size={30} color="gray" />
    },
    {
        id:5,
        name: "confirm password",
        value: "confirmpassword",
        icon: <Icons name="lock" size={30} color="gray"/>,
    }
]