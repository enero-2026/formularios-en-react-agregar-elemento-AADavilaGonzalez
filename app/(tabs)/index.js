
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Card } from 'react-native-paper';

export default function Index() {
 return(
    <SafeAreaView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Bienvenido</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="bodyLarge" style={styles.cardText}>
            Esta es la pantalla de inicio de tu aplicación de gestión de alumnos.
          </Text>
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
  },
});
