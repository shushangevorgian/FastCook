//////UDER PLUS
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../Colors';

export const AddingRecipeLIst = () => {
  return (
    <View
      style={{
        margin: 5,
        flexDirection: 'row',

        backgroundColor: Colors.boxGrey,
        height: 170,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10,
      }}>
      <View
        style={{
          height: 170,
          width: 190,
        }}>
        <Image
          source={require('../HOMEPAGE/ImagesForTrendData/img7.jpg')}
          style={{height: 170, width: 190}}
        />
      </View>
      <View
        style={{
          height: 150,
          width: 480,
          margin: 2,
        }}>
        <Text style={{fontSize: 16}}>Recipe name</Text>

        <View style={{flexDirection: 'row', marginTop: 60}}>
          <TouchableOpacity
            style={{
              margin: 1,
              borderRadius: 5,
              backgroundColor: 'orange',
              alignItems: 'center',
              alignContent: 'center',
              height: 40,
              width: 75,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 15, color: 'white'}}>DELETE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              backgroundColor: 'orange',
              margin: 1,
              height: 40,
              width: 75,
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 15, color: 'white'}}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
