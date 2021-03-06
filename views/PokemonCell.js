import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import {getImageRequire} from '../pokemonRequires';

export default function PokemonCell(props) {
    // id, name
    return (
        <View style={styles.fillParent}>
            <Image style={styles.image} source={getImageRequire(parseInt(props.id))}/>
            <Text style={styles.name}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 4,
        width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        resizeMode: 'contain',
        padding: 0,
    },
    fillParent: {
        width: '100%', 
        flex: 1,
    },
    name: {
        flex: 1, 
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: '#ff5855',
    }
});
