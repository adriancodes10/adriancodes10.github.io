

import React from 'react'
import { StyleSheet } from 'react-native'
import { BlurView } from '@react-native-community/blur'
import variables from 'assets/styles/variables'

const BlurWidget = () => {
  return (
    <BlurView
      style={styles.blur}
      blurType="dark"
      blurAmount={6}
      reducedTransparencyFallbackColor={variables.blurBackground}
    />
  )
}

export default BlurWidget

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})