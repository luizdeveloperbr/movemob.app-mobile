import { StatusBar } from 'expo-status-bar';
import { NativeSyntheticEvent, Pressable, StyleSheet, Text, TextInput, TextInputSubmitEditingEventData, View, TouchableNativeFeedback } from 'react-native';
// import InputPatrimonioId from './components/InputPatrimonioIdComponent';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [state, setState] = useState<number | undefined>(0)
  const [equipamento,setEquipamento] = useState(
 {
     "id": 0,
     "codigo": 0,
     "filial_id": "",
     "descricao": "",
     "valor": "",
     "setor_id": 0,
     "movimentacao_id": 0,
     "imagens": [],
     "setor": {
       "id": 0,
       "descricao": "",
       "responsavel": "",
       "filial": 0
     },
     "movimentacao": {
       "status": "0"
     },
     "filial": {
       "descricao": ""
     }
   }
  )
  const inputRef = useRef<TextInput | null>(null)


  useEffect(()=>{
    function getData(){

      fetch(`${process.env.BACKEND_URL}/equipamento/${state}`)
      .then(data => {
        return data.json()
      })
      .then(eq => {
        setEquipamento(eq)
      }).catch(e => console.log(e))
    };
    getData()

  },[state])
  

  // 
  function handleInputId(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) {
    const id = e.nativeEvent.text.trim().replaceAll(/[a-zA-Z-., ]/g, "")
    setState(Number(id))
  };

  function doClear() {
    setState(0)
    inputRef.current?.clear()
  };
  // 
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>CONSULTA DE PATRIMONIO</Text>
      </View>
      {/* <InputPatrimonioId /> */}
      {/* inicio */}
      <View style={
        {
          height: 85,
        }}
      >
        <TextInput
          ref={comp => inputRef.current = comp}
          inlineImageLeft='search_icon'
          inlineImagePadding={20}
          style={styles.input_id}
          onSubmitEditing={(e) => handleInputId(e)}
          inputMode='numeric'
        />
        {/* <Text>{this.state.id}</Text> */}

        <View style={{
          flex: 1,
          gap: 10,
          flexDirection: 'row',
          justifyContent: 'center'
        }}>

          <Pressable
            style={styles.button_clear}
            onPress={() => doClear()}>
            <Text>Limpar</Text>
          </Pressable>
          <Pressable
            style={styles.button_focus}
            onPress={() => inputRef.current?.focus()}
          >
            <Text>Buscar</Text>
          </Pressable>
        </View>
      </View>
      {/* fim */}

      <View style={StyleSheet.compose(devStyle.border, {
        backgroundColor: 'honeydew',
        width: '100%',
        elevation: 4,
        height: 180,
        padding: 16
      })}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'right',
        }}>Patrimonio: # {equipamento.id}</Text>
        <Text style={{ paddingBottom: 8 }}>{equipamento.descricao}</Text>
        <View style={{
          minHeight: 30,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Text style={StyleSheet.compose(devStyle.border, { width: '40%', textAlign: 'center' })}>{equipamento.filial.descricao} - {equipamento.filial_id}</Text>
          <Text style={StyleSheet.compose(devStyle.border, { width: '60%', textAlign: 'center', backgroundColor: '#fff' })}>{equipamento.setor.descricao}</Text>
        </View>
        <View style={{
          minHeight: 30,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Text style={StyleSheet.compose(devStyle.border, { paddingTop: 10, height: '100%', width: '33%', textAlign: 'center' })}>Status: #2 ({equipamento.movimentacao.status})</Text>
          <Text style={StyleSheet.compose(devStyle.border, { height: '100%', width: '33%', textAlign: 'center' })}>Codigo: {equipamento.codigo}</Text>
          <Text style={StyleSheet.compose(devStyle.border, { paddingTop: 10, height: '100%', width: '33%', textAlign: 'center' })}>Valor: {equipamento.valor}</Text>
        </View>
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
  input_id: {
    borderColor: '#000',
    borderWidth: 2,
    borderStyle: 'solid',
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
    minWidth: 300,
    paddingLeft: 8
  },
  button_clear: {
    height: 38,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: 'red',
    borderRadius: 8
  },
  button_focus: {
    height: 38,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: 'lime',
    borderRadius: 8
  }
});

const devStyle = StyleSheet.create({
  border: {
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4
  }
})