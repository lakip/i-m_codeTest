import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "height": "100%"
    },
    "input-field label": {
        "color": "#2196f3"
    },
    "input-field input[type=text]:focus + label": {
        "color": "#2196f3"
    },
    "input-field input[type=text]:focus": {
        "borderBottom": "1px solid #2196f3",
        "boxShadow": "0 1px 0 0 #2196f3"
    },
    "input-field input[type=text]valid": {
        "borderBottom": "1px solid #2196f3",
        "boxShadow": "0 1px 0 0 #2196f3"
    },
    "input-field input[type=text]invalid": {
        "borderBottom": "1px solid #2196f3",
        "boxShadow": "0 1px 0 0 #2196f3"
    },
    "input-field prefixactive": {
        "color": "#2196f3"
    }
});
