import React from 'react'
import { View, Text } from 'react-native'


export const BreadCrumb = ({breadCrumbitem, breadCrumbAction}) => {


  const value = breadCrumbitem.length > 0 ? breadCrumbitem.reduce((acc, curr)=> {
   return curr !== 'null' ? acc + ' > ' + curr.label : null
  }, '') : null

  return (
    <View>
        <Text> {!!value && value.slice(3)} </Text>
    </View>
  )
}