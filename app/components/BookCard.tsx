
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export const BookCard = ({ book, variant = 'vertical' }) => {
  const router = useRouter();

  if (variant === 'horizontal') {
    return (
      <Pressable 
        className="w-36 mr-4" 
        onPress={() => router.push(`/book/${book.id}`)}
      >
        <Image source={{ uri: book.image }} style={{ width: 144, height: 208, borderRadius: 8 }} className="w-36 h-52 rounded-lg" />
        <Text className="font-bold text-sm mt-2 text-lisbon-brown" numberOfLines={1}>{book.title}</Text>
        <Text className="text-xs text-white">{book.author}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable 
      className="flex-row bg-white rounded-lg overflow-hidden mb-4" 
      onPress={() => router.push(`/book/${book.id}`)}
    >
      <Image source={{ uri: book.image }} style={{ width: 96, height: 144, borderRadius: 8 }} className="w-24 h-36" />
      <View className="flex-1 p-3 justify-between">
        <View>
          <Text className="font-bold text-base text-red-squat">{book.title}</Text>
          <Text className="text-sm text-black mt-1">Por {book.author}</Text>
        </View>
        <Text className="font-bold text-lg text-purple-squat-1">${book.price}</Text>
      </View>
    </Pressable>
  );
};
