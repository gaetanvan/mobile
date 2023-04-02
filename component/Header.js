import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
    return (
        <View style={[styles.header, props.style]}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});