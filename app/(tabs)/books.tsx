
import { ScrollView, Text, View } from 'react-native';
import { BookCard } from '../components/BookCard';

// Datos simulados
const myBooks = [
  {
    id: '1',
    title: 'La Guía Completa de Nutrición',
    author: 'Laura Gómez',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Anatomía del Ejercicio',
    author: 'Dr. Juan Pérez',
    image: 'https://images.unsplash.com/photo-1584735935639-b54921539c91?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Mentalidad de Campeón',
    author: 'Sofía Marín',
    image: 'https://images.unsplash.com/photo-1598625472494-c8661469a8da?q=80&w=1974&auto=format&fit=crop',
  },
];

const recommendedBooks = [
  {
    id: '4',
    title: 'Cocina Saludable para Atletas',
    author: 'Carlos Luna',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17021?q=80&w=2053&auto=format&fit=crop',
    price: 19.99,
  },
  {
    id: '5',
    title: 'El Arte de la Meditación y el Deporte',
    author: 'Ana Torres',
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=1974&auto=format&fit=crop',
    price: 15.99,
  },
];

export default function BooksScreen() {
  return (
    <ScrollView className="flex-1 bg-white pt-16">
      <View className="px-6">
        <Text className="text-3xl font-bold text-lisbon-brown mb-6">Libros</Text>

        {/* Sección Mis Libros (Horizontal) */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-lisbon-brown mb-3">Mis libros</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {myBooks.map(book => (
              <BookCard key={book.id} book={book} variant="horizontal" />
            ))}
          </ScrollView>
        </View>

        {/* Sección Recomendados (Vertical) */}
        <View>
          <Text className="text-xl font-bold text-lisbon-brown mb-3">Recomendados para ti</Text>
          {recommendedBooks.map(book => (
            <BookCard key={book.id} book={book} variant="vertical" />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
