import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const page1 = () => {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const handleInputChange = (text: string) => {
      setName(text)
    }

    return (
      <View>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>{name}</Text>
        <Image source={require('@/assets/images/react-logo.png')}  />
        <TextInput
          placeholder='お名前'
          value={name}
          onChange={(e) => handleInputChange(e.nativeEvent.text)}
        />
        <Button
          title='送信!!!!!!!!!!!!!!!!'
          onPress={() => {
            setText('送信しました！！！！！！！！！')
          }}
        />
      </View>
    )
}

export default page1

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      color: 'red',
    }
  })

