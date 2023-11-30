import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  darkAppContainer: {
    backgroundColor: "#242629", //'#2C3335',
    flex: 1
  },
  darkFontColor: {
    color: '#EAF0F1',
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  btn: {
    height: 40,
    borderRadius: 10
  },
  linkText: {
    textDecorationLine: 'underline',
    paddingHorizontal: 50,
    paddingVertical: 15
  },
  textInputPlaceholder: {
    color: '#fff'
  },
  textInputValue: {
    color: '#000'
  },
  negativeTxt: {
    color: "#FF362E"
  },
  positiveTxt: {
      color: "#2ecc72"
  },
  settledUpTxt: {
    color: "#DAE0E2",
  },
  btnYellow: {
    backgroundColor: "#F3B431"
  },
  btnBlue: {
    backgroundColor: '#0A79DF'
  },
  btnGreen: {
    backgroundColor: "#218F76",
  },
  btnRed: {
    backgroundColor: '#FF362E',
  }
});

export {styles};
