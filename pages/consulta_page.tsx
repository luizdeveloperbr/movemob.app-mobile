import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { getEquipamentoInfo } from "../hooks";
import { EquipamentoDetailsType } from "../@types/equipamento_details.d";
import { StatusBar } from "expo-status-bar";
import IdInputComponent from "../components/InputIdComponent";
import EquipamentoDisplayDetails from "../components/EquipamentoDisplayDetails";

export default function ConsultaPage() {
    const [id, setId] = useState<number | undefined>(undefined);
    const [erro, setErro] = useState<string | undefined>(undefined)
    const [loadingState, setLoadingState] = useState<boolean>(false)

    const [equipamentoDetails, setEquipamentoDetails] = useState<EquipamentoDetailsType | undefined>(undefined);

    useEffect(() => {
        setErro(undefined)
        setLoadingState(true)
        async function getadata() {
            try {
                const info: EquipamentoDetailsType = await getEquipamentoInfo(id)
                setEquipamentoDetails(info)
                setLoadingState(false)
            } catch (error) {
                setErro(error as string)
                setEquipamentoDetails(undefined)
                setLoadingState(false)
            }
        }
        getadata()
    }, [id]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Numero do Patrimônio</Text>
            </View>
            <IdInputComponent setIdProp={setId} />

            <View style={StyleSheet.compose(devStyle.border, {
                backgroundColor: 'honeydew',
                width: '100%',
                elevation: 4,
                height: 180,
                padding: 16,
                marginTop: 5
            })} >{
                    loadingState ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}><ActivityIndicator size={"large"} /></View> :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>{erro ? <Text style={{fontSize: 18}}>{erro}</Text> : <EquipamentoDisplayDetails getInfoProp={equipamentoDetails} />}</View>
                }
            </View>
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

const devStyle = StyleSheet.create({
    border: {
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4
    }
})