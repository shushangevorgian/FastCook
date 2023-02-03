import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {renderTrendListData} from './DataTrendList';
import {Colors} from '../Colors';
import {useNavigation} from '@react-navigation/native';

const Item = ({image, id, body, title}) => {
  const navigation = useNavigation();
  return (
    <>
    
    <View style={styles.item}>
      
      {/* <View style={{height: 200, width:270,}}><Image  source= {{uri: image}} style={{height: 200, width:270,}}/></View> */}
    
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() => {
            console.log(id);
            navigation.navigate('showEachPage', {
              id: id,
              image: image,
              body: body,
              title: title,
            });
          }}>
          <View style={styles.imageComponent}>
        <Text>{image}</Text>
      </View>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

const ShowPicktures = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} image={item.image} body={item.body} id={item.id} />
  );
  return (
    <>
    <Text>Categoris</Text>
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          
        <FlatList
          layout={'default'}
          data={renderTrendListData({height: 180, width: 200, borderRadius: 30})}
          horizontal={true}
          sliderWidth={300}
          itemWith={300}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 20,

    height: 270,
    width: 250,
    marginVertical: 15,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
  },
  imageComponent: {
    borderRadius: 30,
    margin: 1,
    height: 220,
    width: 250,
  },
  bodyText: {
    justifyContent: 'center',
    alignItem: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  // btnView: {
  //   alignSelf: 'center',
  //   alignContent: 'center',
  //   alignItem: 'center',
  //   backgroundColor: Colors.orange,
  //   padding: 20,
  //   paddingHorizontal: 80,
  //   borderRadius: 20,
  //   marginTop: 4,
  // },
  // btnText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
});

export default ShowPicktures;
