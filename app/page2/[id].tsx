import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

export default function TodoDetail() {
  const { id } = useLocalSearchParams()

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Todoの詳細ページ</Text>
      <Text>ID: {id}</Text>
      {/* 必要ならここでfetchして詳細情報を取得してもOK */}
    </View>
  )
}
