import { View, Text, TouchableOpacity, TextInput, Image} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, FONTS, icons, images } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Bubble, GiftedChat } from "react-native-gifted-chat";

const Chat = ({ navigation }) => {

      const [inputMessage, setInputMessage] = useState('')
      const [outputMessage, setOutputMessage] = useState(
        'Results should be shown here.'
    )

    const [isTyping, setIsTyping] = useState(false)

    const [messages, setMessages] = useState([])

    const renderMessage = (props) => {
      const { currentMessage } = props

      if (currentMessage.user._id === 1) {
        return(
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
          }}
          >
            <Bubble 
                 {...props}
                 wrapperStyle={{
                     right: {
                         backgroundColor: COLORS.primary,
                         marginRight: 12,
                         marginVertical: 12,
                     },
                 }}
                 textStyle={{
                     right: {
                         color: COLORS.white,
                     },
                 }}
            />
          </View>
        )
      }else{
        return(
          <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
        }}
        >
          <Image
            source={require('../assets/images/logo.jpg')}             
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              marginLeft: 8,
          }}
          />
          <Bubble 
               {...props}
               wrapperStyle={{
                   left: {
                       backgroundColor: COLORS.secondaryWhite,
                       marginLeft: 12,
                   },
               }}
               textStyle={{
                   left: {
                       color: COLORS.black,
                   },
               }}
          />
        </View>
        )
      }

      return <Bubble {...props} />
    }

    const generateText = () => {
      setIsTyping(true)
      const message = {
          _id: Math.random().toString(36).substring(7),
          text: inputMessage,
          createAt: new Date(),
          user: { _id: 1 },
      }

      setMessages((previousMessage) =>
          GiftedChat.append(previousMessage, [message])
      )

      /**
       * Always put your api key in an environment file
       * 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
       * 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
       */

      fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer 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',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: inputMessage,
                    },
                ],
            }),
          }).then((response) => response.json())
            .then((data) => {
        console.log(data.choices[0].message.content)
        setInputMessage('')
        setOutputMessage(data.choices[0].message.content.trim())

        const message = {
            _id: Math.random().toString(36).substring(7),
            text: data.choices[0].message.content.trim(),
            createAt: new Date(),
            user: { _id: 2, name: 'ChatGPT' },
        }

        setIsTyping(false)
        setMessages((previousMessage) =>
            GiftedChat.append(previousMessage, [message])
        )
    })
}


    const handleInputText = (text) => {
      setInputMessage(text);
    }


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar style="auto" />
      <View
        style={{
          height: 80,
          backgroundColor: "#D3D3D3",
          position: "absolute",
          top: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 22,
          width: SIZES.width,
          zIndex: 9999,
        }}
      >
        {/***Go back Icon  */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={37}
            color={COLORS.text}
          />
        </TouchableOpacity>

        {/***Save chat Icon  */}
        <TouchableOpacity onPress={() => console.log("Save chat")}>
          <Ionicons name="bookmark-outline" size={24} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
              <GiftedChat
                    messages={messages}
                    renderInputToolbar={() => {}}
                    user={{ _id: 1 }}
                    minInputToolbarHeight={0}
                    renderMessage={renderMessage}
                    isTyping={isTyping}
                    
                />
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: COLORS.background,
          paddingVertical: 8,
        }}
      >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginLeft: 10,
                backgroundColor: COLORS.background,
                paddingVertical: 8,
                marginHorizontal: 12,
                borderRadius: 12,
                borderColor: COLORS.text,
                borderWidth: 0.2,
              }}
            >
              {/**Text input type questions */}
                <TextInput
                        value={inputMessage}
                        onChangeText={handleInputText}
                        placeholder="Enter your question"
                        placeholderTextColor={COLORS.black}
                        style={{
                            color: COLORS.black,
                            flex: 1,
                            paddingHorizontal: 10,
                        }}
                    />

                    <TouchableOpacity
                    onPress={generateText}
                    style={{
                        padding: 6,
                        borderRadius: 8,
                        marginHorizontal: 12,
                    }}>

                      {/** send */}

                      <FontAwesome
                            name="send-o"
                            color={COLORS.primary}
                            size={24}
                        />
                    </TouchableOpacity>
            </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
