// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const DeliveryTimeSelectionScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Footer navigation={props.navigation} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
})

export default DeliveryTimeSelectionScreen