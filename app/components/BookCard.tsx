
import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

export const BookCard = ({ book, variant = 'vertical' }) => {
  const router = useRouter();

  if (variant === 'horizontal') {
    return (
      <Pressable 
        className="w-36 mr-4" 
        onPress={() => router.push(`/book/${book.id}`)}
      >
        <Image source={{ uri: book.image }} className="w-36 h-52 rounded-lg" />
        <Text className="font-bold text-sm mt-2 text-lisbon-brown" numberOfLines={1}>{book.title}</Text>
        <Text className="text-xs text-silver-gray">{book.author}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable 
      className="flex-row bg-gray-100 rounded-lg overflow-hidden mb-4" 
      onPress={() => router.push(`/book/${book.id}`)}
    >
      <Image source={{ uri: book.image }} className="w-24 h-36" />
      <View className="flex-1 p-3 justify-between">
        <View>
          <Text className="font-bold text-base text-lisbon-brown">{book.title}</Text>
          <Text className="text-sm text-silver-gray mt-1">Por {book.author}</Text>
        </View>
        <Text className="font-bold text-lg text-orange">${book.price}</Text>
      </View>
    </Pressable>
  );
};
