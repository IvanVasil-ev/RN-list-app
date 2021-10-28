import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  itemWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 5,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
  },
  bold: {
    fontWeight: 'bold',
  },
});
