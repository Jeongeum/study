import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "./recoil/selector";

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
}
