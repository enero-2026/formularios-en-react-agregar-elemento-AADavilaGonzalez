import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Card, Divider } from "react-native-paper";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Perfil() {
    return(
        <SafeAreaView style={styles.container}>
            <Text variant="headlineMedium" style={styles.title}>Mi Perfil</Text>
            <Card style={styles.card}>
                <Card.Content>
                    <MaterialIcons name="account-circle" size={80} color="#bb86fc" />
                    <Text variant="titleLarge" style={styles.cardText}>Usuario</Text>
                    <Divider style={styles.divider} />
                    <Text variant="bodyMedium" style={styles.cardText}>Email: usuario@escuela.edu</Text>
                    <Text variant="bodyMedium" style={styles.cardText}>Rol: Administrador</Text>
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
    cardText: {
        color: '#e0e0e0',
        marginVertical: 4,
    },
    divider: {
        marginVertical: 16,
    },
});
