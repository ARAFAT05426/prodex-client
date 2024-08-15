import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const DevelopmentNoticeContext = createContext(null);

const DevelopmentNoticeProvider = ({ children }) => {
  const [noticeState, setNoticeState] = useState({
    show: false,
  });

  const showNotice = () => {
    setNoticeState({
      show: true,
    });
  };

  const hideNotice = () => {
    setNoticeState({
      show: false,
    });
  };

  return (
    <DevelopmentNoticeContext.Provider
      value={{ noticeState, showNotice, hideNotice }}
    >
      {children}
    </DevelopmentNoticeContext.Provider>
  );
};

DevelopmentNoticeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DevelopmentNoticeProvider;
