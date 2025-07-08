import { View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function TextStlyeIcon() {
  return (
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <Feather name="bold" size={24} color="#666" />
        <Feather name="italic" size={24} color="#666" />
        <MaterialCommunityIcons name="format-underline" size={24} color="#666" />
        <Feather name="link" size={24} color="#666" />
        <MaterialCommunityIcons name="link-off" size={24} color="#666" />
      </View>
  );
}

export default TextStlyeIcon;
