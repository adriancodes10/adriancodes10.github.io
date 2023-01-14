

import variables from 'assets/styles/variables'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const BlurWidget = () => {
  return <View style={styles.blur}/>
}

export default BlurWidget

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backdropFilter: 'blur(5px)',
    backgroundColor: variables.modalBackground
  }
})