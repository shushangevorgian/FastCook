import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {ProfileStyles} from './ProfilePageStyle.js';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {AddingRecipeLIst} from './AddingRecipeLIst.js';
export const Body = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={ProfileStyles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan
        nunc ut imperdiet ultrices. Phasellus augue nisi sagittis eget dictum
        vehicula, pellentesque vitae sapien. Mauris lacinia ante id est rhoncus
        volutpat. Sed aliquet ex sapien, sed ornare est dictum a. Pellentesque
        at accumsan odio
      </Text>
      <View style={ProfileStyles.addRecipeView}>
        <Text style={ProfileStyles.addTitle}>My Recipe</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('addRecipe');
            console.log(' log out!');
          }}
          style={ProfileStyles.addIcon}>
          <Text>
            <Icon name="circle-with-plus" size={30} color="orange" />
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <AddingRecipeLIst />
      </ScrollView>
    </View>
  );
};
