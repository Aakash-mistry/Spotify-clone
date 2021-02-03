import React from 'react'
import { Text } from 'react-native'

const TitleComponent: React.FC = ({ children }) => {
     return (
          <Text style={{ fontSize: 16, color: '#fff', marginTop: 15, padding: 10, marginBottom: 0 }}>
               {children}
          </Text>
     )
}

export default TitleComponent
