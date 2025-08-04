/**
 * AgrApps App - React Native 0.80.2
 * Aplicación moderna con las últimas versiones
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
  };

  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  const handlePress = () => {
    Alert.alert(
      '¡Funciona! 🎉',
      'Tu app React Native 0.80.2 está funcionando perfectamente en iOS y Android',
      [{ text: 'Genial!' }]
    );
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={[styles.title, textStyle]}>
            🚀 AgrApps
          </Text>
          <Text style={[styles.subtitle, textStyle]}>
            React Native 0.80.2 + TypeScript
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, textStyle]}>
            ✅ Configuración Completada
          </Text>
          <Text style={[styles.sectionDescription, textStyle]}>
            • React Native 0.80.2 (Nueva Arquitectura){'\n'}
            • React 19.1.0{'\n'}
            • TypeScript 5.0.4{'\n'}
            • iOS y Android configurados{'\n'}
            • CocoaPods instalado{'\n'}
            • Gradle configurado
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Probar Funcionalidad</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, textStyle]}>
            🎯 Próximos Pasos
          </Text>
          <Text style={[styles.sectionDescription, textStyle]}>
            • Agregar navegación{'\n'}
            • Configurar estado global{'\n'}
            • Agregar componentes UI{'\n'}
            • Integrar APIs{'\n'}
            • Testing y CI/CD
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  section: {
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
