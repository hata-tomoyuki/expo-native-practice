import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'

const DataDetailPage = () => {
  const { title, completed } = useLocalSearchParams()
  const router = useRouter()
  return (
    <View>
      <Stack.Screen
        options={{
          title: '詳細',
        }}
      />
      <Text>{title}</Text>
      <Text>{completed ? '完了' : '未完了'}</Text>
      <TouchableOpacity onPress={() => router.push('/data')}>
        <Text>戻る</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DataDetailPage

const styles = StyleSheet.create({})
