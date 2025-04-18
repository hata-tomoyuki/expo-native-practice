import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}

const page2 = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [isLoadng, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setIsLoading(false)
                setTodos(json)
            })
    }, [])

    return (
        <View>
            <Text>page2</Text>
            <Text>todos</Text>
            {isLoadng && <Text>Loading...</Text>}
            {/* <ScrollView>
                {todos.map((todo) => (
                    <View key={todo.id}>
                        <Text>{todo.title}</Text>
                        <Text>{todo.completed ? '完了' : '未完了'}</Text>
                    </View>
                ))}
            </ScrollView> */}
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.completed ? '完了' : '未完了'}</Text>
                    </View>
                )}
                />
        </View>
    )
}

export default page2

const styles = StyleSheet.create({})
