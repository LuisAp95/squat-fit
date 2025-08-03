
import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { AdvisorCard } from '../components/AdvisorCard'; // Asegúrate de tener este componente creado

// Datos simulados
const availableAdvisors = [
  {
    id: '1',
    name: 'Sofía Marín',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Carlos Luna',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  },
];

const myCoach = {
  id: '1',
  name: 'Sofía Marín',
  image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop',
  description: 'Entrenadora personal certificada con 5 años de experiencia en entrenamiento de fuerza y nutrición deportiva.',
};

// Vista para cuando el usuario ya tiene un coach
const MyCoachView = ({ coach }) => (
  <View>
    <Text className="text-xl font-bold text-lisbon-brown mb-3">Mi Coach</Text>
    <View className="bg-gray-100 rounded-xl p-4">
      <Image source={{ uri: coach.image }} className="w-full h-64 rounded-lg" />
      <Text className="text-2xl font-bold mt-4">{coach.name}</Text>
      <Text className="text-base text-silver-gray mt-2">{coach.description}</Text>
      <Pressable className="bg-purple-squat-1 h-12 rounded-lg justify-center items-center mt-4">
        <Text className="text-white font-bold">Ver plan</Text>
      </Pressable>
      <Pressable className="bg-blue-squat-2 h-12 rounded-lg justify-center items-center mt-2">
        <Text className="text-white font-bold">Abrir chat</Text>
      </Pressable>
    </View>
  </View>
);

// Vista para cuando el usuario necesita elegir un coach
const AdvisorListView = ({ advisors }) => (
  <View>
    <Text className="text-xl font-bold text-lisbon-brown mb-3">Asesores Disponibles</Text>
    {advisors.map(advisor => (
      <AdvisorCard key={advisor.id} advisor={advisor} />
    ))}
  </View>
);

export default function AdviceScreen() {
  const [hasCoach, setHasCoach] = useState(false);

  return (
    <ScrollView className="flex-1 bg-white pt-16">
      <View className="px-6">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-3xl font-bold text-lisbon-brown">Asesoría</Text>
          {/* Interruptor para simular el cambio de estado */}
          <Switch value={hasCoach} onValueChange={setHasCoach} />
        </View>

        {hasCoach ? <MyCoachView coach={myCoach} /> : <AdvisorListView advisors={availableAdvisors} />}
      </View>
    </ScrollView>
  );
}
