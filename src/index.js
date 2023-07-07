import { View, Text, TextInput, Button, SafeAreaView, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { ExpenseInput, ExpenseItem } from './components';

export default function App () {
  const [expenseList, setExpenseList] = useState( [] )
  const [isVisible, setIsVisible] = useState( false )
  const [selectedExpense, setSelectedExpense] = useState( null )
  const [borderColor, setBorderColor] = useState( '#C5C9E7' )
  const [expenseCategory, setExpenseCategory] = useState( '' )
  const [expensePrice, setExpensePrice] = useState( '' )
  const [expenseDesc, setExpenseDesc] = useState( '' )

  const onHandlerFocus = () => {
    setBorderColor( '#424D9E' )
  }

  const onHandlerBlur = () => {
    setBorderColor( '#C5C9E7' )
  }

  const onHandlerChangeTextCategory = ( text ) => {
    setExpenseCategory( text )
  }
  const onHandlerChangeTextPrice = ( text ) => {
    setExpensePrice( text )
  }
  const onHandlerChangeTextDesc = ( text ) => {
    setExpenseDesc( text )
  }

  const onHandlerCreateTask = () => {
    setExpenseList( [
      ...expenseList,
      {
        id: Date.now().toString(),
        category: expenseCategory,
        price: expensePrice,
        desc: expenseDesc
      }
    ] )

    setExpenseCategory( '' )
    setExpensePrice( '' )
    setExpenseDesc( '' )
  }

  const onHandlerModal = ( item ) => {
    setIsVisible( !isVisible )
    setSelectedExpense
      ( item )
  }

  const onHandlerDelete = ( id ) => {
    setExpenseList( prevs => prevs.filter( expense => expense.id !== id ) )
    setIsVisible( !isVisible )
  }

  const renderItem = ( { item } ) => {
    return (
      <ExpenseItem item={item} onPressItem={onHandlerModal} />
    )
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ExpenseInput
          borderColor={borderColor}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeTextCategory}
          onHandlerFocus={onHandlerFocus}
          expense={expenseCategory}
          placeholderText={'category'}
        />
        <ExpenseInput
          borderColor={borderColor}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeTextPrice}
          onHandlerFocus={onHandlerFocus}
          expense={expensePrice}
          placeholderText={'price'}
        />
        <ExpenseInput
          borderColor={borderColor}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeTextDesc}
          onHandlerFocus={onHandlerFocus}
          expense={expenseDesc}
          placeholderText={'description'}
        />
        <Button disabled={expenseCategory.length === 0 || expensePrice.length === 0 || expenseDesc.length === 0} title='create expense' color='#424D9E' onPress={onHandlerCreateTask} />
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.list}
          data={expenseList}
          renderItem={renderItem}
          alwaysBounceVertical={false}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal
        visible={isVisible} animationType='slide'
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Expense detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item</Text>
            <Text style={styles.selectedExpense}>{selectedExpense?.value}</Text>
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
              onPress={() => onHandlerDelete( selectedExpense?.id )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}