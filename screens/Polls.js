import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, Dimensions, FlatList} from 'react-native'
import React, { useState, useEffect } from 'react'

import MeshGradient from '../assets/img/bg-mesh.png'
import smallLogo from '../assets/img/logo-sm.png'
import MainHeader from '../components/MainHeader'
import Colors from '../constants/Colors'

const windowHeight = Dimensions.get('window').height;

const POLL_ID = 123242;
const USER = {
  votes: [199654, 123242, 996871]
}

const POLLDATA = [
  {
    id: 156,
    name: 'Nike Kyrie 3 Low Wolf Grey',
    votes: 47
  },
  {
    id: 266,
    name: 'Jordan 4 Retro White Oreo',
    votes: 90
  },
  {
    id: 187,
    name: 'Travis Scott X Nike Air Max Baroque Brown',
    votes: 71
  },
  {
    id: 410,
    name: 'Adidas Trae Young 1 Acid Orange',
    votes: 19
  }
]

const TOTAL_VOTES = POLLDATA.reduce((acc, obj) => acc + obj.votes, 0);
console.log(TOTAL_VOTES);

const VoteBox = ({ name, isSelected, changeSelection, id, index }) => {
  let boxStyle = {
    borderColor: 'transparent',
    borderWidth: 0,
    backgroundColor: '#D9D9D9'
  }
  
  switch(index) {
    case 1:
    case 2:
      break; 
    case 0:
      boxStyle = {
        ...boxStyle,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
      }
      break;
    case 3: 
      boxStyle = {
        ...boxStyle,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
      }   
  }

  if(isSelected) {
    boxStyle = {
      borderColor: 'black',
      borderWidth: 4,
      backgroundColor: Colors.primary
    }
  }
  return (
    <Pressable style={[styles.voteBox, boxStyle]} onPress={() => {changeSelection(id)}}>
      <Text style={[styles.alignCenter, styles.inriaSansBold, { fontSize: 13, color: isSelected ? '#fff' : '#000'}]}>{name}</Text>
    </Pressable>
  )
}

const Polls = () => {

  const [hasVoted, setHasVoted] = useState(false);
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [idOfSelected, setIdOfSelected] = useState(undefined);

  useEffect(() => {
    if(USER.votes.includes(POLL_ID)) {
      setHasVoted(true);
    }
  }, [setHasVoted])

  const changeSelection = selectionId => {
    if(idOfSelected === selectionId) {
      setIdOfSelected(undefined);
      return;
    }
    setIdOfSelected(selectionId);
  }

  const handleSuggestion = () => {
    console.log('handle suggestion function...')
  }
  const handleVote = () => {
    console.log('handle vote function...')
  }

  let VoteButton = !idOfSelected ? 
  (
    <View style={[styles.btn, styles.disabledBtn]}>
      <Text style={[styles.alignCenter, styles.inriaSans,{ color: '#D9D9D9'}]}>Vote</Text>
    </View>
  ) : 
  
  ( 
  <Pressable 
    style={[styles.btn, styles.primaryBtn]} 
    onPress={handleVote}
    android_ripple={{ color: '#fff' }}
  >
    <Text style={[styles.alignCenter, styles.inriaSans,{ color: '#fff'}]}>Vote</Text>
  </Pressable>
  );

  return (
    <ImageBackground
      source={MeshGradient}
      resizeMode="cover"
      style={styles.bgImage}
    >
      <MainHeader 
        title={"Suggestions"}
        logo={true}
      />
      <View style={[styles.contain, { marginTop: 90, marginBottom: 22}]}>
        <Text style={[styles.alignCenter, styles.inriaSansBold]}>Email</Text>
        <TextInput 
          style={[styles.emailInput, styles.inriaSans]}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={[styles.inriaSans, { marginLeft: 20, fontSize: 13}]}>Shoe Suggestion..</Text>
        <TextInput 
          style={[styles.suggestionInput, styles.inriaSans]}
          multiline={true}
          placeholder='Suggest a brand, model, colorway plus any other details you would like..'  
        />
        <Pressable 
          style={[styles.btn, styles.primaryBtn]} 
          onPress={handleSuggestion}
          value={suggestion}
          onChangeText={text => setSuggestion(text)}
          android_ripple={{ color: '#fff' }}
        >
          <Text style={[ styles.alignCenter, styles.inriaSans, { color: '#fff'}]}>Submit</Text>
        </Pressable>
      </View>

      <View style={styles.contain}>
        <Text style={[styles.alignCenter, styles.inriaSansBold, { marginVertical: 10}]}>Poll for 1/16/24 - 1/23/24</Text>
       {hasVoted ? <View><Text>HAS VOTED... SHOW RESULTS</Text></View> : 
        <FlatList 
          data={POLLDATA}
          keyExtractor={item => item.id}
          renderItem={( {item, index} ) => 
            <VoteBox name={item.name} isSelected={idOfSelected === item.id} changeSelection={changeSelection} id={item.id} index={index}/>
          }
        />
        }
        {VoteButton}
       
      </View>
    </ImageBackground>
 )
}

export default Polls

const styles = StyleSheet.create({
  bgImage: {
    flex: 1
  },
  contain: {
    backgroundColor: "#F8F7FF",
    width: '90%',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 3
  },
  emailInput: {
    alignSelf: 'center',
    width: 190,
    height: 25,
    marginBottom: 10,
    marginTop: 2,
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  alignCenter: {
    textAlign: 'center'
  },
  suggestionInput: {
    height: windowHeight > 850 ? 100 : 70,
    marginHorizontal: 20,
    padding: 4,
    marginTop: 4,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    textAlignVertical: 'top'
  },
  voteBox: {
    backgroundColor: '#D9D9D9',
    height: windowHeight > 850 ? 50 : 42,
    marginVertical: 1,
    justifyContent: 'center',
    width: '95%',
    maxWidth: 345,
    alignSelf: 'center',
  },
  firstBox: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  lastBox: {
    borderBottomLeftRadius: 3,
    borderBottomLeftRadius: 3
  },
  btn: {
    width: 100,
    height: windowHeight > 850 ? 29 : 24,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 2
  },
  inriaSans: {
    fontFamily: 'Inria-Sans'
  },
  inriaSansBold: {
    fontFamily: 'Inria-Sans-bold'
  },
  disabledBtn: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  primaryBtn: {
    backgroundColor: Colors.primary
  }
})