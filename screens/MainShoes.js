import { StyleSheet, 
         FlatList, 
         SafeAreaView, 
         ImageBackground } from 'react-native'
import React from 'react'
import Animated, { useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated'

import { useSelector } from 'react-redux'

import MainShoeCard from '../components/MainShoeCard'


import MeshGradient from '../assets/img/bg-mesh.png'
import MainHeader from '../components/MainHeader'

const MainShoes = ({ navigation }) => {

  const prizes = useSelector(state => state.prizes.prizes)

  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    }
  });

  return (
    <ImageBackground
      source={MeshGradient}
      resizeMode="cover"
      style={styles.bgImage}
    >
    
      <MainHeader />
      <Animated.FlatList
            horizontal
            data={prizes}
            onScroll={scrollHandler}
            pagingEnabled
            renderItem={( {item, index} ) => (
            <MainShoeCard 
               shoeTitle={item.shoeTitle} 
               shoeImageUrl={item.shoePrizeImages[0]} 
               widthPercentage={Math.round(item.enteredTickets / item.prizeTotal * 100)}
               enteredTickets={item.enteredTickets}
               prizeTotal={item.prizeTotal}
               poolType={item.poolType}
               index={index}
               navigation={navigation}
               id={item.id}
               item={item}
               scrollX={scrollX}
            />)}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.shoeList}
        />
    </ImageBackground>
  )
}

export default MainShoes

const styles = StyleSheet.create({
  bgImage: {
    flex: 1
  },
  safeView: {
    flex: 1,
    //backgroundColor: '#010101',
    justifyContent: 'center',
    alignContent: 'center',
    // borderColor: 'white',
    // borderWidth: 3
  },
  shoeList: {
    height: '100%',
    alignItems: 'center'
  }
})