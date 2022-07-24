/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function ButtonSave(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="200px"
      height="40px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ButtonSave")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(18,134,50,1)"
        {...getOverrideProps(overrides, "Rectangle 165")}
      ></View>
      <Text
        fontFamily="HelveticaNeueCyr"
        fontSize="14px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="16.40625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="32.5%"
        bottom="32.5%"
        left="41.5%"
        right="42%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Save"
        {...getOverrideProps(overrides, "Save")}
      ></Text>
    </View>
  );
}
