import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  authorAvatar: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  authorInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  repoInfo: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  orgAvatar: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  orgInfo: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  mb5: {
    marginBottom: 5,
  },
});
