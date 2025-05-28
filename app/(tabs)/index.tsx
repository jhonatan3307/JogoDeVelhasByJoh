import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Index() {
  const cell = () => {
  return (
      <TouchableOpacity style={styles.square}>
      <text style={styles.symbol}/>X</text>
      </TouchableOpacity>
  );
  };
  return (
    <><view style={styles.container}>
      <text style={styles.title} Jogo De Velhas /></text>
      <text style={styles.status} Vencedor text>

        <view style={styles.board}>
        <view style={styles.row}>
            <TouchableOpacity>
              <text>
                X
              </text>
            </TouchableOpacity>
          </view>
        </view>
        <view style={styles.row}>
          <view>
            <TouchableOpacity>
              <text>
                X
              </text>
            </TouchableOpacity>
          </view>
        </view>
        <view style={styles.row}>
          <view>
            <TouchableOpacity>
              <text>
                X
              </text>
            </TouchableOpacity>
          </view>
        </view>
        <TouchableOpacity style={styles.ResetButton}>
        <Text><RESETAR></RESETAR></Text>
        </TouchableOpacity>
      </view></>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row'
  },
  square: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  symbol: {
    fontSize: 36,
    fontWeight: "bold",
  },
  ResetButton: {
    padding:10,
    backgroundColor: '#FFFFFF'
    fontSize:16,
  }
})