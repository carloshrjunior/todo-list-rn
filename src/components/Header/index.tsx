import React from 'react';
import { Image, View } from 'react-native';

import styles from './styles';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../../../assets/img/logo.png")}  
        style={styles.headerImage}
      />
    </View>
  )
}