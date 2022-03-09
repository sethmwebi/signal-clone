import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	KeyboardAvoidingView,
	Platform
} from "react-native";
import {
	SimpleLineIcons,
	Feather,
	MaterialCommunityIcons,
	AntDesign,
	Ionicons,
} from "@expo/vector-icons";

const MessageInput = () => {
	const [message, setMessage] = useState("");

	const sendMessage = () => {
		console.log("sending: ", message);

		setMessage("");
	};

	const onPlusClicked = () => {
		console.log("On plus clicked");
	};

	const onPress = () => {
		if (message.trim()) {
			sendMessage();
		} else {
			onPlusClicked();
		}
	};
	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={100}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.root}
		>
			<View style={styles.inputContainer}>
				<SimpleLineIcons
					name="emotsmile"
					size={24}
					color="gray"
					style={styles.icon}
				/>
				<TextInput
					style={styles.input}
					placeholder="Signal message..."
					value={message}
					onChangeText={setMessage}
				/>
				<Feather name="camera" size={24} color="gray" style={styles.icon} />
				<MaterialCommunityIcons
					name="microphone-outline"
					size={24}
					color="gray"
					style={styles.icon}
				/>
			</View>
			<Pressable onPress={onPress} style={styles.buttonContainer}>
				{message.trim() ? (
					<Ionicons name="send" size={18} color="white" />
				) : (
					<AntDesign name="plus" size={18} color="white" />
				)}
			</Pressable>
		</KeyboardAvoidingView>
	);
};

export default MessageInput;

const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		padding: 10,
	},
	inputContainer: {
		backgroundColor: "#f2f2f2",
		flex: 1,
		marginRight: 10,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: "#dedede",
		alignItems: "center",
		flexDirection: "row",
		padding: 5,
	},
	input: {
		flex: 1,
		marginHorizontal: 5,
	},
	icon: {
		marginHorizontal: 5,
	},
	buttonContainer: {
		width: 40,
		height: 40,
		backgroundColor: "#3777f0",
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 35,
	},
});
