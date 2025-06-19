import { Button, Text, View } from 'react-native'
import React from 'react'
import navigationStrings from '../../Constants/navigationStrings'

const Profile = ({ navigation }) => {
    return (
        <View>
            <Text>Profile</Text>
            <Button onPress={() => navigation.navigate(navigationStrings.HOME)} title='Go To Home' />
        </View>
    )
}

export default Profile

