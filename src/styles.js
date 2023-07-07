import { StyleSheet, StatusBar } from "react-native";
export const styles = StyleSheet.create( {
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
    gap: 20
  },
  listContainer: {
    marginTop: 25
  },
  list: {
    gap: 15,
    paddingBottom: 20
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    paddingVertical: 20,
    gap: 10
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalDetailContainer: {
    paddingVertical: 20
  },
  modalDetailMessage: {
    fontSize: 14,
    color: '#212121'
  },
  selectedTask: {
    fontSize: 14,
    color: '#212121',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10
  },
  modalButtonContainer: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
} );