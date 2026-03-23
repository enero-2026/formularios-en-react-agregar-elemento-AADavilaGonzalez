import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from "react";
import { List, TextInput, Text, Button, Snackbar, IconButton} from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import * as api from "../../api.js";
import ModalAlumno from "../../components/ModalAlumno.js";

export default function Alumnos(){

  const [alumnos, setAlumnos] = useState([]); 
  const [filtroAlumno, setFiltroAlumno] = useState('');
  const [filtroExpandido, setFiltroExpandido] = useState(true);
  
  const [agregar, setAgregar] = useState(false);
  const [modificar, setModificar] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const [seleccion, setSeleccion] = useState(null);

  function filtrar(alumnos) {
    return alumnos.filter(
      alumno => (
        alumno.nombre + ' ' + alumno.apellido
      ).toLowerCase().includes(filtroAlumno.toLowerCase())
    ); 
  }

  const ordenarNombreAZ = () => {
    const nuevosAlumnos = [...alumnos].sort(
      (a, b) => a.nombre.localeCompare(b.nombre));
    setAlumnos(nuevosAlumnos);
    setFiltroExpandido(false);
  }

  const ordenarApellidoAZ = () => {  
    const nuevosAlumnos = [...alumnos].sort(
      (a, b) => a.apellido.localeCompare(b.apellido));
    setAlumnos(nuevosAlumnos);
    setFiltroExpandido(false);
  }

  useEffect(()=> {
    setTimeout(()=>{
      setAlumnos(api.getAlumnos()); 
    }, 2000)
  }, []);

  if(!alumnos.length){
    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Cargando alumnos...</Text>
      </SafeAreaView>
    )
  }
  if(alumnos.length === 0 ){
    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>No hay alumnos</Text>
      </SafeAreaView>
    )
  }

  function handleAgregarAlumno(infoAlumno) {
    const existe = alumnos.some(
      (alumno) => alumno.matricula === infoAlumno.matricula
    );
    if(existe) {
      setMensaje('La matrícula ya existe');
      setSnackbarVisible(true);
      return;
    }
    setAlumnos([...alumnos, infoAlumno]);
    setMensaje('Alumno agregado correctamente');
    setSnackbarVisible(true);
  }

  function handleModificarAlumno(infoAlumno) {
    const alumno = alumnos.find(alumno => alumno.matricula == seleccion);
    Object.assign(alumno, infoAlumno);
  }

  return(
    <SafeAreaView style={styles.container}>

    <ModalAlumno
      accion="Agregar"
      visible={agregar}
      onAdd={handleAgregarAlumno}
      onDismiss={()=>setAgregar(false)}
    />

    <ModalAlumno
      accion="Modificar"
      visible={modificar}
      onAdd={handleModificarAlumno}
      onDismiss={()=>setModificar(false)}
    />

    <Text variant="labelMedium" style={styles.label}>Busca por nombre:</Text>
    <TextInput style={styles.input}
      placeholder="ejemplo: David Garza"
      mode="outlined" 
      onChangeText={(text)=>setFiltroAlumno(text)}
      value={filtroAlumno}
      right={<TextInput.Icon icon="magnify"/>}>
    </TextInput>
    <Button
      mode="contained"
      onPress={()=>setAgregar(true)}
      style={styles.button}>
      Agregar Alumno
    </Button>

    <List.Section
      expanded={filtroExpandido}
      onPress={()=>setFiltroExpandido(!filtroExpandido)
    }>
      <List.Accordion
        title="Ordenar"
        left={props => <List.Icon {...props} icon="sort" />}>
        <List.Item title="Nombre: AZ" onPress={ordenarNombreAZ}/>
        <List.Item title="Apellido: AZ" onPress={ordenarApellidoAZ} />
      </List.Accordion>
    </List.Section>
    
    <FlatList
    data={filtrar(alumnos)}
    keyExtractor={(item) => item.matricula}
    renderItem={({ item }) => (
      <List.Item
        title={`${item.nombre} ${item.apellido}`}
        description={item.matricula}
        left={() => (
          <MaterialIcons name="account-circle" size={40} color="#bb86fc"/>
        )}
        right={() => (
          <IconButton
            icon="check"
            iconColor="#bb86fc"
            size={20}
            onPress={() => {
              setSeleccion(item.matricula);
              setModificar(true);
            }}
          />
        )}
      />
    )} />

    <Snackbar
      visible={snackbarVisible}
      onDismiss={() => setSnackbarVisible(false)}
      duration={2000}
    >
      {mensaje}
    </Snackbar>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  label: {
    color: '#e0e0e0',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginBottom: 16,
  },
});
