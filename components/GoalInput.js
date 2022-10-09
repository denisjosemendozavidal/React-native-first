import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, FlatList, Modal, Image } from 'react-native';

function GoalInput({addGoal, visible}) {
    const [enteredGoalText, setEnteredGoalText] = useState()

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
      };

    function addGoalHandler() {
        if (enteredGoalText) {
            addGoal(enteredGoalText);
            setEnteredGoalText();
        } else {setEnteredGoalText("BELIEVE in you.!")}
    }

    return (
        <Modal visible = {visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/Goals.png")} />
                <TextInput 
                    onChangeText={goalInputHandler} 
                    style={styles.textInput} 
                    placeholder='Your goal.!'
                    value={enteredGoalText}
                />
                <Button title="Add goal" onPress={addGoalHandler} color="transparent"/>
            </View>
        </Modal>
        )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        backgroundColor: "#311b6b", 
        marginBottom: 0,
        marginTop: 0,
      },

      image: {
        margin: 10,
        width: 300,
        height: 200,
      },

      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc", 
        width: "80%",
        textAlign: 'center',
        margin: 10,
        borderRadius: 10,
        padding: 5,
        fontSize: 15,
        color: "#000000",
        backgroundColor: "#e4d0ff",
      },

     
})