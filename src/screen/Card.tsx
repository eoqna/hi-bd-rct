import { useCallback } from "react";
import { Layout } from "../assets/css/common";
import { CommonProps } from "../navigations";
import Question from "../components/card/Question";

const Card = ({ navigation }: CommonProps.ComponentProps) => {
  const submit = useCallback(() => {
    navigation("/endding");
  }, []);
  
  return (
    <Layout>
      <Question navigation={navigation} />
    </Layout>
  );
};

export default Card;