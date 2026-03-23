import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Card, List } from "react-native-paper";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Config() {
 return(
    <SafeAreaView style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>Configuración</Text>
        <Card style={styles.card}>
            <Card.Content>
                <List.Item
                    title="Tema"
                    description="Oscuro"
                    left={() => <MaterialIcons name="palette" size={24} color="#bb86fc" />}
                    titleStyle={styles.listText}
                    descriptionStyle={styles.listText}
                />
                <List.Item
                    title="Idioma"
                    description="Español"
                    left={() => <MaterialIcons name="language" size={24} color="#bb86fc" />}
                    titleStyle={styles.listText}
                    descriptionStyle={styles.listText}
                />
                <List.Item
                    title="Versión"
                    description="1.0.0"
                    left={() => <MaterialIcons name="info" size={24} color="#bb86fc" />}
                    titleStyle={styles.listText}
                    descriptionStyle={styles.listText}
                />
            </Card.Content>
        </Card>
    </SafeAreaView>
 )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 16,
    },
    title: {
        color: '#bb86fc',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#1e1e1e',
    },
    listText: {
        color: '#e0e0e0',
    },
});