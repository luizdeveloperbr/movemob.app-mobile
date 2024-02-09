import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConsultaPage from './pages/consulta_page';
import CameraPage from './pages/camera_page';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name='consulta' options={{title: "Consulta de Patrimônio"}} component={ConsultaPage} />
        <Stack.Screen name='camera' options={{title: "Aponte para o Cod. de Barras"}} component={CameraPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}