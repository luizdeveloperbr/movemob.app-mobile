import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {

  const [patrimonioID, setPatrimonioID] = useState("")
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>CONSULTA DE PATRIMONIO</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputSearchID}
          onChangeText={setPatrimonioID}
          // onSubmitEditing={(e,s) => setPatrimonioID(s)}
          inputMode='numeric'
        />
      </View>
      <View style={styles.buttonsSearch}>
        <Pressable style={styles.buttonSearchClean} onPress={() => { }}>
          <Text>Limpar</Text>
        </Pressable>
        <Pressable style={styles.buttonSearchGo} onPress={() => { console.log(patrimonioID) }}>
          <Text>Buscar</Text>
        </Pressable>
      </View>
      <View>
        <Text> Find: {patrimonioID}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center'
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 25,
  },
  inputSearchID: {
    borderColor: '#000',
    borderWidth: 2,
    borderStyle: 'solid',
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
    minWidth: 300,
    paddingLeft: 8
  },
  buttonsSearch: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonSearchClean: {
    height: 38,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: 'red',
    borderRadius: 8
  },
  buttonSearchGo: {
    height: 38,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: 'lime',
    borderRadius: 8
  }
});
