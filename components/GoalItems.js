import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const GoalItems = props => {
  return (
    
    <FlatList keyExtractor={ item => item.id}   data={props.data} 
      renderItem={({item}) => (
          <TouchableOpacity onPress={()=>onDelete(props.id)} >
      
            <View style={styles.listItem}>
              <MaterialIcons name='delete' size={18} color='#333' />
              <Text style={styles.text}>{item.title}</Text>
             </View>
      
          </TouchableOpacity>
        )}

    />

  );
};

const styles = StyleSheet.create({
  listItem: {
    flex:1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: "dashed",
    flexDirection: 'row',
    alignItems: 'center',
  },
  text:{
    marginLeft:10
  }
});

export default GoalItems;
