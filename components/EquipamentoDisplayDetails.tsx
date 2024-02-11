import React from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { EquipamentoDetailsType } from "../@types/equipamento_details.d"

const EquipamentoDisplayDetalComponent = ({ getInfoProp }: { getInfoProp: EquipamentoDetailsType | undefined}) => {
  return (
    <View style={StyleSheet.compose(devStyle.border, {
      backgroundColor: 'honeydew',
      width: '100%',
      elevation: 4,
      height: 180,
      padding: 16,
      marginTop: 5
    })} >
      <Text style={{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'right',
      }}>Patrimonio:  {getInfoProp?.id ?? <ActivityIndicator size={"large"} />}</Text>
      <Text style={{ paddingBottom: 8 }}>{getInfoProp?.descricao ?? ""}</Text>
      <View style={{
        minHeight: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Text style={StyleSheet.compose(devStyle.border, { width: '40%', textAlign: 'center' })}>{getInfoProp?.filial.descricao ?? ""} - {getInfoProp?.filial_id ?? ""}</Text>
        <Text style={StyleSheet.compose(devStyle.border, { width: '60%', textAlign: 'center', backgroundColor: '#fff' })}>{getInfoProp?.setor.descricao ?? ""}</Text>
      </View>
      <View style={{
        minHeight: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Text style={StyleSheet.compose(devStyle.border, { paddingTop: 10, height: '100%', width: '33%', textAlign: 'center' })}>Status: #2 ({getInfoProp?.movimentacao.status ?? ""})</Text>
        <Text style={StyleSheet.compose(devStyle.border, { paddingTop: 10, height: '100%', width: '33%', textAlign: 'center' })}>Codigo: {getInfoProp?.codigo ?? ""}</Text>
        <Text style={StyleSheet.compose(devStyle.border, { paddingTop: 10, height: '100%', width: '33%', textAlign: 'center' })}>Valor: {getInfoProp?.valor ?? ""}</Text>
      </View>
    </View>
  )
}

const devStyle = StyleSheet.create({
  border: {
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4
  }
})

export default EquipamentoDisplayDetalComponent