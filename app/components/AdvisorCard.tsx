
import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';

export const AdvisorCard = ({ advisor }) => {
  return (
    <View className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <Image source={{ uri: advisor.image }} className="w-full h-80" />
      <View className="p-4">
        <Text className="text-xl font-bold text-center text-lisbon-brown">{advisor.name}</Text>
        <Pressable className="bg-blue-squat-2 h-12 rounded-lg justify-center items-center mt-4">
          <Text className="text-white font-bold text-base">Seleccionar</Text>
        </Pressable>
      </View>
    </View>
  );
};
