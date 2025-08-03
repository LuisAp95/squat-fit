
import { View, Text, Pressable } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useRouter } from 'expo-router';

// Icono de flecha (chevron)
const chevronIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="#C7C7C7"/></svg>`;

export const ListItem = ({ icon, title, href, isLast = false, onPress = null }) => {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <Pressable 
      className={`flex-row items-center py-4 ${!isLast ? 'border-b border-gray-200' : ''}`}
      onPress={handlePress}
    >
      <SvgXml xml={icon} width={24} height={24} />
      <Text className="flex-1 ml-4 text-base text-lisbon-brown">{title}</Text>
      <SvgXml xml={chevronIcon} width={24} height={24} />
    </Pressable>
  );
};
