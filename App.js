import { View, Text, TextInput, Button, SafeAreaView, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App () {
  const [borderColor, setBorderColor] = useState( '#C5C9E7' )
  const [task, setTask] = useState( '' )
  const [taskList, setTaskList] = useState( [] )
  const [isVisible, setIsVisible] = useState( false )
  const [selectedTask, setSelectedTask] = useState( null )

  const onHandlerFocus = () => {
    setBorderColor( '#424D9E' )
  }

  const onHandlerBlur = () => {
    setBorderColor( '#C5C9E7' )
  }

  const onHandlerChangeText = ( text ) => {
    setTask( text )
  }

  const onHandlerCreateTask = () => {
    setTaskList( [
      ...taskList,
      {
        id: Date.now().toString(),
        value: task
      }
    ] )

    setTask( '' )
  }

  const onHandlerModal = ( item ) => {
    setIsVisible( !isVisible )
    setSelectedTask( item )
  }

  const onHandlerDelete = ( id ) => {
    setTaskList( prevs => prevs.filter( task => task.id !== id ) )
    setIsVisible( !isVisible )
  }

  const renderItem = ( { item } ) => {
    return (
      <TouchableOpacity onPress={() => onHandlerModal( item )} style={styles.containerItem}>
        <Text style={styles.itemList}>{item.value}</Text>
        <Text style={styles.icon}>X</Text>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
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
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.list}
          data={taskList}
          renderItem={renderItem}
          alwaysBounceVertical={false}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal
        visible={isVisible} animationType='slide'
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
              title='Cancel'
              color='#424d9e'
              onPress={onHandlerModal}
            />
            <Button
              title='Delete'
              color='red'
              onPress={() => onHandlerDelete( selectedTask?.id )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}