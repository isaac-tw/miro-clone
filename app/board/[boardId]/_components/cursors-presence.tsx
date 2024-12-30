"use client";

import { useOthersConnectionIds } from "@liveblocks/react";
import { memo } from "react";
import Cursor from "./cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();
  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

const CursorsPresence = () => {
  return <Cursors />;
};

export default memo(CursorsPresence);
