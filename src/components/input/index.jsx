import {View, TextInput} from 'react-native'
import { styles } from './styles';

const InputTask = ({placeholderText, expense, borderColor, onHandlerFocus,
  onHandlerBlur,
  onHandlerChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor: borderColor }]}
        placeholder={placeholderText}
        autoCapitalize='none'
        autoCorrect={false}
        cursorColor='#424D9E'
        selectionColor='#D4D7ED'
        placeholderTextColor='#C5C9E7'
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur}
        value={expense}
        onChangeText={onHandlerChangeText}
      />
    </View>
  )
}

export default InputTask