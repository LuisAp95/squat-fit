
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { CourseCard } from '../components/CourseCard';

// Datos simulados
const myFirstCourse = {
  id: '1',
  title: 'Entrenamiento de Fuerza para Principiantes',
  author: 'Ana Torres',
  image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
  price: 49.99,
};

const recommendedCourses = [
  {
    id: '2',
    title: 'Yoga para Flexibilidad Total',
    author: 'Carlos Luna',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop',
    price: 29.99,
  },
  {
    id: '3',
    title: 'Nutrición Deportiva Avanzada',
    author: 'Sofía Marín',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop',
    price: 79.99,
  },
  {
    id: '4',
    title: 'Cardio de Alta Intensidad (HIIT)',
    author: 'David Reyes',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    price: 39.99,
  },
];

export default function CoursesScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-red-squat pt-16">
      <View className="px-6">
        <Text className="text-3xl font-bold text-lisbon-brown mb-6">Cursos</Text>

        {/* Sección Mis Cursos */}
        <View className="mb-8">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-xl font-bold text-lisbon-brown">Mis cursos</Text>
            <Pressable onPress={() => alert('Navegar a la lista completa de mis cursos')}>
              <Text className="text-purple-squat-1 font-semibold">Ver todos</Text>
            </Pressable>
          </View>
          <Pressable onPress={() => router.push(`/course/${myFirstCourse.id}`)}>
            <Image 
              source={{ uri: myFirstCourse.image }}
              className="w-full h-48 rounded-xl"
            />
            <Text className="text-lg font-bold mt-2">{myFirstCourse.title}</Text>
          </Pressable>
        </View>

        {/* Sección Recomendados */}
        <View>
          <Text className="text-xl font-bold text-lisbon-brown mb-3">Recomendados para ti</Text>
          {recommendedCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
