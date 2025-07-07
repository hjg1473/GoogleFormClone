import { View, Text } from 'react-native';

function MyPage({ title }) {
  // const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{title}</Text>
    </View>
  );
}

export default MyPage;
