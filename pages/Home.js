import { StyleSheet, Text, View } from 'react-native';
import Main from '../component/Main';
import Button from "../component/Button";
import * as ImagePicker from 'expo-image-picker';
import {useState} from "react";
const PlaceholderImage = require('../assets/images/background-image.png')

export default function Home() {

    const [selectedImage, setSelectedImage] = useState(null);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Main
                    placeholderImageSource={PlaceholderImage}
                    selectedImage={selectedImage}
                />
            </View>
            <View style={styles.footerContainer}>
                <Button theme="primary" label="Choisisez une photo" onPress={pickImageAsync}/>
                <Button label="Utilisez cette photo"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});
