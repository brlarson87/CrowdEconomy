import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const ProgressBar = ({ widthPercentage, enteredTickets, prizeTotal }) => {
    let widthPercentageString = widthPercentage + '%';

  let fillerWidth = {
    width: widthPercentageString
  };
  return (
    <View style={styles.flexContainer}>
        {/* Progress Bar */}
        <View style={styles.progressBar}>
            <View style={{...styles.filler, width: widthPercentageString}}>
            {/* <LinearGradient colors={["#C026B0", "#280F98"]} style={[styles.filler, fillerWidth]}> */}
              {/* {blur && <Image 
                  style={styles.blur}
                  source={require('../assets/img/progress-bar-blur.png')}
              />} */}
              <View style={{...styles.absoluteTracker, transform: [
                  { translateX: 20}
              ]}}>
                  <Image 
                  style={styles.marker}
                  source={require('../assets/img/diamond-marker.png')}
                  />
                  <Text style={styles.tracker}>{enteredTickets}</Text>
              </View>
            {/* </LinearGradient> */}
            
            
            </View>
        </View>

        {/* <Text style={styles.progressText}>{enteredTickets}</Text>
        <Text style={styles.progressText}>/</Text> */}
        <Text style={styles.progressText}>{prizeTotal} Tickets</Text>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%'
      },
      progressBar: {
        width: '57%',
        height: 8,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginHorizontal: '3%',
        justifyContent: 'center'
      },
      filler: {
        backgroundColor: Colors.secondary,
        height: 6,
        borderRadius: 10,
        marginLeft: 1,
        flexDirection: 'row'
      },
      absoluteTracker: {
        position: 'absolute',
        top: 15,
        right: 0,
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
      },
      marker: {
        height: 11,
        width: 11,
        marginBottom: 4
      },
      tracker: {
        width: 45,
        color: "#fff",
        fontSize: 13,
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
        letterSpacing: 1.2,
        fontSize: 12,
        marginHorizontal: 2
      }
})