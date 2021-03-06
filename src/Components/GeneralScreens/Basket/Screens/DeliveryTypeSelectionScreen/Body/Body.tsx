// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { RadioButton, TextInput } from "react-native-paper"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  savedAdresses: Array<string>
  addAdressThunkCreator: (adress: string) => void
  setDeliveryTypeActionCreator: (orderDeliveryType: {
    adress: string
    comment: string
  }) => void
}

const Body: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()
  const [checkedValue, setCheckedValue] = useState(
    t("OrderingProcess.DeliveryTypeSelectionScreen.ЗабратьСамому") as string
  )
  const [comment, setComment] = useState(null as string | null)

  useEffect(() => {
    props.navigation.addListener("blur", () => {
      setComment(null)
    })
  }, [])

  const SelectionList = [
    {
      title: t("OrderingProcess.DeliveryTypeSelectionScreen.ЗабратьСамому"),
      description: "ул. Засумская, 12",
    },
    ...props.savedAdresses,
  ]

  const saveInfoAndRedirect = () => {
    props.setDeliveryTypeActionCreator({
      adress: checkedValue,
      comment: comment as string,
    })
    props.navigation.navigate("ConfirmAdressScreen", {
      adress: checkedValue,
    })
  }

  return (
    <View style={styles.container}>
      {SelectionList.map((selection: any) => {
        return (
          <View style={styles.item_wrap}>
            <RadioButton
              uncheckedColor="silver"
              value={selection.title}
              status={
                checkedValue === selection.title ? "checked" : "unchecked"
              }
              color="#96A637"
              onPress={() => {
                setCheckedValue(selection.title)
              }}
            />
            <View style={styles.text_wrap}>
              <Text size={16} weight="bold" style={styles.item_text}>
                {selection.title}
              </Text>
              {selection.description ? (
                <Text style={styles.item_text}>{selection.description}</Text>
              ) : null}
            </View>
          </View>
        )
      })}
      <View style={styles.btns_wrap}>
        <TouchableOpacity>
          <Text style={styles.btn_text} weight="bold" size={16}>
            {t("OrderingProcess.DeliveryTypeSelectionScreen.ВыбратьНаКарте")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ManualDeliveryScreen", {
              saveFunction: props.addAdressThunkCreator,
            })
          }
        >
          <Text style={styles.btn_text} weight="bold" size={16}>
            {t(
              "OrderingProcess.DeliveryTypeSelectionScreen.ВвестеАдресВручную"
            )}
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        multiline
        placeholder={t(
          "OrderingProcess.DeliveryTypeSelectionScreen.Комментарии"
        )}
        style={styles.input}
        theme={{ colors: { primary: "#1A1824" } }}
        value={comment as string}
        onChangeText={(text: string) => setComment(text)}
      />

      <Button
        onPress={saveInfoAndRedirect}
        text={t("GeneralPhrases.Продолжить")}
        buttonStyle={{
          marginTop: 36,
          width: 315,
          height: 50,
          backgroundColor: "#96A637",
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          color: "white",
          fontSize: 16,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
  },

  item_wrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  text_wrap: {
    marginLeft: 13,
    marginVertical: 12.5,
  },

  item_text: {
    letterSpacing: 0.3,
    lineHeight: 20,
  },

  btns_wrap: {
    marginHorizontal: 50,
    marginTop: 10,
  },

  btn_text: {
    color: "#96A637",
    marginBottom: 6,
    marginTop: 5,
  },

  input: {
    backgroundColor: "white",
    marginTop: 30,
    height: 40,
  },
})

export default Body
