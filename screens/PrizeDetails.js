import { StyleSheet, Text, View, Dimensions, FlatList, Image, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux';
import React from 'react'
import ProgressBar from '../components/ProgressBar';

import Gradient2 from '../assets/img/gradient-2.png';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ImageHelper = ({imgUrl}) => {

  return (
    <View style={{ width: windowWidth, paddingHorizontal: 4, backgroundColor: '#f9f9f9'}}>
      <Image source={{ uri: imgUrl}} style={{ width: '100%', height: windowHeight / 2.5}} resizeMode='cover'/>
    </View>
  )
}

const PrizeDetails = ({ navigation, route }) => {
    const itemId = route.params.itemId;
    const prize = useSelector(state => 
                state.prizes.prizes.find(p => p.id === itemId));
    const { shoeTitle, enteredTickets, prizeTotal } = prize;    
    
  return (
    <ImageBackground
        source={Gradient2}
        resizeMode="cover"
        style={styles.bgImage}
      >
    <View>
      <FlatList
        contentContainerStyle={styles.listStyle} 
        data={prize.shoePrizeImages}
        keyExtractor={(item, index) => 'key'+index}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ImageHelper imgUrl={item} />}
      />
    </View>
    <View style={{ paddingHorizontal: 28, marginTop: 12}}>
      <Text style={[styles.shoeTitleStyle, {fontSize: shoeTitle.length > 30 ? 16 : 18}]}>{shoeTitle}</Text>
    </View>
    <View style={styles.progressBg}>
      <ProgressBar 
        widthPercentage={Math.round(enteredTickets / prizeTotal * 100)} 
        enteredTickets={enteredTickets}
        prizeTotal={prizeTotal}
      />
    </View>
    
    </ImageBackground>
  )
}

export default PrizeDetails

const styles = StyleSheet.create({
  bgImage: {
    height: '100%'
  },
  listStyle: {
    backgroundColor: '#fff'
  },
  shoeTitleStyle: {
    color: '#fff',
    fontFamily: 'Lexend-Deca-Regular',
    textAlign: 'center',
  },
  progressBg: {
    backgroundColor: '#000',
    width: '80%',
    alignItems: 'center',
    borderRadius: 6,
    height: 75,
    marginTop: 10,
    alignSelf: 'center',
    borderColor: '#fff',
    borderWidth: 1
  }
})