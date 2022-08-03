import React from "react";

export const ColorfulMessage = (props) => {
  //propsを毎回入れるのは面倒なので分割代入してわかりやすくする。
  const { color, children } = props;
  const contentStyle = {
    // color: props.color,
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
  // return <p style={contentStyle}>{props.children}</p>;
};

// export default ColorfulMessage;
