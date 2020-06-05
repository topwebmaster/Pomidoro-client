// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Button from "../Shared/Components/Button/Button"
import MenuSection from "../Shared/Sections/MenuSection/MenuSection"
import SalesSection from "../Shared/Sections/SalesSection/SalesSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const MenuScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Button
        buttonStyle={{ backgroundColor: "#96A637", borderRadius: 20 }}
        textStyle={{ color: "white" }}
        text={"Узнать, где мой заказ"}
      />
      <MenuSection
        scroll={false}
        titleText="Меню"
        titleStyle={{ fontSize: 30 }}
        containerStyle={{ marginTop: 20 }}
      />
      <SalesSection
        titleText={"Активные акции"}
        titleStyle={{
          fontSize: 30,
        }}
        scroll_horizontal={false}
        imageStyle={{
          width: 314,
          height: 220,
          marginRight: 16,
          marginBottom: 20,
        }}
      />
      <Button
        buttonStyle={{
          backgroundColor: "#EAEAEB",
          borderRadius: 20,
          marginTop: 20,
          marginBottom: 30,
        }}
        textStyle={{ color: "black" }}
        text={"Посмотреть все акции"}
      />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
})

export default MenuScreen