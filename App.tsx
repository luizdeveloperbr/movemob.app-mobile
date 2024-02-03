import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputPatrimonioId from './components/InputPatrimonioIdComponent';

export default function App() {

  const equipamento = {
    "id": 12345,
    "codigo": 78945566,
    "filial_id": 159,
    "descricao": "computador bitway",
    "valor": "999.88",
    "setor_id": 1,
    "movimentacao_id": 2,
    "imagens": [],
    "setor": {
      "id": 1,
      "descricao": "almoxarifado",
      "responsavel": "A",
      "filial": 159
    },
    "movimentacao": {
      "status": "confirmado"
    },
    "filial": {
      "descricao": "escritorio"
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>CONSULTA DE PATRIMONIO</Text>
      </View>
      <InputPatrimonioId />
      <View style={StyleSheet.compose(devStyle.border, {
        backgroundColor: 'honeydew',
        width: '100%',
        elevation: 4
      })}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'right',
          paddingRight: 8
        }}>Patrimonio: #{equipamento.id}</Text>
        <Text>{equipamento.descricao}</Text>
        <View>
          <Text>{equipamento.filial.descricao} - {equipamento.filial_id}</Text>
          <Text>{equipamento.setor.descricao}</Text>
        </View>
        <View>
          <Text>Status: #2 ({equipamento.movimentacao.status})</Text>
          <Text>Codigo: {equipamento.codigo}</Text>
          <Text>Valor: {equipamento.valor}</Text>
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
  }
});

const devStyle = StyleSheet.create({
  border: {
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'dashed'
  }
})