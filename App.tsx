/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

interface Symbols {
  baseChar: string;
  numRepeats: number;
}

const App = () => {
  const [syms, setNumSyms] = useState<Array<Symbols>>([
    {baseChar: '!', numRepeats: 1},
  ]);
  const [baseChar, setBaseChar] = useState<string>('');
  const [numRepeats, setNumRepeats] = useState<number>(0);

  const decre = () => {
    let res: Array<Symbols> = [];
    for (let i: number = 0; i < syms.length - 1; i++) {
      res.push(syms[i]);
    }
    setNumSyms(res);
    setBaseChar('');
    setNumRepeats(0);
  };

  const incre = () => {
    let res: Array<Symbols> = [];
    for (let i: number = 0; i < syms.length; i++) {
      res.push(syms[i]);
    }
    res.push({baseChar, numRepeats});
    setNumSyms(res);
    setBaseChar('');
    setNumRepeats(0);
  };

  const getSymsRepre = (): string => {
    let res: string = '';
    for (let i: number = 0; i < syms.length; i++) {
      for (let j: number = 0; j < syms[i].numRepeats; j++) {
        res += syms[i].baseChar;
      }
    }
    return res;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Hello world{getSymsRepre()}</Text>
          <TextInput
            onChangeText={(text: string) => setBaseChar(text)}
            placeholder="base character"
            value={baseChar}
          />
          <TextInput
            onChangeText={(text: number) => setNumRepeats(text)}
            placeholder="num repeats"
            value={numRepeats}
          />
          <Button onPress={() => incre()} title="Increment" />
          <Button onPress={() => decre()} title="Decrement" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
