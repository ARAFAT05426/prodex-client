import { useContext } from "react";
import authContext from "../context/authContext";
const useAuth = () => {
  const auth = useContext(authContext);
  return auth;
};
export default useAuth;
