import React, { useEffect, useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

import styles from "../Task/styles";

type Props = {
  task: any;
  onStatusChange: () => void;
  onRemove: () => void;
}

export default function Task({ task, onStatusChange, onRemove }: Props) {
  const [iconName, setIconName] = useState("");
  
  const [iconColor, setIconColor] = useState("");

  const [textColor, setTextColor] = useState("");

  const [textDecoration, setTextDecoration] = useState<any>();

  useEffect(() => {
    if(task.done) {
      setIconName("checkmark-circle");
      setIconColor("#8284FA");
      setTextColor("#808080");
      setTextDecoration("line-through");
    } else {
      setIconName("ellipse-outline");
      setIconColor("#4EA8DE");
      setTextColor("#F2F2F2");
      setTextDecoration("none");
    }
  }, [task.done]);
  

  return (
    <View style={styles.taskContainer}>

      <TouchableOpacity onPress={onStatusChange}>
        <Icon name={iconName} color={iconColor} style={styles.taskCheckIcon}/>
      </TouchableOpacity>
      
      <Text style={[{color: textColor}, {textDecorationLine: textDecoration}, styles.taskDescription]}>{task.description}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Icon name="trash-outline" style={styles.taskDeleteIcon}/>
      </TouchableOpacity>
    </View>
  )
}