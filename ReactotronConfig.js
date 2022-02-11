import AsyncStorage from '@react-native-async-storage/async-storage'
import Reactotron, { trackGlobalErrors, asyncStorage, networking } from 'reactotron-react-native'

Reactotron
    .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure() // controls connection & communication settings
    .use(trackGlobalErrors())
    .use(asyncStorage())
    .use(networking())
    .useReactNative() // add all built-in react native plugins
    .connect() // let's connect!
