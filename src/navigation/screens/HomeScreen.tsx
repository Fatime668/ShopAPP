import {
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowSvg from '../../assets/svg/ArrowSvg';
import SearchSvg from '../../assets/svg/SearchSvg';
import FilterSvg from '../../assets/svg/FilterSvg';
import LoveSvg from '../../assets/svg/LoveSvg';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux';
import {getAllProducts} from '../../redux/slices/ProductSlice';
import {Items, advertising} from '../../models/database/Database';

const HomeScreen = ({navigation}: any) => {
  // const dispatch = useDispatch<AppDispatch>()
  // const getProduct = () => {
  //   dispatch(getAllProducts());
  // };
  // useEffect(() => {
  //   getProduct();
  // },[]);
  // const productData = useSelector((state: RootState) => state.product.datas);
  const [popular, setPopular] = useState<any>([]);
  const [arrival, setArrival] = useState<any>([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });
    return unsubscribe;
  }, [navigation]);

  //get data from db
  const getDataFromDB = () => {
    let popularList = [];
    let arrivalList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'popular') {
        popularList.push(Items[index]);
      } else if (Items[index].category == 'new') {
        arrivalList.push(Items[index]);
      }
    }
    setPopular(popularList);
    setArrival(arrivalList);
  };

  //product reusable card
  const ProductCard = ({ data }: any) => {
    return (
      <TouchableOpacity
      onPress={()=>navigation.navigate("ProductDetail",{productId : data.id})}
      >
        {data.category === 'new' ? (
          <View>
            <View>
              <Image
                source={data.productImage}
                style={{ width: 150, height: 150, borderRadius: 25, margin: 10 }}
              />
              <TouchableOpacity style={styles.favorite}>
                <LoveSvg stroke={"#fff"}/>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.prdName}>{data.productName}</Text>
              <Text style={styles.prdDesc}>{data.description}</Text>
              <Text style={styles.prdPrice}>${data.productPrice}</Text>
            </View>
          </View>
        ) : data.category === 'popular' ? ( 
          <View>
            <View>
              <Image
                source={data.productImage}
                style={{ width: 150, height: 150, borderRadius: 25, margin: 10 }}
              />
              <TouchableOpacity style={styles.favorite}>
                <LoveSvg/>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.prdName}>{data.productName}</Text>
              <Text style={styles.prdDesc}>{data.description}</Text>
              <Text style={styles.prdPrice}>${data.productPrice}</Text>
            </View>
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };
  

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{paddingLeft: 30, paddingEnd: 30}}>
        <View style={styles.header}>
          <View style={styles.navbar}>
            <ArrowSvg />
          </View>
          <View style={styles.imgBox}>
            <Image source={require('../../assets/images/user.png')} />
          </View>
        </View>

        <View>
          <ScrollView
            style={{height: 800}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={{marginTop: 20, gap: 5}}>
              <Text style={styles.title}>Welcome,</Text>
              <Text style={styles.subTitle}>Our Fashion App</Text>
            </View>
            <View style={styles.searchBar}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  backgroundColor: '#f3f4f5',
                  padding: 15,
                  borderRadius: 20,
                  flex: 1,
                }}>
                <SearchSvg />
                <TextInput placeholder="Search..." />
              </View>
              <View
                style={{
                  backgroundColor: '#000',
                  padding: 15,
                  borderRadius: 100,
                }}>
                <FilterSvg />
              </View>
            </View>
            <View>
              <FlatList
                data={advertising}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View style={{marginTop: 20}}>
                    <View style={styles.advertisingBox}>
                      <Image
                        style={styles.advertisingImg}
                        source={require('../../models/database/images/products/advertising.png')}
                      />
                      <View style={styles.advertisingTxt}>
                        <Text style={styles.adTitle}>{item.title}</Text>
                        <Text style={styles.adSubTitle}>{item.subtitle}</Text>
                        <Text style={styles.code}>With code: {item.code}</Text>
                        <TouchableOpacity style={styles.btn}>
                          <Text
                            style={{
                              color: '#fff',
                              fontWeight: 'bold',
                              fontSize: 13,
                            }}>
                            Get Now
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
           <View style={{paddingBottom:150}}>
           <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                  New Arrivals
                </Text>
                <TouchableOpacity
               onPress={()=>navigation.navigate("ProductScreen",{productArrival : arrival})}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  {arrival.map((data: any) => {
                    return <ProductCard data={data} key={data.id} />;
                  })}
                </View>
              </ScrollView>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                  Most Populars
                </Text>
                <TouchableOpacity
                  onPress={()=>navigation.navigate("ProductScreen",{productPopular : popular})}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  {popular.map((data: any) => {
                    return <ProductCard data={data} key={data.id} />;
                  })}
                </View>
              </ScrollView>
            </View>
           </View>
           
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  navbar: {
    backgroundColor: '#000',
    paddingTop: 15,
    paddingBottom: 15,
    paddingEnd: 12,
    paddingLeft: 12,
    borderRadius: 100,
  },
  imgBox: {
    backgroundColor: '#dddddd',
    borderRadius: 100,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#666666',
  },
  searchBar: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  advertisingImg: {
    borderRadius: 20,
    height: 180,
    width: 280,
  },
  advertisingBox: {
    margin: 10,
    position: 'relative',
  },
  advertisingTxt: {
    position: 'absolute',
    paddingTop: 20,
    paddingLeft: 15,
  },
  adTitle: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  adSubTitle: {
    fontSize: 23,
    marginBottom: 10,
  },
  code: {
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#636668',
  },
  btn: {
    backgroundColor: '#000',
    width: 100,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 25,
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
  },
  favorite:{
    position:'absolute',
    right:20,
    top:20,
    padding:7,
    borderRadius:100,
    backgroundColor:"#000"
  },
 
});
