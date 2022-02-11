/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Reactotron from 'reactotron-react-native'
import { clientAnimes } from './client'
import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getAnimes = async () => {
    try {
      const { data } = await clientAnimes.getTest()
      Reactotron.display({
        name: 'Animes',
        preview: 'Animes',
        value: data,
        important: true
      })
    } catch (error) {
      Reactotron.error(error)
    }
  }

  const getAnimesError = async () => {
    try {
      await clientAnimes.getTestError()
    } catch (error) {
      Reactotron.error(error)
    }
  }

  const testErrorVariable = () => {
    const a = variError
  }

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('test', 'value set data')
      setTimeout(async () => {
        await AsyncStorage.removeItem('test')
      }, 1000);
    } catch (error) {
      Reactotron.error(error?.message)
    }
  }

  const numArr = [1, 2, 4, 5, 6, 7, 8, 10]

  const getMaxValueA = () => {
    const max = numArr.reduce(function (p, v) {
      return (p > v ? p : v);
    });

    Reactotron.display({
      name: 'Function: A',
      preview: 'MAX?',
      value: max,
      important: true
    })
  }

  const getMaxValueB = () => {
    const max = Math.max(...numArr)

    Reactotron.display({
      name: 'Function: B',
      preview: 'MAX?',
      value: max,
      important: true
    })
  }

  const slowFunction = async () => {
    const bench = Reactotron.benchmark("MAX Function benchmark")

    // Code that does thing A
    bench.step("Function A", getMaxValueA())

    // Code that does thing B
    bench.stop("Function B", getMaxValueB())
  }

  useEffect(() => {
    // Reactotron.log('hello rendering world')
    // Reactotron.display({
    //   name: 'ORANGE',
    //   preview: 'Who?',
    //   value: 'Orange you glad you don\'t know me in real life?',
    //   important: true
    // })
    // getAnimes()
    // getAnimesError()
    // storeData()
    // testErrorVariable()
    // Reactotron.onCustomCommand({
    //   command: "test2",
    //   handler: () => console.log("This is an example 2"),

    //   // Optional settings
    //   title: "A thing", // This shows on the button
    //   description: "The desc", // This shows below the button
    // })
    slowFunction()
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
