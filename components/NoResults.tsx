import React from "react";

interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return (
    <div>
      <div>NoResults</div>
    </div>
  );
};

export default NoResults;
