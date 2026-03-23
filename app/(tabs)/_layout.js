import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function TabLayout() {
        
    return(
       
        <Tabs screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#121212',
            },
            headerTintColor: '#bb86fc',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#e0e0e0',
            },
            tabBarStyle: {
                backgroundColor: '#1e1e1e',
                borderTopColor: '#333333',
            },
            tabBarActiveTintColor: '#bb86fc',
            tabBarInactiveTintColor: '#808080',
        }}>
        
        <Tabs.Screen name="index" options={{
            title: 'Inicio',
        }}/>
        <Tabs.Screen name="alumnos" options={{
            title: 'Alumnos',
            tabBarIcon: ({color}) => <MaterialIcons  name="account-circle" size={40} color={color}></MaterialIcons>
        }} />
        <Tabs.Screen name="perfil" options={{
            title: 'Perfil',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />
            
        }}
        />   
        </Tabs>
      
    )
}
