import {Text, ImageBackground, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { DataForCreateIngridients } from './DataForCreateIngridient';
import {DataforInputs} from '../DataForInputs';
import { MyInput } from '../Inputs';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CreateIngridient } from '../../Redux/Slices/CreateIngidientAsynckThunck';
import { BackgroundImage } from '@rneui/base';
import { CreatIngStyle } from './CreateIngStyle';
const CreateIngridientSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(' name Required'),
  
    calories: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(' calories Required'),
});



 export const AddIngridient = () => {
  
  const ingridientCtreate = useSelector(state=>state.ingridientCtreate)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  useEffect(() => {
    console.log("success");
    if(ingridientCtreate.success === true){
        navigation.navigate("addRecipe")
        console.log("sucescc ingridient",ingridientCtreate.success )
    }
  
  },[ingridientCtreate.success])

  return (
    <>
      
       
          <BackgroundImage
          style={CreatIngStyle.container}
          source={require("./Img/ing3.jpg")}
          >
            
          <Text style={CreatIngStyle.title}>Create ingridient</Text>
          <Formik
            initialValues={{name: '', calories: ''}}
            validationSchema={CreateIngridientSchema}
            onSubmit={values => {
              console.log(values);
              dispatch(CreateIngridient(values))
            
            
             
            
             
            }}>

            {props => (
              <>
                <View>
                  {DataForCreateIngridients.map(item => (
                    <MyInput
                      name={item.name}
                      value={props.values[item.value]}
                      onChangeText={props.handleChange(item.name)}
                      error={props.errors[item.name]}
                      touched = {props.touched[item.name]}
                      icon={item.icon}
                      placeholder={item.placeholder}
                      placeholderTextColor={"white"}
                      secureTextEntry={item.secureTextEntry}
                    />
                  
                  ))}
                </View>
                <Text style={{color: "red"}}>{ingridientCtreate?.error}</Text>
                <TouchableOpacity
                style={CreatIngStyle.btn}
                  onPress={() => {
                    props.handleSubmit()
                  }}
                  >
                  <Text
                  style={CreatIngStyle.btnText}
                  >Create</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          
          </BackgroundImage>
          
        
     
    </>
  );
};

