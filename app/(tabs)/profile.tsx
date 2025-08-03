
import { Image } from 'expo-image';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { ListItem } from '../components/ListItem';
import { useAuth } from '../context/AuthContext';

// Iconos para la lista
const coursesIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="#101822"/></svg>`;
const booksIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" fill="#101822"/></svg>`;
const settingsIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" fill="#101822"/></svg>`;
const logoutIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" fill="#DC3545"/></svg>`;

const ProfileStat = ({ value, label }) => (
  <View className="items-center">
    <Text className="text-2xl font-bold text-lisbon-brown">{value}</Text>
    <Text className="text-sm text-silver-gray">{label}</Text>
  </View>
);

export default function ProfileScreen() {
  const { user, signOut } = useAuth();

  return (
    <ScrollView className="flex-1 bg-white pt-16">
      {/* Cabecera */}
      <View className="items-center px-6">
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' }} 
          className="w-24 h-24 rounded-full"
        />
        <Text className="text-2xl font-bold mt-4">{user?.name || 'Johan'}</Text>
        <Text className="text-base text-silver-gray">johan@example.com</Text>
      </View>

      {/* Estadísticas */}
      <View className="flex-row justify-around my-6 p-4 bg-gray-100 rounded-xl mx-6">
        <ProfileStat value="12" label="Posts" />
        <ProfileStat value="1.2K" label="Seguidores" />
        <ProfileStat value="340" label="Siguiendo" />
      </View>

      {/* Botones de Acción */}
      <View className="flex-row px-6 space-x-4 mb-6">
        <Pressable className="flex-1 bg-orange h-12 rounded-lg justify-center items-center">
          <Text className="text-white font-bold">Editar Perfil</Text>
        </Pressable>
        <Pressable className="flex-1 bg-gray-200 h-12 rounded-lg justify-center items-center">
          <Text className="text-lisbon-brown font-bold">Compartir</Text>
        </Pressable>
      </View>

      {/* Lista de Opciones */}
      <View className="px-6">
        <ListItem icon={coursesIcon} title="Mis Cursos" href="/courses" />
        <ListItem icon={booksIcon} title="Mis Libros" href="/books" />
        <ListItem icon={settingsIcon} title="Ajustes" href="/settings" />
        <ListItem icon={logoutIcon} title="Cerrar Sesión" onPress={signOut} isLast={true} />
      </View>
    </ScrollView>
  );
}
