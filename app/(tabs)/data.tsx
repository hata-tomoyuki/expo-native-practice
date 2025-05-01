import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}

const data = () => {

    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
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
            <Text>data</Text>

            {loading ? <Text>Loading</Text> : (
                // <ScrollView>
                //     {todos.map((todo) => (
                //         <View key={todo.id}>
                //             <Text>{todo.title}</Text>
                //         </View>
                //     ))}
                // </ScrollView>
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
            )}
        </View>
    )
}

export default data

const styles = StyleSheet.create({})
