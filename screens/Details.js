import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'

import { COLORS } from '../constants'

const Details = () => {
  return (
    <SafeAreaView style ={{flex: 1, backgroundColor: COLORS.white}}>
      <Text>Details</Text>
    </SafeAreaView>
  )
}

export default Details