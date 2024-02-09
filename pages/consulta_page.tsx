import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { getDataHook } from "../hooks";
import { EquipamentoDetailsType } from "../@types/equipamento_details.d";
import { StatusBar } from "expo-status-bar";
import ComponentInputID from "../components/InputIdComponent";
import EquipamentoDisplayDetails from "../components/EquipamentoDisplayDetails";

export default function ConsultaPage() {
    const [id, setId] = useState<number | undefined>(undefined);

    const [loadingState, toggleLoading] = useState<boolean>(true)

    const [equipamentoDetails, setEquipamentoDetails] = useState<EquipamentoDetailsType | undefined>(undefined);

    useEffect(() => {
        getDataHook({ getId: id, setState: setEquipamentoDetails, setLoadingState: toggleLoading })
    }, [id]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Numero do Patrimônio</Text>
            </View>
            <ComponentInputID setStateProp={setId} />

            <EquipamentoDisplayDetails getInfoProp={equipamentoDetails} showSpinner={loadingState} />

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
        marginTop: 50,
        marginBottom: 10,
        fontSize: 25,
    }
});
