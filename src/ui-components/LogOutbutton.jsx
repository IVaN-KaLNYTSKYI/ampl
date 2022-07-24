/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function LogOutbutton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="130px"
      height="44px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "LogOutbutton")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(108,117,125,1)"
        {...getOverrideProps(overrides, "Rectangle 227")}
      ></View>
      <Text
        fontFamily="HelveticaNeueCyr"
        fontSize="14px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="16.40625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="34.09%"
        bottom="31.82%"
        left="34.62%"
        right="18.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Log Out"
        {...getOverrideProps(overrides, "Log Out")}
      ></Text>
      <Icon
        width="13.931427001953125px"
        height="12.53076171875px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 13.931427001953125,
          height: 12.53076171875,
        }}
        paths={[
          {
            d: "M12.6914 6.96122L3.84598 6.96122C3.65312 6.96122 3.49732 6.80552 3.49732 6.61317C3.49732 6.42082 3.65311 6.26513 3.84598 6.26513L12.6693 6.26513L10.5982 4.04506C10.4621 3.90946 10.4621 3.68879 10.5982 3.55297C10.7343 3.41686 10.9546 3.41686 11.0905 3.55297L13.9314 6.62043L11.134 9.71C11.0659 9.7778 10.9769 9.81165 10.8878 9.81165C10.7987 9.81165 10.7097 9.7778 10.6416 9.71C10.5055 9.57379 10.5055 9.35342 10.6416 9.21741L12.6914 6.96122Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
          {
            d: "M1.39335 0L6.96589 0C7.73431 0 8.3593 0.624574 8.3593 1.39209L8.3593 4.52538L7.6626 4.52538L7.6625 1.39184C7.6625 1.00854 7.3502 0.695648 6.96579 0.695648L1.39325 0.695648C1.00905 0.695648 0.696753 1.00854 0.696753 1.39184L0.696753 11.1383C0.696753 11.5222 1.00905 11.8345 1.39325 11.8345L6.96605 11.8345C7.35025 11.8345 7.66275 11.5222 7.66275 11.1383L7.66265 8.70159L8.35936 8.70159L8.35936 11.1383C8.35936 11.9064 7.73437 12.5308 6.96595 12.5308L1.39341 12.5308C0.624987 12.5308 0 11.9064 0 11.1383L0.000100446 1.39184C0.000100446 0.624317 0.624931 0 1.39335 0Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="34.12%"
        bottom="37.4%"
        left="17.68%"
        right="71.61%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </View>
  );
}
