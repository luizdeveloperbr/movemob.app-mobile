import { StatusBar } from 'expo-status-bar';
import { getDataHook } from './hooks'
import { NativeSyntheticEvent, Pressable, StyleSheet, Text, TextInput, TextInputSubmitEditingEventData, View, TouchableNativeFeedback } from 'react-native';
// import InputPatrimonioId from './components/InputPatrimonioIdComponent';
import { useEffect, useRef, useState } from 'react';

type EquipamentoDetailsType = {
  id: number
  descricao: string
  codigo: number
  filial_id: number
  valor: number
  filial: {
    descricao: string
  }
  setor: {
    descricao: string
  }
  movimentacao: {
    status: string
  }

}

export default function App() {
  const [id, setId] = useState<number | undefined>(undefined)
  const [equipamentoDetails, setEquipamentoDetails] = useState<EquipamentoDetailsType | undefined>(undefined)
  const inputRef = useRef<TextInput | null>(null)


  useEffect(() => {
    getDataHook(id, setEquipamentoDetails)
  }, [id])


  function handleInputId(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) {
    const id = e.nativeEvent.text.trim().replaceAll(/[a-zA-Z-., ]/g, "")
    setId(Number(id))
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
            onPress={() => inputRef.current?.clear()}>
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
      {equipamentoDetails ?
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
          }}>Patrimonio: # {equipamentoDetails?.id}</Text>
          <Text style={{ paddingBottom: 8 }}>{equipamentoDetails?.descricao}</Text>
          <View style={{
            minHeight: 30,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={StyleSheet.compose(devStyle.border, { width: '40%', textAlign: 'center' })}>{equipamentoDetails?.filial.descricao} - {equipamentoDetails?.filial_id}</Text>
            <Text style={StyleSheet.compose(devStyle.border, { width: '60%', textAlign: 'center', backgroundColor: '#fff' })}>{equipamentoDetails?.setor.descricao}</Text>
          </View>
          <View style={{
            minHeight: 30,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={StyleSheet.compose(devStyle.border, { paddingTop: 10, height: '100%', width: '33%', textAlign: 'center' })}>Status: #2 ({equipamentoDetails?.movimentacao.status})</Text>
            <Text style={StyleSheet.compose(devStyle.border, { paddingTop: 10, height: '100%', width: '33%', textAlign: 'center' })}>Codigo: {equipamentoDetails?.codigo}</Text>
            <Text style={StyleSheet.compose(devStyle.border, { paddingTop: 10, height: '100%', width: '33%', textAlign: 'center' })}>Valor: {equipamentoDetails?.valor}</Text>
          </View>
        </View> : <Text>"Digite o Patrimonio"</Text>}
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