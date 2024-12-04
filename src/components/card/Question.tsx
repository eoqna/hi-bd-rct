import styled from "styled-components";
import { CenterLayout } from "../../assets/css/common";
import { Colors } from "../../assets/css/colors";
import question from "../../assets/imgs/lock.png";
import { ChangeEvent, useCallback, useState } from "react";
import { CommonProps } from "../../navigations";

const Text = styled.p`
  color: ${Colors.White};
  font-size: 4vmin;
  margin-bottom: 50px;
`;

const Img = styled.img`
  width: 500px;
  height: 400px;
  margin-bottom: 70px;
`;

const Input = styled.input`
  width: 10%;
  height: 30px;
  text-align: center;
  font-size: 2.4vmin;
  padding: 6px 8px;
  outline: none;
`;

const Question = ({ navigation }: CommonProps.ComponentProps) => {
  const onChangeText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === "4769") {
      navigation("/endding");
    }
  }, []);

  return (
    <CenterLayout>
      <Text>Q. 다음 중 ❤️♦️♠️☘️가 의미하는 네자리 숫자는?</Text>
      <Img src={question} alt="문제" />
      <Input 
        onChange={(e) => onChangeText(e)}
        autoFocus
      />
    </CenterLayout>
  );
};

export default Question;