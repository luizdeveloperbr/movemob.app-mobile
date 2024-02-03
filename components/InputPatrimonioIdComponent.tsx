import Reac, { Component } from 'react'
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native'


export default class InputPatrimonioId extends Component {
  inputRef: any;

  state = {
    id: 0
  };

  handleInputId(e: any) {
    this.setState({ id: e.nativeEvent.text })
  };

  doClear() {
    this.setState({ id: 0 })
    this.inputRef.clear()
  };

  render(): Reac.ReactNode {
    return <View style={
      {
        height: 85,
      }}
    >
      <TextInput
        ref={comp => this.inputRef = comp}
        style={styles.input_id}
        onSubmitEditing={(e) => this.handleInputId(e)}
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
          onPress={() => this.doClear()}>
          <Text>Limpar</Text>
        </Pressable>

        <Pressable
          style={styles.button_focus}
          onPress={() => this.inputRef.focus()}>
          <Text>Buscar</Text>
        </Pressable>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
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
})