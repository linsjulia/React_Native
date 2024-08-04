
import {ImageBackground,View, Text, StyleSheet, Image} from 'react-native'

export default function index(){
  return(
    <View style={styles.container }>
      <Text>OOOOOI TESTANDO</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center'
  }})