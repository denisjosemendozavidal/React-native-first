import {StyleSheet, Text, View, Pressable, Modal} from "react-native";

function GoalItem (props) {
   

    return (
        
            <View style={styles.listOfGOals} >
                <Pressable 
                    android_ripple={{color: "black"}} 
                    onPress={props.delete.bind(this, props.id)}
                    style={({pressed}) => pressed && styles.pressedStyles }>
                    <Text style={styles.goalItem}>{props.text}</Text>
                </Pressable>
            </View> 
        
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    listOfGOals: {
        textAlign: 'center',
        margin: 8,
        backgroundColor: "transparent",
        alignItems: "center",
        alignContent: "center",
        borderRadius: 10,
      },
      goalItem: {
        color: "white",
        padding: 5,
        fontSize: 15,
        textAlign: "center",
        margin: 5,
      },

      pressedStyles: {
        opacity: 0.2,
      }
})