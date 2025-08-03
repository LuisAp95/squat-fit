
import { View, Text, TextInput, Pressable, Platform, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { Image } from 'expo-image';
import { SvgXml } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { useState } from 'react';

// Contenido de los archivos SVG (reutilizado de la pantalla de login)
const googleSvg = `
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.7082 12.0622H28.5V12H15V18H23.4772C22.2405 21.4927 18.9172 24 15 24C10.0297 24 6 19.9702 6 15C6 10.0297 10.0297 6 15 6C17.2942 6 19.3815 6.8655 20.9707 8.27925L25.2135 4.0365C22.5345 1.53975 18.951 0 15 0C6.71625 0 0 6.71625 0 15C0 23.2837 6.71625 30 15 30C23.2837 30 30 23.2837 30 15C30 13.9942 29.8965 13.0125 29.7082 12.0622Z" fill="#FFC107"/>
<path d="M1.72949 8.01825L6.65774 11.6325C7.99124 8.331 11.2207 6 15 6C17.2942 6 19.3815 6.8655 20.9707 8.27925L25.2135 4.0365C22.5345 1.53975 18.951 0 15 0C9.23849 0 4.24199 3.25275 1.72949 8.01825Z" fill="#FF3D00"/>
<path d="M15 30C18.8745 30 22.395 28.5173 25.0567 26.106L20.4142 22.1775C18.8576 23.3613 16.9556 24.0016 15 24C11.0985 24 7.78574 21.5123 6.53774 18.0405L1.64624 21.8093C4.12874 26.667 9.17024 30 15 30Z" fill="#4CAF50"/>
<path d="M29.7082 12.0623H28.5V12H15V18H23.4772C22.8857 19.6623 21.82 21.1149 20.412 22.1782L20.4142 22.1767L25.0567 26.1052C24.7282 26.4037 30 22.5 30 15C30 13.9942 29.8965 13.0125 29.7082 12.0623Z" fill="#1976D2"/>
</svg>
`;

const appleSvg = `
<svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0713 15.854C21.0569 13.3949 22.171 11.5416 24.4209 10.1751C23.1626 8.37227 21.2588 7.38072 18.7493 7.18962C16.3732 7.00213 13.7735 8.57419 12.8216 8.57419C11.8156 8.57419 9.51525 7.25453 7.70523 7.25453C3.9698 7.31222 0 10.2328 0 16.1749C0 17.9308 0.320901 19.7444 0.962703 21.6121C1.82084 24.0712 4.91447 30.0962 8.14151 29.9988C9.82894 29.9592 11.0224 28.8018 13.2182 28.8018C15.3492 28.8018 16.4525 29.9988 18.3346 29.9988C21.5905 29.952 24.3885 24.475 25.2033 22.0088C20.8369 19.9499 21.0713 15.9801 21.0713 15.854ZM17.2818 4.85678C19.1098 2.68619 18.944 0.710309 18.8899 0C17.2746 0.0937464 15.4069 1.09972 14.3432 2.33645C13.1714 3.66332 12.4827 5.30388 12.6305 7.15357C14.3756 7.28698 15.9693 6.38917 17.2818 4.85678Z" fill="black"/>
</svg>
`;

export default function Register() {
  const { signIn } = useAuth(); // Usaremos signIn para simular el registro exitoso
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Validación de contraseña (simplificada)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y símbolos.');
      return;
    }
    setError('');
    // Si la validación es exitosa, llamamos a signIn para simular el flujo
    signIn();
  };

  return (
    <ScrollView className="flex-1 bg-white" contentContainerStyle={{ padding: 16, justifyContent: 'center' }}>
      <View className="items-center mt-10">
        <Image
          source={require('../../../assets/images/logo.png')}
          className="w-32 h-32"
          contentFit="contain"
        />
      </View>

      <Text className="text-2xl font-bold mt-5">Registro</Text>

      <TextInput
        className="bg-input rounded-lg h-12 px-4 mt-7"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className="bg-input rounded-lg h-12 px-4 mt-5"
        placeholder="Usuario"
        autoCapitalize="none"
      />

      <TextInput
        className="bg-input rounded-lg h-12 px-4 mt-5"
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text className="text-red-500 text-xs mt-1">{error}</Text> : null}

      <Pressable
        className="bg-gradient-to-r from-purple-squat-1 to-purple-squat-2 rounded-lg h-12 justify-center items-center mt-8"
        onPress={handleRegister}
      >
        <Text className="text-white font-bold text-base">Registrarse</Text>
      </Pressable>

      <View className="flex-row items-center my-10">
        <View className="flex-1 h-px bg-black" />
        <Text className="mx-2 text-sm">O</Text>
        <View className="flex-1 h-px bg-black" />
      </View>

      <Text className="text-center text-sm text-dim-gray">Regístrate con tus cuentas de</Text>

      <View className="flex-row justify-center items-center mt-5">
        <Pressable onPress={signIn}>
          <SvgXml xml={googleSvg} width={30} height={30} />
        </Pressable>
        {Platform.OS === 'ios' && (
          <Pressable onPress={signIn} className="ml-5">
            <SvgXml xml={appleSvg} width={26} height={30} />
          </Pressable>
        )}
      </View>

      <Pressable className="mt-12 mb-5" onPress={() => router.push('/login')}>
        <Text className="text-center text-dim-gray">
          ¿Ya tienes una cuenta?{' '}
          <Text className="text-orange font-bold">Inicia sesión.</Text>
        </Text>
      </Pressable>
    </ScrollView>
  );
}
