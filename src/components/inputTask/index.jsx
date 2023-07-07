import {View, TextInput, Button} from 'react-native'
import { styles } from './styles';

const InputTask = ({borderColor, onHandlerFocus,
  onHandlerBlur, task,
  onHandlerChangeText,
  onHandlerCreateTask}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor: borderColor }]}
        placeholder='add new task'
        autoCapitalize='none'
        autoCorrect={false}
        cursorColor='#424D9E'
        selectionColor='#D4D7ED'
        placeholderTextColor='#C5C9E7'
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur}
        value={task}
        onChangeText={onHandlerChangeText}
      />
      <Button disabled={task.length === 0} title='Create' color='#424D9E' onPress={onHandlerCreateTask} />
    </View>
  )
}

export default InputTask