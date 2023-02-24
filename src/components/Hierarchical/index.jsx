import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


export const Hierarchical = ({items, refine}) => {

  return (
    <View style={{
      paddingHorizontal: 16
    }}>
        { !!items && items.map((item, index)=> {
          return (
            <View key={index}>
                <TouchableOpacity onPress={()=> refine(item.value)}>
                <Text >{item.label}</Text>
                </TouchableOpacity>

                {
                  !!item.data && item.data.map((item, index) => {
                    return (
                      <View 
                      key={index}
                      style={{
                        paddingHorizontal: 16
                      }}>
                        <TouchableOpacity onPress={()=> refine(item.value)}>
                          <Text >{item.label}</Text>
                        </TouchableOpacity>

                        {
                              !!item.data && item.data.map((item, index) => {
                                return (
                                  <View 
                                  key={index}
                                  style={{
                                    paddingHorizontal: 16
                                  }}>
                                    <TouchableOpacity onPress={()=> refine(item.value)}>
                                      <Text >{item.label}</Text>
                                    </TouchableOpacity>
                                  </View>
                                )
                              })
                            }
                      </View>
                    )
                  })
                }
            </View>  
          )
    })
  }
    </View>
  )
}