import React from 'react';
import {  useRefinementList } from 'react-instantsearch-hooks';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ModalFilter = ({isVisibleModal, setIsVisibleModal, clearFilter}) => {

  const {items, refine, toggleShowMore} = useRefinementList({attribute: 'marca', showMore: true, limit: 2});

  return (
    <Modal
        animationType="slide"
        visible={isVisibleModal}
        onRequestClose={() => {
          setIsVisibleModal(!isVisibleModal);
        }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Filtro</Text>
            <TouchableOpacity onPress={() => setIsVisibleModal(!isVisibleModal)} style={styles.btnClose}>
              <Text style={styles.close}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            {items.map((item)=> {
              return (<TouchableOpacity style={styles.contentFilter} key={item.label} onPress={()=>{
                 refine(item.value)
                 setIsVisibleModal(false)
                 }}>
                <Text >{item.value}</Text>
                <Text >{item.count}</Text>
              </TouchableOpacity>)
            })}
          </View>
          <View>
            <TouchableOpacity onPress={()=> toggleShowMore()}>
              <Text>mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  close: {
    fontSize: 16,
    fontWeight: '400'
  },
  title: {
    fontSize: 20,
    fontWeight: '400'
  },
  contentFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12
  }
});

export default ModalFilter