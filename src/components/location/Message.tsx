import styled from "styled-components";
import { Colors } from "../../assets/css/colors";
import profile from "../../assets/imgs/profile.png";
import { useCallback, useRef, useState } from "react";
import { CommonProps } from "../../navigations";
import { mdiArrowUp } from "@mdi/js";
import Icon from "@mdi/react";

const MessageLayout = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  padding: 6px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #aaa;
`;

const ProfileImg = styled.img`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  margin-bottom: 0.3vw;
`;

const UserName = styled.p`
  color: ${Colors.White};
  font-size: 0.8vw;
  font-weight: bold;
`;

const ContentLayout = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background: #808080;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const MessageBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageBox = styled.div<{ $type: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$type === "send" ? "end" : "start"};
  margin-bottom: 0.3vw;
`;

const Text = styled.p<{ $type: string }>`
  width: fit-content;
  font-size: 1vw;
  font-weight: bold;
  color: ${Colors.White};
  background: ${(props) => props.$type === "send" ? "#0B83FE" : "#aaa"};
  padding: 0.5vw;
  border-radius: 0.5vw;
`;

const MessageInputLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
`;

const MessageInput = styled.input`
  width: 100%;
  border: 1px solid #aaa;
  border-radius: 0.5vw;
  padding: 0.4vw 0.4vw;
  font-size: 1vw;
  font-weight: bold;
  background: transparent;
  outline: none;
  color: ${Colors.White};
`;

const SendButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5vw;
  height: 1.5vw;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  right: 0;
  background: #39C75B;
  border: 1px solid #39C75B;
  border-radius: 50%;
  color: ${Colors.White};
  cursor: pointer;
`;

const Message = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const [ answer, setAnswer ] = useState("");
  const answerRef = useRef<HTMLInputElement>(null);

  const submit = useCallback(() => {
    if (answer.toUpperCase() !== "LOTTE MART") {
      setAnswer("");
      answerRef.current?.focus();
      return;
    }

    navigation("/third");
  }, [answer]);

  return (
    <MessageLayout>
      <Profile>
        <ProfileImg src={profile} alt="Profile Image" />
        <UserName>대범❤️</UserName>
      </Profile>
      <ContentLayout>
        <MessageBoxLayout>
          <MessageBox $type="send">
            <Text $type="send">
              장소는?
            </Text>
          </MessageBox>
          <MessageBox $type="receive">
            <Text $type="receive">
              568836278<br/>
              331121131
            </Text>
          </MessageBox>
        </MessageBoxLayout>
        <MessageInputLayout>
          <MessageInput 
            type="text"
            ref={answerRef}
            autoFocus={true}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <SendButton onClick={submit}>
            <Icon path={mdiArrowUp} size={0.8} />
          </SendButton>
        </MessageInputLayout>
      </ContentLayout>
    </MessageLayout>
  )
};

export default Message;