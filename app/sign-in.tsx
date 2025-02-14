import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const signIn = () => {
  return (
    <SafeAreaView className="bg-skinColor">
      <Text className='font-inter-light text-3xl'>sign-in</Text>
    </SafeAreaView>
  )
}

export default signIn;