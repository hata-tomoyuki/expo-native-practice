import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DataDetailPage = () => {
    const { userId, id, title, completed } = useLocalSearchParams()

    return (
        <View>
            <Text>{title}</Text>
            <Text>{completed ? '完了' : '未完了'}</Text>
        </View>
    )
}

export default DataDetailPage

const styles = StyleSheet.create({})
