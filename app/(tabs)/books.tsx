import { ScrollView, Text, View } from 'react-native';
import { BookCard } from '../components/BookCard';

// Datos simulados
const myBooks = [
  {
    id: '1',
    title: 'La Guía Completa de Nutrición',
    author: 'Laura Gómez',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Anatomía del Ejercicio',
    author: 'Dr. Juan Pérez',
    image: 'https://images.unsplash.com/photo-1599552683573-9dc48255fe85?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    title: 'Mentalidad de Campeón',
    author: 'Sofía Marín',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098&auto=format&fit=crop',
  },
];

const recommendedBooks = [
  {
    id: '4',
    title: 'Cocina Saludable para Atletas',
    author: 'Carlos Luna',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop',
    price: 19.99,
  },
  {
    id: '5',
    title: 'El Arte de la Meditación y el Deporte',
    author: 'Ana Torres',
    image: 'https://images.unsplash.com/photo-1475634293456-37a7b5f1a1ea?q=80&w=2070&auto=format&fit=crop',
    price: 15.99,
  },
];

export default function BooksScreen() {
  return (
    <ScrollView className="flex-1 bg-white pt-16">
      <View className="px-6">
        <Text className="text-3xl font-bold text-red-squat mb-6">Libros</Text>

        {/* Sección Mis Libros (Horizontal) */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-purple-squat-1 mb-3">Mis libros</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {myBooks.map(book => (
              <View key={book.id} className="mr-4">
                <BookCard book={book} variant="horizontal" />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Sección Recomendados (Vertical) */}
        <View>
          <Text className="text-xl font-bold text-purple-squat-1 mb-3">Recomendados para ti</Text>
          {recommendedBooks.map(book => (
            <BookCard key={book.id} book={book} variant="vertical" />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}