import {
  FlatList,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowSvg from '../../assets/svg/ArrowSvg';
import SearchSvg from '../../assets/svg/SearchSvg';
import LeftSvg from '../../assets/svg/LeftSvg';
import FilterSvg from '../../assets/svg/FilterSvg';

const ProductScreen = ({route, navigation}: any) => {
  const {productArrival,productPopular} = route.params;

  const renderProducts = (data: any) => {
    return (
      <FlatList
        data={data}
        
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }: any) => (
          <TouchableOpacity
          onPress={()=>navigation.navigate("ProductDetail",{productId : item.id})}
          >
            <View>
                <View>
                  <Image
                    source={item.productImage}
                    style={{ width: 150, height: 150, borderRadius: 25, margin: 10 }}
                  />
                </View>
                <View>
                  <Text style={styles.prdName}>{item.productName}</Text>
                  <Text style={styles.prdDesc}>{item.description}</Text>
                  <Text style={styles.prdPrice}>${item.productPrice}</Text>
                </View>
              </View>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    );
  };

  return (
    <SafeAreaView style={{backgroundColor:"#fff",flex:1}}>
      <View style={{paddingLeft: 30, paddingEnd: 30}}>
        <View style={styles.header}>
          <View style={styles.navbar}>
          <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                <LeftSvg />
              </TouchableOpacity>
          </View>
          <View style={styles.imgBox}>
            <Image source={require('../../assets/images/user.png')} />
          </View>
        </View>
          <View style={styles.searchBar}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                backgroundColor: '#f3f4f5',
                padding: 20,
                borderRadius: 20,
                flex: 1,
              }}>
              <SearchSvg />
              <TextInput placeholder="Search..." />
            </View>
            <View
              style={{
                backgroundColor: '#000',
                padding: 20,
                borderRadius: 100,
              }}>
              <FilterSvg />
            </View>
          </View>
          <View>
          <View>
      {productArrival && (
        <View>
          {renderProducts(productArrival)}
        </View>
      )}

      {productPopular && (
        <View>
          {renderProducts(productPopular)}
        </View>
      )}
    </View>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  navbar: {
    backgroundColor: '#000',
    width: 40,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:100,
    paddingVertical:7,
    justifyContent:'center'
  },
  imgBox: {
    backgroundColor: '#dddddd',
    borderRadius: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#666666',
  },
  searchBar: {
    marginTop: 25,
    marginBottom:20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  productCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  prdName:{
    textAlign:'center',
    fontWeight:'bold',
    marginBottom:3
  },
  prdDesc:{
    textAlign:'center',
    marginBottom:3,
    fontWeight:'200'

  },
  prdPrice:{
    textAlign:'center',
    fontWeight:'bold'
  }
});
