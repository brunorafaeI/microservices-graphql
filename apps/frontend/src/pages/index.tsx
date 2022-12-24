import { useSubscription, gql } from "@apollo/client";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const ACCOUNT_BANNED_SUBSCRIPTIN = gql`
  subscription Subscription {
    userBannedSubscription
  }
`;

const Home = () => {
  const { data } = useSubscription(ACCOUNT_BANNED_SUBSCRIPTIN);

  useEffect(() => {
    console.log(data);
    if (!data) {
      return;
    }

    toast.error("Nova conta criada!");
  }, [data]);

  return <h4>Home!</h4>;
};

export default Home;
