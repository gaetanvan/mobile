import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Main({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage !== null
        ? { uri: selectedImage }
        : placeholderImageSource;

    return (
        <View style={styles.main}>
            <Image source={imageSource} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#25292e',
        padding: 20,
        alignItems: "center",
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
});