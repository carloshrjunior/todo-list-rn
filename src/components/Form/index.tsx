import React from "react";

import { KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

import styles from "../Form/styles";

type Props = {
  task: string;
  setTask: any;
  onTaskAdd: () => void;
}

export default function Form({ task, setTask, onTaskAdd}: Props) {
  return (
    <KeyboardAvoidingView style={styles.formContainer}> 
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTask}
          value={task}
          selectTextOnFocus={true}
        />

        <TouchableOpacity
          onPress={onTaskAdd}
          style={styles.button}>
          <Icon name='add-circle-outline' style={styles.buttonIcon}/>
        </TouchableOpacity>
      </KeyboardAvoidingView>
  )
}