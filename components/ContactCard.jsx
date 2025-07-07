import { View, TextInput, Text } from 'react-native';
import styles from './styles';

function ContactCard({text, setText, content, setContent}) {
  return (
    <View
        style={[
        styles.titleContent,
        { flexDirection: 'column', padding: 10 },
        ]}
    >
        <View style={[styles.topAccent]} />
        <View style={[styles.leftAccent]} />

        <TextInput
        style={[styles.input, { margin: 10 }]}
        keyboardType="default"
        value={text}
        onChangeText={setText}
        textAlign="left"
        />
        <View style={[styles.borderContainer]} />

        <TextInput
        style={[
            styles.input,
            { fontSize: 14, marginLeft: 10, marginTop: 10 },
        ]}
        onChangeText={setContent}
        value={content}
        placeholder="설문지 설명"
        keyboardType="default"
        textAlign="left"
        />
        <View style={[styles.borderContainer]} />
    </View>
  );
}

export default ContactCard;
