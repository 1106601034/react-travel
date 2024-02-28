import React from "react";
import { Spin } from "antd";

export const LoadingSpin: React.FC = () => {
  return (
      <Spin
        size="large"
        style={{
          marginTop: "46vh",
          marginLeft: "auto",
          marginRight: "auto",
          height: "100vh",
          width: "100%",
        }}
      />
  );
};