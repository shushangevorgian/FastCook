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
    <View style={styles.item}>
      <View style={styles.imageComponent}>
        <Text>{image}</Text>
      </View>
      {/* <View style={{height: 200, width:270,}}><Image  source= {{uri: image}} style={{height: 200, width:270,}}/></View> */}
      <Text style={styles.title}>{title}</Text>
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
          <Text style={styles.btnText}>Show More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ShowPicktures = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} image={item.image} body={item.body} id={item.id} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <FlatList
          layout={'default'}
          data={() => renderTrendListData()}
          horizontal={true}
          sliderWidth={300}
          itemWith={300}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 20,

    height: 500,
    width: 300,
    marginVertical: 15,
    marginHorizontal: 16,
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
  btnView: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItem: 'center',
    backgroundColor: Colors.orange,
    padding: 20,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginTop: 4,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ShowPicktures;
