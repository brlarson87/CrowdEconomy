import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React, { memo } from 'react'
import Colors from '../constants/Colors'

const windowWidth = Dimensions.get('window').width;

const StoreCards = ({ 
    productTitle, 
    img, 
    prices }) => {
   
    let sizing = {
        fontSize: 12
    }

    if(productTitle.length >= 19) {
        sizing.fontSize = 11;
    }    
    return (
        <Pressable style={styles.shopCard}>
            <Image 
            style={styles.cardImage}
            source={{uri: img}}
            />
            <View style={styles.prices}>
                <View style={styles.priceBox}>
                    <Text style={[styles.priceBoxText, {color: '#000'}]}>{prices[0]}</Text>
                </View>
    
                <View style={[styles.priceBox, {backgroundColor: Colors.secondary}]}>
                    <Text 
                        style={styles.priceBoxText}>{prices[1]}</Text>
                </View>
    
                <View style={[styles.priceBox, {backgroundColor: Colors.primary}]}>
                    <Text style={[styles.priceBoxText, styles.textShadow]}>{prices[2]}</Text>
                </View>
    
                <View style={[styles.priceBox, {backgroundColor: Colors.tertiary}]}>
                    <Text style={[styles.priceBoxText, styles.textShadow]}>{prices[3]}</Text>
                </View>
            </View>
            <View style={styles.shopCardDescription}>
                <Text style={[styles.descriptionText, sizing]}>{productTitle}</Text>
            </View>
        </Pressable>  
      )
    }

export default memo(StoreCards)

const styles = StyleSheet.create({
    shopCard: {
        width: (windowWidth / 2) - 10,
        height: 240,
        borderWidth: .4,
        borderColor: 'rgba(0,0,0, .2)',
        marginVertical: 10,
        marginHorizontal: 5
    },
    cardImage: {
        width: (windowWidth / 2) - 12,
        height: 155
    },
    prices: {
        flexDirection: 'row',
        width: '100%',
        height: 25,
        justifyContent: 'space-between'
    },
    priceBox: {
        width: '24%',
        height: '100%',
        justifyContent: 'center',
        borderWidth: .4,
        borderColor: 'rgba(0,0,0, .2)'
    },
    priceBoxText: {
        textAlign: 'center',
        fontFamily: 'Lexend-Deca-semibold',
        color: '#fff'
    },
    shopCardDescription: {
        height: 50,
        marginTop: 12,
        paddingHorizontal: 2
    },
    descriptionText: {
        fontFamily: 'Lexend-Deca-Regular',
        textAlign: 'center',
        letterSpacing: 1.4
    }
})