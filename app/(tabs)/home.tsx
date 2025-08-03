import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useAuth } from '../context/AuthContext';

// Icono de campana para notificaciones (SVG simple)
const notificationIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="#101822"/></svg>`;

// Componente de Cabecera
const HomeHeader = ({ name }) => (
  <View className="flex-row justify-between items-center mb-6">
    <View>
      <Text className="text-2xl font-bold text-lisbon-brown">Hola, {name}</Text>
      <Text className="text-base text-silver-gray">¡Bienvenido de vuelta!</Text>
    </View>
    <Pressable onPress={() => alert('Navegar a notificaciones')}>
      <SvgXml xml={notificationIcon} width={24} height={24} />
    </Pressable>
  </View>
);

// Tarjeta para completar el perfil
const ProfileCompletionCard = () => {
  const router = useRouter();
  return (
    <View className="bg-purple-squat-1 p-5 rounded-xl mb-6">
      <Text className="text-white text-lg font-bold">Completa tu Perfil</Text>
      <Text className="text-white mt-1 mb-4">Añade tus datos para obtener un plan de comidas y entrenamientos personalizado.</Text>
      <Pressable 
        className="bg-orange w-32 h-10 rounded-lg justify-center items-center"
        onPress={() => router.push('/profile') // Asumiendo que la edición del perfil está en la pestaña de perfil
      }>
        <Text className="text-white font-bold">Completar</Text>
      </Pressable>
    </View>
  );
};

// Tarjeta de Estadísticas
const StatsCard = ({ title, value, unit, color }) => (
  <View className={`flex-1 p-4 rounded-xl`} style={{ backgroundColor: color }}>
    <Text className="text-white font-bold text-lg">{title}</Text>
    <Text className="text-white text-3xl font-bold mt-2">{value}</Text>
    <Text className="text-white">{unit}</Text>
  </View>
);

export default function Home() {
  const { user } = useAuth();

  return (
    <ScrollView className="flex-1 bg-white p-6 pt-16">
      <HomeHeader name={user?.name || 'Usuario'} />
      
      <ProfileCompletionCard />

      <View className="flex-row space-x-4 mb-6">
        <StatsCard title="Calorías Hoy" value="1,250" unit="Kcal" color="#fe5802" />
        <StatsCard title="Entrenamientos" value="3" unit="Esta semana" color="#1a1aec" />
      </View>

      <Text className="text-xl font-bold text-lisbon-brown mb-4">Feed de Actividad</Text>
      
      {/* Placeholder para el feed */}
      <View className="bg-gray-100 p-4 rounded-lg items-center justify-center h-48">
        <Text className="text-silver-gray">El feed de publicaciones aparecerá aquí.</Text>
      </View>

    </ScrollView>
  );
}