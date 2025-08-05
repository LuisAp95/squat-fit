
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export const CourseCard = ({ course, isPurchased = false }) => {
  const router = useRouter();

  return (
    <Pressable 
      className="flex-row bg-white rounded-lg overflow-hidden mb-4" 
      onPress={() => router.push(`/course/${course.id}`)} // Navegación a detalle del curso
    >
      <Image source={{ uri: course.image }}  style={{ width: 100, height: 100, borderRadius: 5 }} />
      <View className="flex-1 p-3 justify-between">
        <View>
          <Text className="font-bold text-base text-red-squat">{course.title}</Text>
          <Text className="text-sm text-lisbon-brown mt-1">Por {course.author}</Text>
        </View>
        {isPurchased ? (
          <Text className="font-bold text-purple-squat-1">Adquirido</Text>
        ) : (
          <Text className="font-bold text-lg text-purple-squat-1">${course.price}</Text>
        )}
      </View>
    </Pressable>
  );
};
