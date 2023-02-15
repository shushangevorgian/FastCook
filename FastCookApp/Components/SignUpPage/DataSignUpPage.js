import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons  from "react-native-vector-icons/AntDesign"
export const DataSignUpPage = [
    {
        id:1,
        name: "username",
        value: "username",
        type: "text",
        icon: <Icons name="user" size={30} color="gray"/>,
        placeholder: "Username"
    },

    {
        id: 2,
        name: "name",
        value: "name",
        type: "name",
        placeholder: "name",
        icon: <Icons name="user" size={30} color="gray"/>,
      
        

    },
  
    {
        id:3,
        name: "email",
        value: "email",
        icon: <Icon name="email-outline" size={30} color="gray"/>,
        placeholder: "Email"
    },
     {
        id: 4,
        name: "phone",
        value: "phone",
        icon: <Icons name="phone" size={30} color="gray" />,
        placeholder: "Phone Number"
    },
    {
        id: 5,
        name: "password",
        value: "password",
        type: "password",
        placeholder: "Password",
        icon: <Icons name="lock" size={30} color="gray"/>,
        secureTextEntry: true,
        

    },
   
    // {
    //     id:5,
    //     name: "confirmpassword",
    //     value: "confirmpassword",
    //     placeholder: "Confirm Password",
    //     icon: <Icons name="lock" size={30} color="gray"/>,
    //     secureTextEntry: true,
        
    // }
]