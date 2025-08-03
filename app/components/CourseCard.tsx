
import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

export const CourseCard = ({ course, isPurchased = false }) => {
  const router = useRouter();

  return (
    <Pressable 
      className="flex-row bg-gray-100 rounded-lg overflow-hidden mb-4" 
      onPress={() => router.push(`/course/${course.id}`)} // Navegación a detalle del curso
    >
      <Image source={{ uri: course.image }} className="w-28 h-28" />
      <View className="flex-1 p-3 justify-between">
        <View>
          <Text className="font-bold text-base text-lisbon-brown">{course.title}</Text>
          <Text className="text-sm text-silver-gray mt-1">Por {course.author}</Text>
        </View>
        {isPurchased ? (
          <Text className="font-bold text-purple-squat-1">Adquirido</Text>
        ) : (
          <Text className="font-bold text-lg text-orange">${course.price}</Text>
        )}
      </View>
    </Pressable>
  );
};
