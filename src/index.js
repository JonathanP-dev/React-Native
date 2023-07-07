import { View, Text, TextInput, Button, SafeAreaView, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { InputTask, TaskItem } from './components';

export default function App () {
  const [taskList, setTaskList] = useState( [] )
  const [isVisible, setIsVisible] = useState( false )
  const [selectedTask, setSelectedTask] = useState( null )
  const [borderColor, setBorderColor] = useState( '#C5C9E7' )
  const [task, setTask] = useState( '' )

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
      <TaskItem item={item} onPressItem={onHandlerModal} />
    )
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask
          borderColor={borderColor}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeText}
          onHandlerCreateTask={onHandlerCreateTask}
          onHandlerFocus={onHandlerFocus}
          task={task}
        />
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