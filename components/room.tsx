"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

interface RoomProps {
  children: ReactNode;
  roomId: string;
}

export function Room({ children, roomId }: RoomProps) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_prod_a8dKsNjiFvHQa3DQ-yjknbWwzse6Pb32EJtqrC_lynjvqwMhxgx2sg-vEF2F5SSo"
      }
    >
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
