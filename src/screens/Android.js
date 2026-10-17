import React, { Component, useState } from 'react'
import { Text, View, FlatList, Pressable, StyleSheet } from 'react-native'
import Item from '../components/Item'
import data from '../data/data.json'

export default function Android() {
    const [showAll, setShowAll] = useState(false);
    const androidProducts = data.android;
    const visibleProducts = showAll ? androidProducts : androidProducts.slice(0,3);

    const renderHeader = () => {
        <View style={styles.header}>
            <Text style={styles.title}>Android Products</Text>
            <Text style={styles.description}>Explore our Android collection</Text>
        </View>
    }

    const renderFooter = () => {
        if(androidProducts.length <= 3) return null;
        
        return(
            <Pressable 
            style={styles.btnTxt} 
            onPress={() => setShowAll((previous) => !previous)}
            >
                <Text style={styles.btnTitle}>
                    {showAll ? "Show Less" : "Show More"}
                </Text>
            </Pressable>
        )
    }
    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.content}
            data={visibleProducts}
            renderItem={({item}) => <Item item={item}></Item>}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={
                <Text style={styles.empty}>No Android Products Found</Text>
            }
            showsVerticalScrollIndicator={false}
        ></FlatList>
    )
       
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: 18,
    paddingBottom: 32
  },
  header: {
    paddingTop: 22,
    marginBottom: 20
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    color: "#384053",
    marginBottom: 8
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: "#667085"
  },
  btnTxt: {
    marginTop: 10,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#22C9f3'
  },
  btnTitle: {
    color: "white",
    fontWeight: '700',
    fontSize: 15
  },
  empty: {
    marginTop: 24,
    color: '#667085',
    textAlign: 'center'
  }

})
