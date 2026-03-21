import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal, TextInput, Button } from 'react-native-paper';

const Agregar = ({ visible, onDismiss, onAdd }) => {
  const [matricula, setMatricula] = useState('');
  const [nombre, setNombre] = useState('');

  const handleAdd = () => {
    if (!matricula || !nombre) return;

    onAdd({ matricula, nombre });

    limpiarCampos();
    onDismiss();
  };

  const limpiarCampos = () => {
    setMatricula('');
    setNombre('');
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

        <View style={styles.buttons}>
          <Button mode="contained" onPress={handleAdd}>
            Agregar
          </Button>

          <Button mode="outlined" onPress={handleCancel}>
            Cancelar
          </Button>
        </View>

      </Modal>
    </Portal>
  );
};

export default Agregar;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
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