import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React, { memo } from 'react'
import Animated from 'react-native-reanimated';

import ProgressBar from './ProgressBar';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Colors from '../constants/Colors';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const MainShoeCard = ({
    shoeTitle, 
    shoeImageUrl, 
    widthPercentage, 
    enteredTickets, 
    prizeTotal,
    poolType,
    navigation,
    id
}) => {

 
 
  let hMargin = 20;

    let sizing = {
        fontSize: 15
      }
    
    let rare = false;

    if(shoeTitle.length > 25) {
    sizing.fontSize = 12;
    }
    if(poolType === 'Rare') {
    rare = true;
    }


  return (
    <View style={{ height: windowHeight, width: windowWidth, justifyContent: 'center'}}> 
    <Animated.View style={[styles.card, {marginHorizontal: hMargin}]}>
    <Pressable style={{ flex: 1 }} onPress={() => navigation.navigate('Prize Details', { itemId: id, shoeTitle })}>
        <View style={styles.titleContainer}>
        <Text style={[styles.title, sizing ]}>{shoeTitle}</Text>
        </View>
        <View style={styles.imageContainer}>
          {rare && <View style={styles.rarePrint}>
            <View style={[styles.rareText, {transform: [{ translateX: -17}]}]}><Text style={{color: '#fff', textTransform: 'uppercase'}}>rare</Text></View>
            <MaterialCommunityIcons name="octagram" size={75} color={Colors.tertiary}/>
          </View>}
          <Image 
            style={styles.cardThumbnail}
            source={{uri: shoeImageUrl}}
          />
        </View>
        <View style={styles.infoContainer}>

          <ProgressBar 
           widthPercentage={widthPercentage} 
           enteredTickets={enteredTickets}
           prizeTotal={prizeTotal}
          />
        </View>      
    </Pressable>
    </Animated.View>
    </View>
  )
}

export default memo(MainShoeCard);

const styles = StyleSheet.create({
    card: {
        width: windowWidth >= 400 ? 360 : 320,
        height: windowHeight >= 650 ? 455 : 400,
        alignSelf: "center",
        borderColor: "#fff",
        borderWidth: 2,
        backgroundColor: '#000',
        borderRadius: 8,
      },
      titleContainer: {
        height: 70,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        padding: 15
      },
      title: {
        color: '#fff',
        textAlign: "center",
        textTransform: 'uppercase',
        letterSpacing: 2,
        lineHeight: 20
      },
      imageContainer: {
        height: windowHeight >= 650 ? 250 : 175
      },
      cardThumbnail: {
        flex: 1,
        width: '100%'
    
      },
      infoContainer: {
        marginTop: windowHeight >= 650 ? 30 : 20
      },
      flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%'
      },
      progressBar: {
        width: 175,
        height: 8,
        backgroundColor: '#fff',
        borderRadius: 20,
        //marginHorizontal: '5%',
        justifyContent: 'center'
      },
      filler: {
        backgroundColor: '#280F98',
        height: 6,
        borderRadius: 10,
        marginLeft: 1,
        flexDirection: 'row'
      },
      absoluteTracker: {
        position: 'absolute',
        top: 20,
        right: 0,
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
      },
      marker: {
        height: 10,
        width: 10,
        marginBottom: 1
      },
      tracker: {
        width: 45,
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
      },
      blur: {
        height: 100,
        width: 100,
        position: 'absolute',
        top: -48,
        right: -48
      },
      progressText: {
        color: '#fff',
        letterSpacing: 1.5,
        fontSize: 15,
        marginHorizontal: 2
      },
      rarePrint: {
        position: "absolute",
        top: -40,
        right: 20,
        zIndex: 10
      },
      bgImage: {
        flex: 1
      },
      rareText: {
        postion: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 2
      }
})