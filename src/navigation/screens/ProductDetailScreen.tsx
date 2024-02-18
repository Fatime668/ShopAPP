import {
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  View,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Items} from '../../models/database/Database';
import LeftSvg from '../../assets/svg/LeftSvg';
import HeartSvg from '../../assets/svg/HeartSvg';
import ShopSvg from '../../assets/svg/ShopSvg';
import StarSvg from '../../assets/svg/StarSvg';
import Svg from '../../assets/svg/Svg';
import AddBasket from '../../assets/svg/AddBasket';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetailScreen = ({route, navigation}: any) => {
  const {productId} = route.params;

  const [poplar, setPopular] = useState<any>({});
  const [isFavorited, setIsFavorited] = useState(false);
  const [isInBasket, setIsInBasket] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    checkIfFavorited();
    checkIfInBasket();
  }, []);

  // Favori məhsulu async storage-də olduğunu yoxlamaq üçün funksiya
  const checkIfFavorited = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites !== null) {
        const parsedFavorites = JSON.parse(favorites);
        setIsFavorited(parsedFavorites.includes(productId));
      }
    } catch (error) {
      console.error('Error checking favorites:', error);
    }
  };

  // Səbətə məhsulu async storage-də yoxlamaq üçün funksiya
  const checkIfInBasket = async () => {
    try {
      const basketItems = await AsyncStorage.getItem('basket');
      if (basketItems !== null) {
        const parsedBasket = JSON.parse(basketItems);
        setIsInBasket(parsedBasket.includes(productId));
      }
    } catch (error) {
      console.error('Error checking basket:', error);
    }
  };

  // Favori məhsulu async storage-ə əlavə etmək üçün funksiya
  const toggleFavorite = async () => {
    try {
      let favorites: any = await AsyncStorage.getItem('favorites');
      if (favorites === null) {
        favorites = JSON.stringify([productId]);
      } else {
        favorites = JSON.parse(favorites);
        if (favorites.includes(productId)) {
          favorites = favorites.filter((id: any) => id !== productId);
        } else {
          favorites.push(productId);
        }
        favorites = JSON.stringify(favorites);
      }
      await AsyncStorage.setItem('favorites', favorites);
      setIsFavorited(!isFavorited);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  // Səbətə məhsulu async storage-ə əlavə etmək və ya çıxarmaq üçün funksiya
  const toggleBasket = async () => {
    try {
      let basketItems: any = await AsyncStorage.getItem('basket');
      if (basketItems === null) {
        basketItems = JSON.stringify([productId]);
      } else {
        basketItems = JSON.parse(basketItems);
        if (basketItems.includes(productId)) {
          basketItems = basketItems.filter((id: any) => id !== productId);
        } else {
          basketItems.push(productId);
        }
        basketItems = JSON.stringify(basketItems);
      }
      await AsyncStorage.setItem('basket', basketItems);
      setIsInBasket(!isInBasket);
    } catch (error) {
      console.error('Error toggling basket:', error);
    }
  };

  //get product data by productId
  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productId) {
        await setPopular(Items[index]);
        return;
      }
    }
  };
  console.log(poplar);

  //renderItems
  const renderItems = ({item, index}: any) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  const renderRating = (rating: any) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarSvg key={i} />);
    }
    return stars;
  };
  //plus
  const increaseQuantity = () => {
    if (quantity < poplar.count) {
      setQuantity(quantity + 1);
    }
  };
  //minus
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: '#fff',
      }}>
      <ScrollView>
        <View
          style={{
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: 'relative',

            backgroundColor: '#ccc',
            marginBottom: 4,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  backgroundColor: '#000',
                  borderRadius: 100,
                  marginTop: 60,
                  marginLeft: 40,
                  padding: 10,
                }}>
                <LeftSvg />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 40,
                marginTop: 60,
                gap: 10,
              }}>
              <TouchableOpacity
                onPress={toggleFavorite}
                style={{
                  backgroundColor: '#fff',
                  padding: 15,
                  borderRadius: 100,
                }}>
                <HeartSvg fill={isFavorited ? 'red' : '#fff'} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleBasket}
                style={{
                  backgroundColor: '#fff',
                  padding: 15,
                  borderRadius: 100,
                }}>
                <ShopSvg fill={isInBasket ? 'orange' : '#fff'} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FlatList
              data={poplar.productImageList ? poplar.productImageList : null}
              horizontal
              renderItem={renderItems}
              showsHorizontalScrollIndicator={false}
              decelerationRate={0.8}
              snapToInterval={width}
              bounces={false}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
            />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
                marginTop: 32,
              }}>
              {poplar.productImageList
                ? poplar.productImageList.map((data: any, index: any) => {
                    let opacity = position.interpolate({
                      inputRange: [index - 1, index, index + 1],
                      outputRange: [0.2, 1, 0.2],
                      extrapolate: 'clamp',
                    });
                    return (
                      <Animated.View
                        key={index}
                        style={{
                          width: '16%',
                          height: 2.4,
                          backgroundColor: '#000',
                          opacity,
                          marginHorizontal: 4,
                          borderRadius: 100,
                        }}></Animated.View>
                    );
                  })
                : null}
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 20,
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 20,
                    marginBottom: 10,
                  }}>
                  {poplar.productName}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    color: '#666666',
                  }}>
                  {poplar.productSubTitle}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 3,
                    marginTop: 10,
                  }}>
                  {renderRating(poplar.rating)}
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 12,
                      // marginTop:5
                    }}>
                    (320 Review)
                  </Text>
                </View>
              </View>
              <View
                style={{
                  gap: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 15,
                    backgroundColor: '#eeeeee',
                    paddingVertical: 10,
                    borderRadius: 25,
                  }}>
                  <TouchableOpacity onPress={decreaseQuantity}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>{quantity}</Text>
                  <TouchableOpacity onPress={increaseQuantity}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}>
                  Avaliable in stack
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 22,
                    marginBottom: 10,
                  }}>
                  Size
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    // width: 270,
                  }}>
                  <View style={styles.size}>
                    <Text style={styles.letter}>S</Text>
                  </View>
                  <View style={styles.size}>
                    <Text style={styles.letter}>M</Text>
                  </View>
                  <View style={styles.sizeSelect}>
                    <Text style={styles.letterSelect}>L</Text>
                  </View>
                  <View style={styles.size}>
                    <Text style={styles.letter}>XL</Text>
                  </View>
                  <View style={styles.size}>
                    <Text style={styles.letter}>XXL</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  gap: 5,
                  backgroundColor: '#fff',
                  paddingVertical: 10,
                  paddingHorizontal: 5,
                  borderRadius: 25,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <View
                  style={{
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    width: 23,
                    paddingVertical: 7,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Svg />
                </View>
                <View
                  style={{
                    borderRadius: 100,
                    backgroundColor:"#000",
                    width: 23,
                    paddingVertical: 11,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}></View>
                <View
                  style={{
                    borderRadius: 100,
                    backgroundColor:"#cadca6",
                    width: 23,
                    paddingVertical: 11,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}></View>
                <View
                  style={{
                    borderRadius: 100,
                    width: 23,
                    backgroundColor:"#f79f20",
                    paddingVertical: 11,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}></View>
              </View>
              
            </View>
            <View style={{
              marginTop:10,
              marginBottom:20
            }}>
                <Text style={{
                  fontWeight:'bold',
                  fontSize:22,
                  marginBottom:12
                }}>
                  Description
                </Text>
                <Text style={{
                  fontSize:13,
                  fontWeight:"400",
                  color:"#666"
                }}>{poplar.description}</Text>
              </View>
              <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
              }}>
                <View>
                  <Text style={{
                    fontWeight:'300',
                    color:"#666",
                    fontSize:10,
                    marginBottom:2
                  }}>Total Price</Text>
                  <Text style={{
                    fontWeight:'bold',
                    fontSize:22
                  }}>${poplar.productPrice}</Text>
                </View>
                <TouchableOpacity
                 onPress={toggleBasket}
                style={{
                  backgroundColor:"#000",
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'center',
                  padding:20,
                  width: 230,
                  borderRadius:30
                }}>
                <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                  <AddBasket fill={isInBasket ? 'orange' : 'black'} />
                  <Text style={{color:"#fff",fontWeight:'bold',fontSize:18}}>Add to cart</Text>
                </View>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  size: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingTop: 15,
    paddingBottom: 15,
    width: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  letter: {
    fontWeight: 'bold',
    color: '#666',
  },
  sizeSelect: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingTop: 15,
    paddingBottom: 15,
    width: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#000',
  },
  letterSelect: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
