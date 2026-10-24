import React, { Component } from 'react'
import { Text, StyleSheet, View, Pressable, ScrollView, Image } from 'react-native'

export default function Single ({ route, navigation }) {
    const item = route.params?.item;

    if(!item) {
        return(
            <View style={styles.emptyContainer}>
                <Text>Product not found</Text>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.backLink}>Go Back</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Image source={{ uri: item.image}} style={styles.image} resizeMode='cover'></Image>

            <View style={styles.cardHeader}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>

            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.description}>{item.description}</Text>

            <Pressable style={styles.button} onPress={() => navigation.goBack()} accessibilityRole='button' accessibilityLabel='Go back'>
                <Text style={styles.buttonText}>Go Back</Text>
            </Pressable>

        </ScrollView>
    )
  }

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    },
    content: {
    padding: 20,
    paddingBottom: 32,
    alignItems: "center",
    },
    image: {
    width: "100%",
    height: 310,
    borderRadius: 12,
    backgroundColor: "#e5e7eb",
    },
    cardHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 26,
    },
    name: {
    flex: 1,
    color: "#151c39",
    fontSize: 23,
    fontWeight: "bold",
    },
    price: {
    color: "#151c39",
    fontSize: 21,
    fontWeight: "bold",
    },
    category: {
    width: "100%",
    color: "#22bfe8",
    fontSize: 14,
    marginTop: 8,
    },
    description: {
    fontSize: 14,
    color: "#454d5b",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 24,
    },
    button: {
    width: "65%",
    backgroundColor: "#22c9f3",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 28,
    },
    buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    },
    emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    },
    backLink: {
    color: "#168caf",
    fontWeight: "bold",
    },
});
