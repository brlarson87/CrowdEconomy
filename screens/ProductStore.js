import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView, Pressable, Dimensions, TextInput} from 'react-native'
import React, { useState } from 'react'
import Animated, { Easing, useSharedValue, withSpring, withTiming,  } from 'react-native-reanimated';
import { useSelector } from 'react-redux'
import Colors from '../constants/Colors'
import StoreCards from '../components/StoreCards'
import MainHeader from '../components/MainHeader'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const windowHeight = Dimensions.get('window').height;


const ProductStore = ({ navigation }) => {
    const [category, setCategory] = useState('Shoes');
    const topModalLocation = useSharedValue(windowHeight);

    const exitModal = () => {
        topModalLocation.value = withTiming(windowHeight, { duration: 500})
    }

    const openModal = () => {
        topModalLocation.value = withTiming(0,{ 
            duration: 500,
            easing: Easing.elastic(.8)
        })
    }

  const shoes = useSelector(state => state.shoes.shoes)

  return (
    
    <View style={styles.screen}>
    
        <MainHeader />
       {/* Tiers  */}
       
      <View style={{ marginTop: 55}}><Text style={styles.memberText}>Membership Tiers</Text></View>
      <View style={styles.memberContainer}>
        <View style={[styles.memberBox, styles.base]}>
            <Text style={[styles.memberLabels, {backgroundColor: '#f9f9f9'}]}>Base</Text>
        </View>
        <View style={[styles.memberBox, styles.entry]}>
            <Text style={[{color:'#fff'}, styles.memberLabels]}>Entry</Text>
        </View>
        <View style={[styles.memberBox, styles.executive]}>
            <Text style={[{color:'#fff'}, styles.memberLabels, styles.textShadow]}>Executive</Text>
        </View>
        <View style={[styles.memberBox, styles.ceo]}>
            <Text style={[{color:'#fff'}, styles.memberLabels, styles.textShadow]}>CEO</Text>
        </View>
      </View>

       {/* section  */}
       <View style={styles.section}>
            <ScrollView horizontal={true} >
                <View style={styles.active}></View>
                {/* TODO: PRESSABLE CHANGE CATEGORY */}
                <View style={styles.sectionLabelBox}>
                    <Text style={styles.sectionLabelText}>Shoes</Text>
                </View>

                <View style={styles.sectionLabelBox}>
                    <Text style={styles.sectionLabelText}>Pants</Text>
                </View>

                <View style={styles.sectionLabelBox}>
                    <Text style={styles.sectionLabelText}>Hats</Text>
                </View>

                <View style={styles.sectionLabelBox}>
                    <Text style={styles.sectionLabelText}>Socks</Text>
                </View>

                <View style={styles.sectionLabelBox}>
                    <Text style={styles.sectionLabelText}>Shirts</Text>
                </View>
                <View style={styles.sectionLabelBox}>
                    <Text style={styles.sectionLabelText}>Hoodies</Text>
                </View>
            </ScrollView>
       </View>
       {/* filter  */}
       <View style={styles.filterParent}>
            <View style={styles.filterButtonsContainer}>
                <ScrollView horizontal={true}>
                   
                </ScrollView>
            </View>
            <View style={styles.filterBtn}>
               
                <Pressable style={styles.mainFilterBtn} onPress={openModal}>
                    <Text style={styles.mainFilterText}>Filter</Text>
                </Pressable>
            </View>
       </View>

       <FlatList
            data={shoes}
            numColumns={2}
            renderItem={( {item, index} ) => (
            <StoreCards
               productTitle={item.title} 
               img={item.images[0]} 
               prices={item.ticketPrices} 
            />)}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 100 }}
            
        />
        
        <Animated.View style={[styles.shopModalContainer, { top: topModalLocation }]} >
            <Pressable style={styles.closeModalIcon} onPress={exitModal}>
                <MaterialIcons name="clear" size={22} color="black" />
            </Pressable>
            <View style={{ alignItems: 'center'}}>
            <Text style={styles.mainText}>Filter</Text>
            <Text style={styles.subText}>({ category })</Text>
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


            </ScrollView>
            </View>


            <View style={[styles.buttonBlock]}>
            <Pressable style={[styles.modalButton, styles.confirmationButtons, { backgroundColor: '#f9f9f9'}]}><Text style={styles.defaultUppercaseButtonText}>Clear</Text></Pressable>
            <Pressable 
                onPress={exitModal}
                style={[styles.modalButton, styles.confirmationButtons, {backgroundColor: Colors.primary}]}>
                <Text style={[styles.defaultUppercaseButtonText, {color: '#fff'}]}>Apply</Text>
            </Pressable>
            </View>
        </Animated.View>
    </View>
  )
}

export default ProductStore

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F7FF',
},
memberText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Lexend-Deca-Regular'
},
memberContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 20,
    alignSelf: 'center',
    marginTop: 5
},
memberBox: {
    width: '25%',
    height: '100%',
    justifyContent: 'center'
},
memberLabels: {
    textAlign: 'center',
    elevation: 20,
    shadowColor: '#000',
    fontFamily: 'Lexend-Deca-Regular',
    fontSize: 12
},
entry: {
    backgroundColor: Colors.secondary
},
executive: {
    backgroundColor: Colors.primary
},
ceo: {
    backgroundColor: Colors.tertiary
},
textShadow: {   
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: {width: -.5, height: .5},
    textShadowRadius: 1
},
section: {
    width: '100%',
    height: 40,
    marginTop:5,
    backgroundColor: '#eee',
    elevation: 20,
    shadowColor: '#000',
    flexDirection: 'row',
    paddingHorizontal: '7%'
},
active: {
    position: 'absolute',
    bottom: 1,
    left: 9,
    width: 40,
    height: 3,
    backgroundColor: Colors.primary
},
sectionLabelBox: {
    justifyContent: 'center',
    marginRight: 25,
    width: 60
},
sectionLabelText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1.6,
    fontFamily: 'Lexend-Deca-Regular'
},
filterParent: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 30,
    marginVertical: 20,
    alignItems: 'center'
},
filterButtonsContainer: {
    width: '75%'
},
filterBtn: {
    width: '25%',
    alignItems: 'flex-end'
},
mainFilterBtn: {
    width: 80,
    height: 25,
    backgroundColor: "#eee",
    elevation: 2,
    shadowColor: '#000',
    borderRadius: 2,
    justifyContent: 'center'
},
mainFilterText: {
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 1.8,
    fontFamily: 'Lexend-Deca-Regular'
},
shoeList: {
    paddingBottom: 100
},
navButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: '#fff',
    zIndex: 5
  },
  //
  //
  //
  //*********************MODAL STYLES***************************
  //
  //
  shopModalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    padding: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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
    marginTop: 20,
    position: 'absolute',
    top: windowHeight - 180,
    right: 30
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