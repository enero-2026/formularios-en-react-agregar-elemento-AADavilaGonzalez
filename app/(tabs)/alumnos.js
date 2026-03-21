import { FlatList, View , StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import {List, TouchableRipple, TextInput, Text, Menu, Button, Snackbar} from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Agregar from "../Agregar";


export default function Alumnos(){
  
  const [alumnos, setAlumnos] = useState([]);
  
  const [buscaAlumno, onChangeAlumno] = useState('');
  
  const alumnosFiltrados = alumnos.filter(alumno => (alumno.nombre + ' ' + alumno.apellido).toLowerCase().includes(buscaAlumno.toLowerCase())); 
  
  const [ordenarAlumnos, setOrdenarAlumnos] = useState([]);
  
  const [expanded, setExpanded] = useState(true);

  const [ visible, setVisible ] = useState(false);

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const handlePress = () => setExpanded(!expanded);

  const ordenarNombreAZ = () => {
    const nuevosAlumnos = [...alumnos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    setOrdenarAlumnos(nuevosAlumnos);
    setAlumnos(nuevosAlumnos);

    console.log(nuevosAlumnos)

    handlePress();
  }

  const ordenarApellidoAZ = () => {
    
    const nuevosAlumnos = [...alumnos].sort((a, b) => a.apellido.localeCompare(b.apellido));
    setOrdenarAlumnos(nuevosAlumnos);
    setAlumnos(nuevosAlumnos);

    console.log(nuevosAlumnos);
    handlePress();
  }

  useEffect(()=> {
    setTimeout(()=>{
      setAlumnos([{
        
        nombre: 'SAMANTHA',
        apellido: 'CANDELARIA MORA',
        matricula: '2114354'
        
      },
      
      {
        
        nombre: 'JAVIER',
        apellido: 'CANTU SILVA',
        matricula: '2111889'
        
      },
      
      {
        
        nombre: 'ANGEL EMILIANO',
        apellido: 'CARMONA LOZANO',
        matricula: '2069119'
        
      },
      
      {
        
        nombre: 'JORGE',
        apellido: 'CASTILLO ACOSTA',
        matricula: '2132842'
        
      },
      
      {
        
        nombre: 'ALDO ADRIAN',
        apellido: 'DAVILA GONZALEZ',
        matricula: '1994122'
        
      },
      
      {
        
        nombre: 'FABRIZIO',
        apellido: 'DURAN BARRIENTOS',
        matricula: '2018230'
        
      },
      
      {
        
        nombre: 'SEBASTIAN',
        apellido: 'FLORES GONZALEZ',
        matricula: '21045641'
        
      },
      
      {
        
        nombre: 'FABRIZIO',
        apellido: 'DURAN BARRIENTOS',
        matricula: '20182301'
        
      },
      
      {
        
        nombre: 'SEBASTIAN',
        apellido: 'FLORES GONZALEZ',
        matricula: '2104564'
        
      },
      
      {
        
        nombre: 'DIEGO',
        apellido: 'FLORES LÓPEZ',
        matricula: '2066033'
        
      },
      
      {
        
        nombre: 'ERICK ADRIAN',
        apellido: 'FLORES MARTINEZ',
        matricula: '2132976'
        
      },
      
      {
        
        nombre: 'DIEGO',
        apellido: 'GARZA AVALOS',
        matricula: '2066114'
        
      },
      
      {
        
        nombre: 'CHRISTIAN GABRIEL',
        apellido: 'GONZALEZ OVALLE',
        matricula: '2031243'
        
      },
      
      {
        
        nombre: 'DIEGO',
        apellido: 'GRANJA PEÑA',
        matricula: '20647331'
        
      },
      
      {
        
        nombre: 'ALEXIS',
        apellido: 'IBARRA RODRIGUEZ',
        matricula: '20312431'
        
      },
      
      {
        
        nombre: 'SEBASTIAN',
        apellido: 'MARTINEZ ELIAS ANGEL',
        matricula: '2064733'
        
      },
      
      {
        
        nombre: 'ESMERALDA GABRIELA',
        apellido: 'MENDIETA GONZALEZ',
        matricula: '2094647'
        
      },
      
      {
        
        nombre: 'ALEJANDRO',
        apellido: 'MIRELES VELAZQUEZ',
        matricula: '2005102'
        
      },
      
      {
        
        nombre: 'ANDRES',
        apellido: 'MONSIVAIS SALAZAR',
        matricula: '2064574'
        
      },
      
      {
        
        nombre: 'MARTHA JULIETA',
        apellido: 'PARRAZALEZ VALDESPINO',
        matricula: '2024783'
        
      },
      
      {
        
        nombre: 'LUIS ANGEL',
        apellido: 'PEÑA MUNGARRO',
        matricula: '2066077'
        
      },
      
      {
        
        nombre: 'JULIO CESAR',
        apellido: 'PUENTE REYNOSO',
        matricula: '2092151'
        
      },
      
      {
        
        nombre: 'BRYAN',
        apellido: 'RAMIREZ LOPEZ',
        matricula: '2103708'
        
      },
      
      {
        
        nombre: 'LILIANA VALERIA',
        apellido: 'RAMOS AVILA',
        matricula: '2115192'
        
      },
      
      {
        
        nombre: 'MAURICIO',
        apellido: 'RICO JAUREGUI',
        matricula: '2037503'
        
      },
      
      {
        
        nombre: 'ADRIAN',
        apellido: 'RIVERA LUNA',
        matricula: '2131513'
        
      },
      
      {
        
        nombre: 'JOSE EMILIO',
        apellido: 'RIVERA REYNA',
        matricula: '2013503'
        
      },
      
      {
        
        nombre: 'ROSA ISELA',
        apellido: 'RODRIGUEZ OLVERA',
        matricula: '2004613'
        
      },
      
      {
        
        nombre: 'ANGEL AZAEL',
        apellido: 'RODRIGUEZ RODRIGUEZ',
        matricula: '2133022'
        
      },
      
      {
        
        nombre: 'JUAN CARLOS',
        apellido: 'SANCHEZ GALARZA',
        matricula: '2026061'
        
      },
      
      {
        
        nombre: 'ALFREDO',
        apellido: 'SOLIS ORTIZ',
        matricula: '2095320'
        
      },
      
      {
        
        nombre: 'HERWIN DANIEL',
        apellido: 'VELAZQUEZ ABREGO',
        matricula: '2025350'
        
      },
      
      {
        
        nombre: 'ANDRES NEHUEL',
        apellido: 'VILLAGRA RODRIGUEZ',
        matricula: '2103895'
        
      },
      
      {
        
        nombre: 'RODRIGO',
        apellido: 'ZACATENCO OLIVE',
        matricula: '1857791'
        
      },
      
      {
        
        nombre: 'TERESA MARGARITA',
        apellido: 'ZAVALA CANTU',
        matricula: '2025218'
        
      }
    ])
    
  }, 2000)
  
  
}, []);

if(!alumnos.length){
  return(
    <Text>Cargando alumnos...</Text>
  )
}
if(alumnos.length ===0 ){
  return(
    <Text> No hay alumnos</Text>
  )
}


function handleAgregarAlumno(nuevoAlumno) {
  const existe = alumnos.some(
    (alumno) => alumno.matricula === nuevoAlumno.matricula
  );
  if(existe) {
    setMensaje('La matrícula ya existe');
    setSnackbarVisible(true);
    return;
  }
  setAlumnos([...alumnos, nuevoAlumno]);
  setMensaje('Alumno agregado correctamente');
  setSnackbarVisible(true);
}

return(
  <>
  <Agregar
    visible={visible}
    onAdd={handleAgregarAlumno}
    onDismiss={()=>setVisible(false)}/>

  <Text variant="labelMedium">Busca por nombre:</Text>
  <TextInput style={{}}
    placeholder="ejemplo: David Garza"
    mode="outlined" 
    onChangeText={(text)=>onChangeAlumno(text)}
    value={buscaAlumno}
    right={<TextInput.Icon icon="magnify"/>}>
  </TextInput>
  <Button style={styles.button} onPress={()=>setVisible(true)}>Agregar Alumno</Button>

  <List.Section expanded={expanded} onPress={handlePress}>
    <List.Accordion
      title="Ordenar"
      left={props => <List.Icon {...props} icon="sort" />}>
      <List.Item title="Nombre: AZ" onPress={ordenarNombreAZ}/>
      <List.Item title="Apellido: AZ" onPress={ordenarApellidoAZ} />
    </List.Accordion>
  </List.Section>
  
  <FlatList
  data={ordenarAlumnos.length ? ordenarAlumnos : alumnosFiltrados}
  keyExtractor={(item) => item.matricula}
  renderItem={({ item }) => (
    <>
    <List.Item title={`${item.nombre} ${item.apellido}`} description={item.matricula} left={props => <MaterialIcons name="account-circle" size={40}></MaterialIcons>}></List.Item>
    </>
  )} />

  <Snackbar
    visible={snackbarVisible}
    onDismiss={() => setSnackbarVisible(false)}
    duration={2000}
  >
    {mensaje}
  </Snackbar>
  </>
)
}

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#5e77be",
  },
});