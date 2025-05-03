import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DataDetailPage = () => {
    const { params } = useLocalSearchParams()
    console.log(params)
  return (
    <View>
      <Text>DataDetailPage</Text>
    </View>
  )
}

export default DataDetailPage

const styles = StyleSheet.create({})
