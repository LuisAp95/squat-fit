import { Tabs } from 'expo-router';
import { SvgXml } from 'react-native-svg';
import { Text } from 'react-native';

// Contenido de los iconos SVG
const homeNormal = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="gray"/></svg>`;
const homeSelected = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#710a97"/></svg>`;
const coursesNormal = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="gray"/></svg>`;
const coursesSelected = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="#710a97"/></svg>`;
const booksNormal = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" fill="gray"/></svg>`;
const booksSelected = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" fill="#710a97"/></svg>`;
const adviceNormal = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="gray"/></svg>`;
const adviceSelected = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="#710a97"/></svg>`;
const profileNormal = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="gray"/></svg>`;
const profileSelected = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#710a97"/></svg>`;

// Componente reutilizable para el icono de la pestaña
function TabBarIcon({ focused, selectedIcon, normalIcon, label }) {
  return (
    <div style={{ alignItems: 'center', justifyContent: 'center' }}>
      <SvgXml xml={focused ? selectedIcon : normalIcon} width={24} height={24} />
      <Text style={{ color: focused ? '#710a97' : 'gray', fontSize: 10 }}>
        {label}
      </Text>
    </div>
  );
}

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 }
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} label="Inicio" normalIcon={homeNormal} selectedIcon={homeSelected} />
        }}
      />
      <Tabs.Screen 
        name="courses" 
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} label="Cursos" normalIcon={coursesNormal} selectedIcon={coursesSelected} />
        }}
      />
      <Tabs.Screen 
        name="books" 
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} label="Libros" normalIcon={booksNormal} selectedIcon={booksSelected} />
        }}
      />
      <Tabs.Screen 
        name="advice" 
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} label="Asesoría" normalIcon={adviceNormal} selectedIcon={adviceSelected} />
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} label="Perfil" normalIcon={profileNormal} selectedIcon={profileSelected} />
        }}
      />
    </Tabs>
  );
}