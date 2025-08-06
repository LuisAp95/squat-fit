
import { useRouter, useSegments } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Define el tipo para el contexto de autenticación
interface AuthContextType {
  user: any; // Puedes reemplazar 'any' con un tipo de usuario más específico
  signIn: () => void;
  signOut: () => void;
}

// Crea el contexto de autenticación
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook para usar el contexto de autenticación en otros componentes
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Componente proveedor de autenticación
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null); // Simula el estado del usuario
  const [isLoading, setIsLoading] = useState(true); // Estado de carga inicial
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    // Delay inicial para asegurar que el router esté montado
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoading) return; // No navegar si aún está cargando

    const inAuthGroup = segments[0] === '(auth)';

    // Si el usuario no está autenticado y no está en el grupo de autenticación,
    // redirige a la pantalla de inicio de sesión.
    if (!user && !inAuthGroup) {
      router.replace('/login');
    } 
    // Si el usuario está autenticado y está en el grupo de autenticación,
    // redirige a la pantalla de inicio.
    else if (user && inAuthGroup) {
      router.replace('/home');
    }
  }, [user, segments, router, isLoading]);

  const signIn = () => {
    // Lógica de inicio de sesión (simulada)
    setUser({ id: '1', name: 'Hamlet' });
  };

  const signOut = () => {
    // Lógica de cierre de sesión
    setUser(null);
  };

  // Mostrar loading mientras se inicializa
  if (isLoading) {
    return (
      <AuthContext.Provider value={{ user, signIn, signOut }}>
        {children}
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Exportación por defecto para evitar que Expo Router lo trate como ruta
export default AuthProvider;
