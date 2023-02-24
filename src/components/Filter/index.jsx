import React from 'react';
import {  useBreadcrumb, useHierarchicalMenu, useRefinementList } from 'react-instantsearch-hooks';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BreadCrumb } from '../BreadCrumb';
import { Hierarchical } from '../Hierarchical';

const ModalFilter = ({isVisibleModal, setIsVisibleModal, clearFilter}) => {

  const { items, refine } = useRefinementList({attribute: 'marca'});

  const { items: HierarItems, refine: HierarAction  } = useHierarchicalMenu({
    attributes: [
      'categories.lvl0',
      'categories.lvl1',
      'categories.lvl2',
      ],
    separator: ' > '
  })

  const { items: breadCrumbitem, refine: breadCrumbAction } = useBreadcrumb({
    attributes: [
      'categories.lvl0',
      'categories.lvl1',
      'categories.lvl2',
      ],
    separator: ' > '
  })

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
          <View style={{
            paddingVertical: 16,
            paddingHorizontal: 16,

          }}>
            <Text style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}>BreadCrumb</Text>
            <BreadCrumb breadCrumbitem={breadCrumbitem} breadCrumbAction={breadCrumbAction}/>
          </View>
          <View style={{
            paddingVertical: 16,
            paddingHorizontal: 16,

          }}>
            <Text style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}>HierarChical Menu</Text>
            <Hierarchical items={HierarItems} refine={HierarAction}/>
          </View>
          <View style={styles.content}>
          <Text style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}>Refinement List</Text>
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