
import { Dimensions, StatusBar, StyleSheet } from "react-native";


export const primaryColor = 'orange';
export const orangeClair = 'rgb(235, 204, 163)';
const iconDimensions = 24;
const defaultFontSize = 16;
const borderRadiusLengthProfile = 90;


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get("window").height,
    },
    login: {
        container: {


        },
    },
    defaultText: {
        fontSize: 19,
        fontWeight: '200',
        color: 'whitesmoke',


    },
    shadow: {
        shadowOpacity: 0.8,
    },
    home: {
        container: {
            flex: 1,
            justifyContent: 'center',

        },
    },
    /*registration: {
        container: {

        },
    },*/
    subTitle: {
        fontSize: 19,
        fontWeight: "500"
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        margin: 12,

    },
    profile: {
        container: {

        },
        header: {
            container: {
                width: "100%",
                height: 400,
                alignItems: 'center',
                backgroundColor: orangeClair,
                paddingTop: 83
            },

            image: {
                width: 80,
                height: 80,
                borderBottomLeftRadius: borderRadiusLengthProfile,
                borderBottomRightRadius: borderRadiusLengthProfile,
                borderTopRightRadius: borderRadiusLengthProfile,
                borderTopLeftRadius: borderRadiusLengthProfile,
                margin: 13
            },

            name: {
                fontSize: 27,
                fontWeight: '600',
                color: 'black',
                shadowOpacity: 0.5,
                shadowColor: orangeClair
            }
        },
        detail: {
            container: {
                padding: 12
            },
            item: {
                borderBottomWidth: 0.2,
                paddingBottom : 8,
                marginBottom : 19,
                paddingTop : 5
                
            },
        },

        recap: {
            container: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: "100%",
                padding: 30,
            },

            item: {
                alignItems: 'center',
                number: {
                    fontWeight: "700",
                    color: 'white',
                    fontSize: 25
                },
               
            }
        },
        body: {
            container: {
                width: "100%",
            },
            onglet: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 12,
                borderBottomWidth: 0.2,
                paddingBottom: 16,
                borderColor: primaryColor,
            }
        }

    },
    header: {
        container: {
            backgroundColor: primaryColor,
            width: Dimensions.get("window").width,
            flex: 0,
            height: 210,
            marginTop: StatusBar.currentHeight - 150,
            marginBottom: 30,
            borderBottomStartRadius: 19,
            borderBottomEndRadius: 19

        },
        title: {
            fontSize: 36,
            fontWeight: 'bold',
            color: orangeClair
        }
    },
    event_component: {
        container: {
            alignItems: 'left',
            justifyContent: 'left',
            marginTop: 20,
            marginBottom: 20,
            width: Dimensions.get("window").width,
            height: 117,
            paddingLeft: 20,
            shadowColor: "#000",
            shadowOffset: {
                width: 35,
                height: 15,
            },
            shadowOpacity: 43,
            shadowRadius: 34,
            elevation: 15,
            borderBottomWidth: 1,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 30,
            borderColor: orangeClair,

        },
        label: {
            fontWeight: 'bold',
            fontSize: 26,
            fontWeight: 'small',
            color: 'black'
        },
        description: {
            color: 'darkgray',
            paddingLeft: 7
        },
        city: {
            fontWeight: 'italic',
            color: primaryColor,
            fontSize: 20,

        }
    },
    eventListe: {
        container: {

        },
    },
    icon: {
        width: iconDimensions,
        height: iconDimensions,
        tintColor: orangeClair
    },
    iconSelected: {
        width: iconDimensions + 5,
        height: iconDimensions + 5,
        tintColor: 'black',
    },
    logo: {

        image: {
            width: 190,
            height: 95,

        },
        view: {
            width: Dimensions.get("window").width,
            alignItems: 'center',
            height: 150,
            marginTop: 30,


        }
    },
    button: {
        backgroundColor: primaryColor,
        color: 'black',
        width: Dimensions.get("window").width - 200,
        marginTop: 30,
        height: 40,
        justifyContent: 'center',
        borderRadius: 19,
        marginBottom: 20,
        alignItems: 'center',

    },
    input: {
        backgroundColor: 'lightgray',
        justifyContent: "center",
        marginLeft: 6,
        width: Dimensions.get("window").width - 100,
        height: 40,
        letterSpacing: 2,
        padding: 9,
        borderRadius: 19,
        fontSize: defaultFontSize,

    },
    field: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        marginTop: 4,
        width: Dimensions.get("window").width,
    },
    link: {

        textDecorationLine: "underline",
        color: primaryColor,
        marginTop: 32
    },
    text: {
        fontSize: defaultFontSize,
    },
    menuBar: {
        container: {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: primaryColor,
            height: "8%",
            paddingLeft: 4,
            paddingRight: 4,
        },
        elements: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    },
    headerNav: {
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: 12,
            position: 'absolute',
            top: 45,
            borderBottomWidth: 0.3,
            backgroundColor: 'transparent',
            borderBottomStartRadius: 23,
            borderBottomEndRadius: 23,

        },
        element: {
            color: primaryColor,
            fontSize: 18,
        },
        rightElement: {
            fontSize: 18,
        },
        title: {
            fontSize: 23,
            fontWeight: 'large'
        }
    },
    searchBar: {
        container: {
            margin: 15,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            width: "90%",
        },
        input: {
            fontSize: 18,
            marginLeft: 10,
            width: "90%",
        },
        unclicked: {
            padding: 5,
            flexDirection: "row",
            width: "80%",
            backgroundColor: "whitesmoke",
            borderRadius: 19,
            alignItems: "center",
        },
        clicked: {
            padding: 2,
            flexDirection: "row",
            width: "50%",
            backgroundColor: "#d9dbda",
            borderRadius: 19,
            alignItems: "center",
            justifyContent: "space-evently",
        }
    }
});