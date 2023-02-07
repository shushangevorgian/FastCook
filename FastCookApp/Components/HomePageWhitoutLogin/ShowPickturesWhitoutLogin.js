import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import { renderTrendListData, renderTrendListData2 } from '../HOMEPAGE/DataTrendList';
import {Colors} from '../Colors';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native';

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

const ShowPickturesWhitoutLogin = () => {
  const width = Dimensions.get('window').width;
  const renderItem = ({item}) => (
    <Item title={item.title} image={item.image} body={item.body} id={item.id} style={{marginHorizontal: 1}}/>
    
    );
  return (
   
  
    <ScrollView 
    style={{backgroundColor: Colors.boxGrey}}
    >
         <Text style={{fontSize: 25, alignSelf: "baseline" }}>Categories</Text>
          <Carousel
          
          style={{ height:200, shadowColor: Colors.orange, shadowOpacity:0, shadowOffset:20}}
          loop
          width={width*0.89} 
          height={width/2}
          autoPlay={true}
          autoPlayReverse={true}
           data={renderTrendListData2({height:190 , width: 300, borderRadius: 30, marginHorizontal: 1})}
           
           mode= "parallax"
            parallaxScrollingScale={0.9}
            parallaxScrollingOffset = {60}
            scrollAnimationDuration={800}
           onSnapToItem={(index) => console.log('current index:', index)}
           renderItem={renderItem}
          
          />
          {/* <View style={{shadowColor: "grey", borderBottomColor:Colors.boxGrey, borderTopWidth: 0.5}}></View> */}
          <Text style={{fontSize: 25,}}>Trend</Text>
          <Carousel
          
          style={{ height:500}}
          loop
          width={width*0.89} 
          height={width}
          autoPlay={true}
           data={renderTrendListData({height:190 , width: 300, borderRadius: 30, marginHorizontal: 1})}
           
           mode= "parallax"
            parallaxScrollingScale={0.9}
            parallaxScrollingOffset = {60}
            scrollAnimationDuration={1000}
           onSnapToItem={(index) => console.log('current index:', index)}
           renderItem={renderItem}
          
          />
          </ScrollView>
       
      


      
   

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  item: {
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 20,

    height: 150,
    width:300 ,
    //marginVertical: 5,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
  },
  imageComponent: {
    borderRadius: 30,
    //margin: 1,
    // height: 220,
    // width: 250,
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

export default ShowPickturesWhitoutLogin;
