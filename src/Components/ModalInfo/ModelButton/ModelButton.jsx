import React from 'react';

export const ModelButton = ({textButton, width, height}) => {
  console.log(width, height);
  const buttonStyle = {
    color: "white",
    backgroundColor: "#1F375F",
    width: `${width}`,
    height: `${height}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    margin:"0px 0px 0px 10px",
  }
  return (
    <article style={buttonStyle}>
        <p style={{fontSize:"1.3rem"}}> {textButton}</p>
    </article>
  );
};
