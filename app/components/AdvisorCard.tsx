
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

export const AdvisorCard = ({ advisor }) => {
  return (
    <View className="bg-red-squat rounded-xl shadow-md overflow-hidden mb-6">
      <Image source={{ uri: advisor.image }} style={{ width: "100%", height: 320, }} className="w-full h-80" />
      <View className="p-4">
        <Text className="text-xl font-bold text-center text-white">{advisor.name}</Text>
        <Pressable className="bg-purple-squat-1 h-12 rounded-lg justify-center items-center mt-4">
          <Text className="text-white font-bold text-base">Seleccionar</Text>
        </Pressable>
      </View>
    </View>
  );
};
