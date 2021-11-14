import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,
    top: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  badgeText: {
    color: 'white',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    flex: 1,
    fontSize: 18,
    marginBottom: 3,
  },
  text: {
    color: 'grey',
  }
})
export default styles;
