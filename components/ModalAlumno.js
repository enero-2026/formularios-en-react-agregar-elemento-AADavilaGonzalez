import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal, TextInput, Button } from 'react-native-paper';

export default function ModalAlumno({ accion, visible, onDismiss, onAdd}) {

  const [matricula, setMatricula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const limpiarCampos = () => {
    setMatricula('');
    setNombre('');
    setApellido('');
  };

  const handleAdd = () => {
    if (!matricula || !nombre) return;

    onAdd({ matricula, nombre, apellido});

    limpiarCampos();
    onDismiss();
  };


  const handleCancel = () => {
    limpiarCampos();
    onDismiss();
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={handleCancel} contentContainerStyle={styles.modal}>
        
        <TextInput
          label="Matrícula"
          value={matricula}
          onChangeText={setMatricula}
          style={styles.input}
        />

        <TextInput
          label="Nombre"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />

        <TextInput
          label="Apellido"
          value={apellido}
          onChangeText={setApellido}
          style={styles.input}
        />

        <View style={styles.buttons}>
          <Button mode="contained" onPress={handleAdd}>
            {accion}
          </Button>

          <Button mode="outlined" onPress={handleCancel}>
            Cancelar
          </Button>
        </View>

      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  input: {
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
