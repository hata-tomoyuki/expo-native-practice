import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, Stack, useRouter } from 'expo-router'

const DataDetailPage = () => {
    const { userId, id, title, completed } = useLocalSearchParams()
    const router = useRouter()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Stack.Screen
                options={{
                    title: '詳細',
                    headerBackTitle: '戻る',
                }}
            />
            <Text>{title}</Text>
            <Text>{completed ? '完了' : '未完了'}!!!!!!!!!!!</Text>

            <TouchableOpacity
                onPress={() => {
                    router.back()
                }}
            >
                <Text>戻る</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DataDetailPage

const styles = StyleSheet.create({})
