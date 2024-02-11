import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { getDataHook } from "../hooks";
import { EquipamentoDetailsType } from "../@types/equipamento_details.d";
import { StatusBar } from "expo-status-bar";
import IdInputComponent from "../components/InputIdComponent";
import EquipamentoDisplayDetails from "../components/EquipamentoDisplayDetails";

export default function ConsultaPage() {
    const [id, setId] = useState<number | undefined>(undefined);

    // const [loadingState, toggleLoading] = useState<boolean>(false)

    const [equipamentoDetails, setEquipamentoDetails] = useState<EquipamentoDetailsType | undefined>(undefined);

    useEffect(() => {
        getDataHook({ getId: id, setState: setEquipamentoDetails, setLoadingState: false })
    }, [id]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Numero do Patrimônio</Text>
            </View>
            <IdInputComponent setIdProp={setId} />

            <EquipamentoDisplayDetails getInfoProp={equipamentoDetails} />

            <StatusBar style="auto" />
        </View>)
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
