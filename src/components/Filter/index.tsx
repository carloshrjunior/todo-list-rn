import React, { useState } from "react";

import { View } from "react-native";

import TasksStatus from "../TasksStatus";

import styles from "./styles";

type Props = {
  createdTasksNumber: number;
  doneTasksNumber: number;
}

export default function Filter({ createdTasksNumber, doneTasksNumber }: Props) {

  return (
    <View style={styles.filterContainer}>
      
      <View style={styles.filterInfoContainer}>
        <TasksStatus statusTitle="Criadas" statusQuantity={createdTasksNumber} titleColor="#4EA8DE" />
      </View>

      <View style={styles.filterInfoContainer}>
        <TasksStatus statusTitle="Concluídas" statusQuantity={doneTasksNumber} titleColor="#8284FA" />
      </View>

    </View>
  )
}