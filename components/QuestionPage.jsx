import {
  View,
  TextInput,
  Text,
  ScrollView,
  FlatList,
  Button,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import React, { useEffect, useRef, useState } from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import CardForm from './CardForm';
import CardForm_v2 from './CardForm_v2';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a1f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Item',
  },  
  {
    id: '58694a2f-3da1-471f-bd96-145571e29d72',
    title: 'Fifth Item',
  },  
  {
    id: '58694a3f-3da1-471f-bd96-145571e29d72',
    title: 'Sixth Item',
  },  
  {
    id: '58694a4f-3da1-471f-bd96-145571e29d72',
    title: 'Seventh Item',
  },  
];

const Item = ({ title, onCopy, onDelete }) => (
  <View>
    <CardForm_v2 />
    <Menu>
      <MenuTrigger text="Select action" />
      <MenuOptions>
        <MenuOption onSelect={onCopy} text="Save" />
        <MenuOption onSelect={onDelete}>
          <Text style={{ color: 'red' }}>Delete</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);

function QuestionPage() {
  const [list, setList] = React.useState(DATA);
  const [text, setText] = React.useState('제목 없는 설문지');
  const [content, setContent] = React.useState('');

  const copyItem = copiedId => {
    const newItem = { id: Math.random().toString(), title: 'copy item' };
    setList(prevData => [...prevData, newItem]);
  };
  const removeItem = idToRemove => {
    setList(prevData => prevData.filter(item => item.id !== idToRemove));
  };

  return (
      <MenuProvider>
        <ScrollView
          style={styles.scrollView}
        >   
            <View style={styles.header}>
              <ImageBackground
                source={require('../assets/image.png')}
                style={{flex: 1}}
              >
              </ImageBackground>
            </View>
            
            <CardForm text={text} setText={setText} content={content} setContent={setContent}/>

            {list.map(item => (
              <Item
                key={item.id}
                title={item.title}
                onCopy={() => copyItem(item.id)}
                onDelete={() => removeItem(item.id)}
              />
            ))}
        </ScrollView>
      </MenuProvider>
  );
}

export default QuestionPage;
