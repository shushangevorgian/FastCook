import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
//import Carousel from 'react-native-snap-carousel';
const Data = [
    {
        id: 1,
        title: "firstPickture"
    },
    {
        id: 2,
        title: "SecondPickture"
    },
    {
        id: 3,
        title: "ThirdPickture"
    }
]


const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const ShowPicktures = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    return(
        <SafeAreaView style={styles.container}>
            <View
            style={{
                flex:1, flexDirection: "row", justifyContent: "center"
            }}
            >
              {/* <Carousel 
              layout={"default"}
              data={Data}
              //horizontal= {true}
              sliderWidth={300}
              itemWith={300}
              renderItem={renderItem}
              
              /> */}
        <FlatList
      
        layout={"default"}
        data={Data}
        horizontal= {true}
        sliderWidth={300}
        itemWith={300}
        renderItem={renderItem}
        
        
        />
        </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    item: {
      height: 300,
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });


export default ShowPicktures