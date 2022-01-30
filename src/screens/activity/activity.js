import React from "react"
import {Text, FlatList, View} from "react-native"

const activities = [
    {
        id: '1',
        name: 'Basketball',
        date: 'Wed, 21 Jun 30:01',
        imageUrl: '',
    },
    {
        id: '2',
        name: 'Basketball',
        date: 'Wed, 21 Jun 30:01',
        imageUrl: '',
    },
    {
        id: '3',
        name: 'Basketball',
        date: 'Wed, 21 Jun 30:01',
        imageUrl: '',
    },
    {
        id: '4',
        name: 'Basketball',
        date: 'Wed, 21 Jun 30:01',
        imageUrl: '',
    },
    {
        id: '5',
        name: 'Basketball',
        date: 'Wed, 21 Jun 30:01',
        imageUrl: '',
    }
]

const Activity = () => {
    const renderItem = ({item}) => {
        return (
            <View>
                <Text>{item.name}</Text>
                <Text>{item.date}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>List of activities</Text>
            <FlatList data={activities} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    )
}

export default Activity