import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Link} from "react-router-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Link to="/">
                <Text>Home</Text>
            </Link>
            <Link to="/about">
                    <Text>About</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});