import React, { CSSProperties } from "react";

interface Props {
  title: string;
}

function SectionCard(props: Props) {
  const url = "assets/" + props.title + ".jpg";
  return (
    <div style={rootStyle(url)}>
      <h2 style={titleStyle}>{props.title}</h2>
    </div>
  );
}

const rootStyle = (imageSrc: string): CSSProperties => ({
  flex: 1,
  display: "flex",
  backgroundImage: `url(${imageSrc})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  justifyContent: "center",
  alignItems: "center",
});

const titleStyle: CSSProperties = {
  fontSize: "2.2rem",
  textShadow: "0 0 0.2rem #eee",
};

export default SectionCard;
