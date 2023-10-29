import React from "react";

interface PopupsProps {
  children: React.ReactNode;
}

function Popup({ children }: PopupsProps) {
  return <div>{children}</div>;
}

export default Popup;
