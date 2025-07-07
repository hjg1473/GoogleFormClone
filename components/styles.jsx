import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    margin: 5,
    marginTop: 10,
    height: 100,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  titleContent: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#0055FF',
    borderTopWidth: 5,
    borderTopColor: 'green',
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  content: {
    // flex: 1,
    height: 100,
    backgroundColor: 'white',
    margin: 5,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#0055FF',
    // borderTopWidth: 10,
    // borderTopColor: 'green',
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  input: {
    fontSize: 20,
  },
  inputBox: {
    flex: 1,
    borderLeftWidth: 10,
    margin: 12,
    backgroundColor: 'white',
    borderLeftColor: 'blue',
    borderTopWidth: 10,
    borderTopColor: '#8b00ff',
    borderRadius: 10,
  },
  borderContainer: {
    backgroundColor: 'grey',
    height: 1,
    width: '95%',
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#e2ede0',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
  item: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  pressedItem: {
    backgroundColor: '#e0e0e0', // 눌렀을 때 회색 배경
  },
  title: {
    fontSize: 16,
  },  
});

export default styles;
