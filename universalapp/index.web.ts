import { AppRegistry } from 'react-native';
import app from './app.json';
import App from './App';

AppRegistry.registerComponent(app.expo.name, () => App);

AppRegistry.runApplication(app.expo.name, {
	initialProps: {},
	rootTag: document.getElementById('app-root'),
});
