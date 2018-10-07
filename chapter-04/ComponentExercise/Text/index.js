import React from 'react'
import { Text } from "react-native"
import styles from "./style"

export const Strong = ({children}) =>
    <Text style={styles.bold}>
        {children}
    </Text>

export const Em = ({children}) =>
    <Text style={styles.italic}>
        {children}
    </Text>
