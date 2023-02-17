import {Text, View, TouchableOpacity} from 'react-native';
import {MyInput} from '../Inputs';
import {ConfirmStyles} from './ConfirmPasswordStyles';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {DataNewPass} from './DataCreateNewPass';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {CreateNewPassLogin} from '../../Redux/Slices/UserAstyncThunks';
const CreateNewPassSchema = Yup.object().shape({
  password: Yup.string().required('Required valid email'),
  // confirmPassword: Yup.string()
  // .required("this field is required")
});
const CreateNewPass = () => {
  const route = useRoute();
  const {token} = route.params;

  console.log(token, 'tokeeen');
  const CreateNewPassError = useSelector(state => state.createPass);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('success');
    if (CreateNewPassError.success === true) {
      navigation.navigate('Login');
    }
  }, [CreateNewPassError.success]);
  return (
    <View style={ConfirmStyles.createContainer}>
      <Formik
        initialValues={{password: ''}}
        validationSchema={CreateNewPassSchema}
        onSubmit={values => {
          console.log('tokVals', values);
          dispatch(CreateNewPassLogin({
            ...values,
            token: token
            }));
        }}>
        {props => (
          <>
            <View>
              {DataNewPass.map(item => (
                <MyInput
                  style={ConfirmStyles.textInput}
                  name={item.name}
                  value={props.values[item.value]}
                  onChangeText={props.handleChange(item.name)}
                  error={props.errors[item.name]}
                  touched={props.touched[item.name]}
                  icon={item.icon}
                  placeholder={item.placeholder}
                  placeholderTextColor={'white'}
                  secureTextEntry={item.secureTextEntry}
                />
              ))}
            </View>
            <TouchableOpacity
              onPress={() => {
                props.handleSubmit();
                //navigation.navigate('Login');
              }}
              style={ConfirmStyles.btnView}>
              <Text style={ConfirmStyles.btnText}>Confirm</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <Text>{CreateNewPassError?.error}</Text>
    </View>
  );
};

export default CreateNewPass;
