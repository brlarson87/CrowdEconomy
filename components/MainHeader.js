import { StyleSheet, View, Image, Text, StatusBar, Pressable, Platform, Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


import Colors from '../constants/Colors';
const windowWidth = Dimensions.get('window').width;
const MainHeader = ({ title, logo }) => {

  const RightSideHeader = logo ? 
  (<View style={[styles.headerRightContainer, styles.logoRight]}>
      <Image
          style={styles.logo} 
          source={require('../assets/img/logo-sm.png')}  
        />
    </View>
  )
   : 
  (<Pressable style={styles.headerRightContainer} onPress={() => console.log('funds added pressed')}>
    <View style={styles.addButton}><AntDesign name="pluscircleo" size={24} color="white" /></View>
  </Pressable>
  )

  return (
    <View>
      <StatusBar
      textColor={'fff'}
    />  
      <Pressable style={styles.headerLeftContainer} onPress={() => console.log('menu bars pressed')}>
        <Image
          style={styles.menu} 
          source={require('../assets/img/menu-icon.png')}  
        />
      </Pressable>
      {title && <View style={styles.headerCenterContainer}>
          <Text style={styles.titleStyles}>{title}</Text>
        </View>}
        
      {RightSideHeader}
    </View>
  )
}

export default MainHeader

const styles = StyleSheet.create({
    headerLeftContainer: {
        position: 'absolute',
        top: Platform.OS === "android" ? 20 : 50,
        left: 8,
        zIndex: 10
      },
      headerCenterContainer: {
        width: 250,
        position: 'absolute',
        top: Platform.OS === "android" ? 18 : 45,
        left: (windowWidth / 2) - 125
      },
      titleStyles: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Inria-Sans-bold',
        fontSize: 24
      },
      headerRightContainer: {
        position: 'absolute',
        top: Platform.OS === "android" ? 18 : 45,
        right: 8,
        zIndex: 10
      },
      menu: {
        width: 30,
      },
      logo: {
        width: 50,
        height: 50
      },
      addButton: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 40
      },
      logoRight: {
        top: Platform.OS === "android" ? 10 : 45,
      }
})