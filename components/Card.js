import React from "react";
import { Pressable, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Card = ({ onPress, disabled, cardContainterStyle, children }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.btnContainer, cardContainterStyle]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "gray",
    shadowOpacity: 0.6,
    shadowRadius: 15,
  },
});

Card.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  cardContainterStyle: PropTypes.object,
  children: PropTypes.any,
};

Card.defaultProps = {
  onPress: undefined,
  disabled: false,
  cardContainterStyle: undefined,
  children: undefined,
};

export default Card;
