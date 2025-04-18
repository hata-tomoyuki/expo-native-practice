import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}


export default function TodoDetail() {
    const { id } = useLocalSearchParams()
    const [todo, setTodo] = useState<Todo>({
        userId: 0,
        id: 0,
        title: '',
        completed: false,
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log('Todo ID:', id)
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setIsLoading(false)
                setTodo(json)
            })
    }, [])

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>Todoの詳細ページ</Text>
            {isLoading ? <Text>Loading...</Text> : (
                <View>
                    <Text>ID: {id}</Text>
                    <Text>タイトル: {todo.title}</Text>
                    <Text>完了: {todo.completed ? '完了' : '未完了'}</Text>
                    <Text>ユーザーID: {todo.userId}</Text>
                    <Text>Todo ID: {todo.id}</Text>
                </View>
            )}
        </View>
    )
}
