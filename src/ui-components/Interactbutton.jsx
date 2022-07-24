/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Interactbutton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="131px"
      height="40px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Interactbutton")}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 124")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="6px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(66,101,207,1)"
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
          left="38.17%"
          right="22.14%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Interact"
          {...getOverrideProps(overrides, "Interact")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="55.61%"
        bottom="31.28%"
        left="22.9%"
        right="68.9%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Icon
          width="10.744336128234863px"
          height="5.244384765625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 10.744336128234863,
            height: 5.244384765625,
          }}
          paths={[
            {
              d: "M1.13625 5.08734L5.35819 1.44621L9.60842 5.08734C10.1751 5.58704 11.1386 4.77802 10.5719 4.2782L5.75471 0.137473C5.55633 -0.0291383 5.18801 -0.0529013 4.98962 0.113712L0.17248 4.27819C-0.39422 4.77789 0.569243 5.58704 1.13591 5.08733L1.13625 5.08734Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}
