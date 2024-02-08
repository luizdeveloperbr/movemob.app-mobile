import { useRef } from 'react'
import { StyleSheet, View, TextInput, Text, Pressable, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native'


export default function ComponentInputID({ setStateProp }: { setStateProp: React.Dispatch<React.SetStateAction<number | undefined>> }) {

  const inputRef = useRef<TextInput | null>(null);

  function handleInputId(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) {
    const id: string = e.nativeEvent.text.trim().replaceAll(/[a-zA-Z-., ]/g, "")
    setStateProp(Number(id))
  };
  return (
    <View style={
      {
        height: 85,
      }}
    >
      <TextInput
        ref={comp => inputRef.current = comp}
        style={UI_TextIput.id}
        onSubmitEditing={(e) => handleInputId(e)}
        inputMode='numeric'
      />
      <View style={{
        flex: 1,
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'center'
      }}>

        <Pressable
          style={StyleSheet.compose(UI_Button.base,{backgroundColor: 'red'})}
          onPress={() => inputRef.current?.clear()}>
          <Text>Limpar</Text>
        </Pressable>
        <Pressable
          style={StyleSheet.compose(UI_Button.base,{backgroundColor: 'lime'})}
          onPress={() => inputRef.current?.focus()}
        >
          <Text>Buscar</Text>
        </Pressable>
      </View>
    </View>
  )
}

const UI_Button = StyleSheet.create({
  base: {
    height: 38,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 8
  }
})

const UI_TextIput = StyleSheet.create({
  id: {
    borderColor: '#000',
    borderWidth: 2,
    borderStyle: 'solid',
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
    minWidth: 300,
    paddingLeft: 8
  }
})