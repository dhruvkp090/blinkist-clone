import { createMuiTheme } from '@material-ui/core/styles';
import "@fontsource/raleway";

export const primaryColor = "#032356";
export const secondaryColor = "#6d787e";
export const tertiaryColor = "#68DF81";
export const fourthColor = "#0552be";
const lightBlue = "#F1F6F4";


export const theme = createMuiTheme({
    palette: {
        primary: {
        main: tertiaryColor,
        },
        secondary: {
        main: secondaryColor,
        },
    },
    typography: {
        overflowWrap: "break-word",
        fontFamily:"Raleway",
        h6: {
            fontSize: "1.125rem",
            fontWeight: "700",
            lineHeight: "1.33",
            marginBottom: "0.5rem",
            color: primaryColor
        },
        body1: {
            fontWeight: "500",
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.57,
            color: "#3A4649",
        },
        h5: {
            color: fourthColor,
            fontWeight: "700"
        },
        h4: {
            fontSize: "2.2rem",
            lineHeight: "2.8125rem",
            color: "#03314B",
            fontWeight: 600,
            marginBottom: "5rem",
        },
        h3: {
            fontSize: "1.125rem",
            fontWeight: "700",
            lineHeight: "1.33",
            marginBottom: "0.5rem",
        }
    },
    overrides: {
        MuiLink:{
            underlineHover: {
                '&:hover': { 
                textDecorationColor: tertiaryColor,
                textUnderlineOffset: '0.3em',
                textDecorationThickness: '2px'
                },
            },
            root: {
                '&:hover': { 
                color: fourthColor,
                },
                fontWeight: "500"
            }
        },
        MuiButtonBase: {
            root: {
                borderRadius: "0",
                '&:hover':{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: ".125rem solid " + tertiaryColor ,
                },
                justifyContent: "flex-start"
            },
        },
        MuiButton: {
            root: {
                borderRadius: ".25rem",
                textTransform: "none",
                color: primaryColor,
                '&:hover':{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: "0"
                }
            },
            textPrimary: {
                color: primaryColor,
                fontSize: "1rem",
                paddingBottom: "0rem",
                '&:hover':{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderRadius: "0",
                    borderBottom: ".15rem solid " + tertiaryColor ,
                }
            },
            endIcon: {
                color: primaryColor,
                '&:hover':{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderRadius: "0",
                    textDecoration: "underline",
                    textDecorationColor: tertiaryColor,
                    textUnderlineOffset: '0.3em',
                    textDecorationThickness: '2px'
                }
            },
            textSecondary: {
                color: secondaryColor,
                '&:hover':{
                    color: primaryColor,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: "0"
                }
            },
            outlined: {
                border: ".125rem solid rgb(58, 70, 73)",
                '&:hover':{
                    border: ".125rem solid " + secondaryColor,
                    backgroundColor: "transparent",
                },
                color: tertiaryColor,
                padding: ".6875rem 1rem .8125rem",
                minWidth: "18.5rem",
                justifyContent: "center",
            },
            textSizeLarge:{
                fontSize: "1rem"
            },
            containedPrimary: {
                backgroundColor: "transparent",
                color: primaryColor,
                boxShadow: "0px",
                '&:hover': {
                    backgroundColor: primaryColor,
                    color: "white"
                },
                borderRadius: "0",
                padding: "5% 0"
            },
            containedSecondary: {
                backgroundColor: "transparent",
                color: secondaryColor,
                boxShadow: "0px",
                '&:hover': {
                    backgroundColor: secondaryColor,
                    color: "white"
                },
                borderRadius: "0",
                padding: "5% 0"
            },
            contained: {
                boxShadow: "0px",
            },
        },
        
        MuiIconButton: {
            root:{
                '&:hover': {
                    backgroundColor: "transparent",
                    borderBottom: "0",
                    color: primaryColor
                }
            }
        },
        MuiTab: {
            root:{
                fontSize: "1.125rem",
            },
            textColorPrimary: {
                textTransform: "none",
                minWidth: "32%",
                '&$selected': {
                    color: tertiaryColor,
                },
                '&:hover': {
                    borderColor: secondaryColor
                },
                borderBottom: ".125rem solid " + secondaryColor ,
            },
            wrapper: {
                alignItems: "baseline",
                fontWeight: "bold",
                paddingBottom: "0.5rem"
            }
        
        },
        PrivateTabIndicator: {
            colorPrimary: {
                backgroundColor: tertiaryColor,
            }
            
        },
        MuiCard:{
            root: {
                maxWidth: "100%",
                minHeight: "25rem",
            },
        },
        MuiPopover: {
            paper: {
                overflowY: "auto",
                minWidth: "100%"
            }
        },
        MuiListItem: {
            button: {
                color: secondaryColor,
                '&:hover':{
                    color: primaryColor,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: "0"
                }
            }
        },
        MuiMenuItem: {
            root: {
                fontSize: "1.125rem",
            }
        },
        MuiMenu: {
            paper: {
                backgroundColor: lightBlue
            }
        },
        MuiPaper: {
            elevation8: {
                boxShadow: 0,
            },
            elevation1: {
                boxShadow: 0,
            }
        },
        MuiCardContent: {
            root: {
                border: "1px solid #BAC8CE",
                borderTop: 0,
                '&:hover':{
                    backgroundColor: lightBlue,
                }
            }
        },
        MuiCardActions: {
            root: {
                border: "1px solid #BAC8CE",
                borderTop: 0,
                borderBottomRightRadius: "0.25rem",
                borderBottomLeftRadius: "0.25rem",
                padding: "0px"
            }
        },
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: secondaryColor,
                borderWidth: "2px",
            },
        }
    },
    props: {
        MuiButton: {
            disableRipple: true,
        },
        MuiTab: {
            disableRipple: true
        },
    }

});
