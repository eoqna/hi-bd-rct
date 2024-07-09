import { useCallback } from "react";
import { Layout } from "../assets/css/common";
import { CommonProps } from "../navigations";

const Locker = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;

  const submit = useCallback(() => {
    navigation("/endding");
  }, []);
  
  return (
    <Layout>

    </Layout>
  )
};

export default Locker;