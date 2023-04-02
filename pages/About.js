import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Main from '../component/Main';

export default function About() {
    return (
        <View style={styles.container}>
            <Header title="About" style={styles.header} />
            <Main/>
            <StatusBar style="auto" />
            <Footer/>
            <Text>Bonjour</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
