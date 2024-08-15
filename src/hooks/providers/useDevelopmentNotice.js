import { useContext } from "react";
import { DevelopmentNoticeContext } from "./developmentNoticeProvider";

export const useDevelopmentNotice = () => useContext(DevelopmentNoticeContext);
