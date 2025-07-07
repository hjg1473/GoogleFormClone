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
    overflow: 'hidden',
  },
  titleContent: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    borderRightWidth: 1,
    borderRightColor: '#D3D3D3',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    
  },
  content: {
    // flex: 1,
    height: 100,
    backgroundColor: 'white',
    margin: 5,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    borderRightWidth: 1,
    borderRightColor: '#D3D3D3',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',    
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
  topAccent: {
    position: 'absolute',
    zIndex: 1,
    height: 5,
    width: 369,
    right: 0,
    backgroundColor: 'green',
    borderTopLeftRadius: 20,    
    borderTopRightRadius: 20, 
  },      
  leftAccent: {
    position: 'absolute',
    zIndex: 0,
    height: 139,
    width: 5,
    left: 0,
    backgroundColor: '#4285F4', 
    borderTopLeftRadius: 20,   
    borderBottomLeftRadius: 20, 
  },  

});

export default styles;
