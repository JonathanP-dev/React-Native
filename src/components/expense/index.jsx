import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

const ExpenseItem = ({onPressItem, item}) => {
  return(
    <TouchableOpacity onPress={() => onPressItem( item )} style={styles.containerItem}>
      <View>
        <Text style={styles.itemList}>Category: {item.category}</Text>
        <Text style={styles.itemList}>Price: {item.price}</Text>
        <Text style={styles.itemList}>Description: {item.desc}</Text>
      </View>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  )
}

export default ExpenseItem