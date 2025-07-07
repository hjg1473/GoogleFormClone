import * as React from 'react';
import 'react-native-gesture-handler';
import MyPage from './components/MyPage';
import QuestionPage from './components/QuestionPage';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // 또는 FontAwesome, Ionicons 등

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

function QuestionScreen() {
  return <QuestionPage />;
}
function AnswerScreen() {
  return <MyPage title={'Profile Screen'} />;
}
function SettingsScreen() {
  return <MyPage title={'Contact Screen'} />;
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#008000',
        tabBarInactiveTintColor: '#000000',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarIndicatorStyle: { backgroundColor: '#008000' },
      }}
    >
      <Tab.Screen
        name="질문"
        component={QuestionScreen}
        options={{
          tabBarLabel: '질문',
        }}
      />
      <Tab.Screen name="응답" component={AnswerScreen} />
      <Tab.Screen name="설정" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{ flex: 0.05, flexDirection: 'row', padding: 10}}>
      <Icon name="file-document" size={30} color="#7f59bf" />
      <Text style={{marginTop: 5, marginLeft: 10}}>연락처 정보</Text>
    </View>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}