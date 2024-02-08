import { StatusBar } from 'expo-status-bar';
import { getDataHook } from './hooks'
import { StyleSheet, Text, View } from 'react-native';
import InputIDPatrimonio from './components/InputIdComponent';
import { useEffect, useState } from 'react';
import type { EquipamentoDetailsType } from './@types/equipamento_details.d';
import EquipamentoDisplayDetails from './components/EquipamentoDisplayDetails';

export default function App() {
  const [id, setId] = useState<number | undefined>(undefined);

  const [loadingState, toggleLoading] = useState<boolean>(true)

  const [equipamentoDetails, setEquipamentoDetails] = useState<EquipamentoDetailsType | undefined>(undefined);

  useEffect(() => {
    getDataHook({getId: id, setState: setEquipamentoDetails, setLoadingState:toggleLoading})
  }, [id]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>CONSULTA DE PATRIMONIO</Text>
      </View>
      <InputIDPatrimonio setStateProp={setId} />

      <EquipamentoDisplayDetails getInfoProp={equipamentoDetails} showSpinner={loadingState}/>

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
    marginTop: 50,
    marginBottom: 10,
    fontSize: 25,
  }
});
