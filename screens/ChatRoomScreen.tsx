import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import Message from "../components/Message";
import MessageInput from "../components/MessageInput"
import chatRoomData from "../assets/dummy-data/Chats";

const ChatRoomScreen = () => {
	const route = useRoute()
	const navigation = useNavigation();

	navigation.setOptions({title: "Jessica Kemunto"})
	return (
		<SafeAreaView style={styles.page}>
			<FlatList
				data={chatRoomData.messages}
				inverted
				renderItem={({ item }) => <Message message={item} />}
			/>
			<MessageInput />
		</SafeAreaView>
	);
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
	page: {
		backgroundColor: "white",
		flex: 1,
	},
});
