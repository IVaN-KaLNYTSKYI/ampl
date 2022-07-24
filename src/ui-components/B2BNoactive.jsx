/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function B2BNoactive(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="106px"
      height="40px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "B2BNoactive")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(37,43,48,1)"
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 165")}
      ></View>
      <Icon
        width="16px"
        height="16px"
        viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
        paths={[
          {
            d: "M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5L8 16.5C12.6944 16.5 16.5 12.6944 16.5 8L15.5 8ZM8 15.5C3.85786 15.5 0.5 12.1421 0.5 8L-0.5 8C-0.5 12.6944 3.30558 16.5 8 16.5L8 15.5ZM0.5 8C0.5 3.85786 3.85786 0.5 8 0.5L8 -0.5C3.30558 -0.5 -0.5 3.30558 -0.5 8L0.5 8ZM8 0.5C12.1421 0.5 15.5 3.85786 15.5 8L16.5 8C16.5 3.30558 12.6944 -0.5 8 -0.5L8 0.5Z",
            stroke: "rgba(37,43,48,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="30%"
        bottom="30%"
        left="11.32%"
        right="73.58%"
        {...getOverrideProps(overrides, "Ellipse 10")}
      ></Icon>
      <Text
        fontFamily="HelveticaNeueCyr"
        fontSize="20px"
        fontWeight="500"
        color="rgba(37,43,48,1)"
        lineHeight="23.4375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="30%"
        bottom="20%"
        left="43.4%"
        right="18.87%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="B2B"
        {...getOverrideProps(overrides, "B2B")}
      ></Text>
    </View>
  );
}
