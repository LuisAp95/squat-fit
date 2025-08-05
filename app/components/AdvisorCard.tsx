
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

export const AdvisorCard = ({ advisor }) => {
  return (
    <View className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <Image source={{ uri: advisor.image }} style={{ width: "100%", height: 320, }} className="w-full h-80" />
      <View className="p-4">
        <Text className="text-xl font-bold text-center text-lisbon-brown">{advisor.name}</Text>
        <Pressable className="bg-blue-squat-2 h-12 rounded-lg justify-center items-center mt-4">
          <Text className="text-white font-bold text-base">Seleccionar</Text>
        </Pressable>
      </View>
    </View>
  );
};
