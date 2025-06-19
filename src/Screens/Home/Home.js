import { Button, Text, View } from 'react-native'
import React from 'react'
import navigationStrings from '../../Constants/navigationStrings'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title='Profile' onPress={()=>navigation.navigate(navigationStrings.PROFILE, {title: 'passing data from home'})} />
        </View>
    )
}

export default Home

