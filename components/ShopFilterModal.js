import { StyleSheet, Text, View, Pressable, TextInput, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import Colors from '../constants/Colors'

import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const windowHeight = Dimensions.get('window').height;

const ShopFilterModal = () => {

    const TopModalLocation = useSharedValue(windowHeight - 30);

    const exitModal = () => {
        TopModalLocation.value = withTiming(windowHeight, { duration: 500})
    }
  return (
    <View>
        <Animated.View style={[styles.shopModalContainer, { top: TopModalLocation }]} >
            <Pressable style={styles.closeModalIcon} onPress={exitModal}>
                <MaterialIcons name="clear" size={22} color="black" />
            </Pressable>
            <View style={{ alignItems: 'center'}}>
            <Text style={styles.mainText}>Filter</Text>
            <Text style={styles.subText}>(Shoes)</Text>
            </View>
            <View style={styles.labelBlock}>
            <Text style={styles.label}>Price:</Text>


            <View style={{ flexDirection: 'row', marginLeft: 30}}>
                <View style={{ width: 60, marginRight: 5, alignItems: 'center'}}>
                    <View>
                        <Text style={{textAlign: 'center'}}>min</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name="dollar-sign" size={12} color="gray" style={styles.dollarIcon}/>
                        <TextInput 
                            style={styles.inputPrice}
                            maxLength={4}
                            keyboardType='numeric'
                            clearTextOnFocus
                            cursorColor={Colors.primary}
                        />
                    </View>
                </View>
                <View style={{ width: 60, alignItems: 'center'}}>
                    <View>
                        <Text style={{textAlign: 'center'}}>max</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name="dollar-sign" size={12} color="gray" style={styles.dollarIcon}/>
                        <TextInput 
                            style={styles.inputPrice}
                            maxLength={4}
                            keyboardType='numeric'
                            clearTextOnFocus
                            cursorColor={Colors.primary}
                        />
                    </View>
                </View>
            </View>
            
            </View>
            <View style={styles.labelBlock}>
            <Text style={styles.label}>Sort By:</Text>

            <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 10}}>
                
                    
                    <Pressable style={[styles.modalButton, styles.sortButton, { marginRight: 5, backgroundColor: "#f9f9f9"}]}>
                        <Text style={[styles.defaultUppercaseButtonText, styles.sortedButtonText, {textTransform: 'none'}]}>Highest to lowest</Text>
                    </Pressable>

                
                
                    
                    <Pressable style={[styles.modalButton, styles.sortButton, { backgroundColor: "#f9f9f9" }]}>
                        <Text style={[styles.defaultUppercaseButtonText, styles.sortedButtonText, {textTransform: 'none'}]}>Lowest to highest</Text>
                    </Pressable>
                
            </View>


            </View>
            <View style={styles.labelBlock}>
            <Text style={styles.label}>Brands</Text>
            <ScrollView contentContainerStyle={styles.brandsContainer}>

                <Pressable style={[styles.modalButton, styles.brandButton, {backgroundColor: "#f9f9f9"}]}>
                    <Text style={[styles.defaultUppercaseButtonText, styles.sortedButtonText, styles.brandButton]}>Nike</Text>
                </Pressable>

                <Pressable style={[styles.modalButton, styles.brandButton, {backgroundColor: "#f9f9f9"}]}>
                    <Text style={[styles.defaultUppercaseButtonText, styles.sortedButtonText, styles.brandButton]}>Jordan</Text>
                </Pressable>

                <Pressable style={[styles.modalButton, styles.brandButton, {backgroundColor: "#f9f9f9"}]}>
                    <Text style={[styles.defaultUppercaseButtonText, styles.sortedButtonText, styles.brandButton]}>Adidas</Text>
                </Pressable>

                <Pressable style={[styles.modalButton, styles.brandButton, {backgroundColor: "#f9f9f9"}]}>
                    <Text style={[styles.defaultUppercaseButtonText, styles.sortedButtonText, styles.brandButton]}>Puma</Text>
                </Pressable>

                <Pressable style={[styles.modalButton, styles.brandButton, {backgroundColor: "#f9f9f9"}]}>
                    <Text style={[styles.defaultUppercaseButtonText, styles.sortedButtonText, styles.brandButton]}>New Balance</Text>
                </Pressable>

                <Pressable style={[styles.modalButton, styles.brandButton, {backgroundColor: "#f9f9f9"}]}>
                    <Text style={[styles.defaultUppercaseButtonText, styles.sortedButtonText, styles.brandButton]}>Puma</Text>
                </Pressable>

                <Pressable style={[styles.modalButton, styles.brandButton, {backgroundColor: "#f9f9f9"}]}>
                    <Text style={[styles.defaultUppercaseButtonText, styles.sortedButtonText, styles.brandButton]}>New Balance</Text>
                </Pressable>

            </ScrollView>
            </View>


            <View style={styles.buttonBlock}>
            <Pressable style={[styles.modalButton, styles.confirmationButtons, { backgroundColor: '#f9f9f9'}]}><Text style={styles.defaultUppercaseButtonText}>Clear</Text></Pressable>
            <Pressable style={[styles.modalButton, styles.confirmationButtons, {backgroundColor: Colors.primary}]}><Text style={[styles.defaultUppercaseButtonText, {color: '#fff'}]}>Apply</Text></Pressable>
            </View>
        </Animated.View>
        </View> 

  )
}

export default ShopFilterModal

const styles = StyleSheet.create({
    shopModalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5f5',
        position: 'absolute',
        padding: 30,
        //top: windowHeight,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 10,
        shadowColor: '#000',
        zIndex: 10
    },
    closeModalIcon: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    mainText: {
        fontSize: 18,
        textDecorationLine: 'underline',
        fontFamily: 'Lexend-Deca-semibold'
    },
    subText: {
        fontSize: 14
    },
    labelBlock: {
        paddingVertical: 8
    },
    label: {
        fontSize: 15,
        textDecorationLine: 'underline',
        fontFamily: 'Lexend-Deca-Regular'
    },
    buttonBlock: {
        width: 165,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        marginTop: 20
    },
    inputPrice: {
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 5,
        width: 55,
        textAlign: 'center',
        flex: 1,
        color: 'gray',
        fontWeight: '600',
        height: 24,
        width: 55
    },
    sortButton: {

    },
    sortedButtonText: {
        fontSize: 11
    },
    modalButton: {
        borderRadius: 5,
        padding: 5,
        elevation: 3
    },
    confirmationButtons: {
        width: 80
    }, 
    defaultUppercaseButtonText: {
        fontFamily: 'Lexend-Deca-Regular', 
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    dollarIcon: {
        position: 'absolute'
    },
    brandsContainer: {
        height: 105,
        marginLeft: 30,
        marginTop: 5,
        width: 240,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 4
    },
    brandButton: {
        width: 110,
        marginVertical: 4,
        padding: 0,
        marginHorizontal: 3
    }
})