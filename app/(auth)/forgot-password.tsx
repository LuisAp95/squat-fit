
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

export default function ForgotPassword() {
  const router = useRouter();

  const handleRequestCode = () => {
    // Aquí iría la lógica para llamar a la API y solicitar el código.
    // Por ahora, simularemos que fue exitoso y mostraremos una alerta.
    Alert.alert(
      'Código Solicitado',
      'Se ha enviado un código de recuperación a tu email (simulado).',
      [
        {
          text: 'OK',
          // Navegaríamos a la pantalla para introducir el código,
          // pero como no la hemos creado, volvemos al login.
          onPress: () => router.push('/login'), 
        },
      ]
    );
  };

  return (
    <View className="flex-1 bg-white p-6 justify-center">
      <Pressable onPress={() => router.back()} className="absolute top-16 left-6 z-10">
        {/* Aquí podrías poner un icono de flecha hacia atrás */}
        <Text className="text-blue-500 text-lg">Volver</Text>
      </Pressable>

      <View className="items-center">
        <Image
          source={require('../../../assets/images/logo.png')}
          className="w-32 h-32"
          contentFit="contain"
        />
      </View>

      <Text className="text-2xl font-bold mt-5">Recuperar contraseña</Text>
      <Text className="text-sm text-dim-gray mt-2">Ingresa tu email para recibir un código de recuperación.</Text>

      <TextInput
        className="bg-input rounded-lg h-12 px-4 mt-7"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Pressable
        className="bg-gradient-to-r from-purple-squat-1 to-purple-squat-2 rounded-lg h-12 justify-center items-center mt-8"
        onPress={handleRequestCode}
      >
        <Text className="text-white font-bold text-base">Solicitar código</Text>
      </Pressable>
    </View>
  );
}
