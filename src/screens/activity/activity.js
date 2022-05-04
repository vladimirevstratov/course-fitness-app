import React, {useState, useEffect} from "react"
import {Text, FlatList, View, Alert} from "react-native"
import { TouchableOpacity } from "react-native"
import styles from "./activity.styles"

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
    const [count, setCount] = useState(0)

    console.log('рендер')

    const renderItem = ({item}) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.image} />
                <View style={styles.infoContainer}>
                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                    <View style={styles.actionsContainer}>
                        <Text style={styles.action}>Edit</Text>
                        <Text style={styles.action}>Delete</Text>
                    </View>
                </View>
            </View>
        )
    }

    const renderSeparator = () => {
        return <View style={styles.separator} />
    }

    useEffect(() => {
        Alert.alert(`Вы нажали ${count} раз`)
    }, [count])

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text>{count}</Text>
            </TouchableOpacity>
            <TouchableOpacity><Text>Рендер</Text></TouchableOpacity>
            <Text>List of activities</Text>
            <FlatList 
                data={activities}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    )
}

export default Activity