import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'

type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}

const page2 = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const router = useRouter()


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
        <View style={styles.container}>
            <Text style={styles.title}>todos</Text>
            {isLoading && <Text>Loading...</Text>}
            {/* <ScrollView>
                {todos.map((todo) => (
                    <View key={todo.id}>
                        <Text>{todo.title}</Text>
                        <Text>{todo.completed ? '完了' : '未完了'}</Text>
                    </View>
                ))}
            </ScrollView> */}
            <FlatList
            style={styles.todoContainer}
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todo}>
                        <TouchableOpacity onPress={() => router.push(`/page2/${item.id}`)}>
                        <Text>{item.title}</Text>
                        </TouchableOpacity>
                        <Text>{item.completed ? '完了' : '未完了'}</Text>
                    </View>
                )}
                />
        </View>
    )
}

export default page2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    todoContainer: {
        width: '90%',
    },
    todo: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f9c2ff',
        borderRadius: 5,
    }
})
