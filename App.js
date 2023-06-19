import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App () {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.formContainer}>
        <View style={styles.formInputs}>
          <Text style={styles.text}>User: </Text><TextInput placeholder='Pepito' style={styles.input}></TextInput>
        </View>
        <View style={styles.formInputs}>
          <Text style={styles.text}>Password: </Text><TextInput placeholder='Perez' style={styles.input}></TextInput>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={{ textAlign: 'center', color: 'red' }}>Agregando cosas a mi celu</Text>
      </View >
    </>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  input: {
    paddingLeft: 10,
    width: 250,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black'
  },
  formContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  formInputs: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
} );
