import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <FontAwesome size={28} name="home" />,
        }}
      />
      <Tabs.Screen
        name="data"
        options={{
          title: 'Data',
          tabBarIcon: () => <FontAwesome size={28} name="cog" />,
        }}
      />
      <Tabs.Screen
        name="data/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
