import React from "react";

import { Text, View } from "react-native";

import styles from "../TasksStatus/styles";

type Props = {
  statusTitle: string;
  statusQuantity: number;
  titleColor: string;
}

export default function TasksStatus({ statusTitle, statusQuantity, titleColor } : Props) {
  return (
    <>
      <Text style={[styles.filterText, {color: titleColor }]}>{statusTitle}</Text>
      <View style={styles.filterTasksNumberContainer}>
        <Text style={styles.filterTasksNumber}>{statusQuantity}</Text>
      </View>
    </>
  )
}