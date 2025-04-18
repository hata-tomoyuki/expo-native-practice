import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      {/* <Tabs.Screen
        name="index"
        options={{
          title: 'index',
          tabBarIcon: () => <FontAwesome size={28} name="home" />,
        }}
      /> */}
      {/* <Tabs.Screen
        name="page1"
        options={{
          title: 'page1',
          tabBarIcon: () => <FontAwesome size={28} name="cog" />,
        }}
      /> */}
    </Tabs>
  );
}

