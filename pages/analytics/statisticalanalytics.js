import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Channelengagementgraph from "../../components/analytics/channelengagementgraph";
import Userengagementtrend from "../../components/analytics/userengagementtrend";
import { selectUser } from "../../redux/slices/authentication/authslice";
function Statisticalanalytics() {
  const router = useRouter();

  // const user = useSelector(selectUser);
  // const token = user.user.token;
  const user = true;

  //* Todo: refactor to auth signin
  if (typeof window !== "undefined" && user == null) router.push("/");

  return (
    <div>
      <div>
        <Userengagementtrend />
      </div>
      <div>
        <Channelengagementgraph />
      </div>
    </div>
  );
}

export default Statisticalanalytics;
