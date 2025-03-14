
export const myDarkTheme = {
    appScreenContainer: {
        flex: 1,

        backgroundColor: "white",


    },
    scrollViewContainer: {
        flexGrow: 1, // Ensures ScrollView takes full height
    },
    innerContainer: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 10,
        padding: 10,
        // backgroundColor: "#0000FF"

    },
    errorText: {
        color: "red",
        marginTop: 5,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },
    headingLabel: {
        fontSize: 40,
        fontWeight: "bold",
        elevation: 20,
        marginTop: 20,
        color: "#186a3b", // Text should be visible on grey
        // textAlign: "center",
        alignSelf: "center"
    },
    textLabel: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",

    },
    password: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black", // To make the generated password stand out
        marginBottom: 10,
    },
    inputDesign: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        borderRadius: 5,

        // marginTop: 10,
        marginLeft: 30,
        width: "35%",

        backgroundColor: "white", // Ensures input is clearly visible
        color: "black", // Text inside input should be visible
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 10,


    },
    button: {
        width: "30%",
        marginHorizontal: 5,
        marginVertical: 10,
    },
    checkboxContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    passwordCopyCard: {
        height: "50%",
        width: "100%",
        flex: 1,
        elevation: 10,
        shadowColor: "black",
        shadowOpacity: 1,


    }

}