"use client";

import { useOthers, useSelf } from "@liveblocks/react";
import UserAvatar from "./user-avatar";
import { connectIdToColor } from "@/lib/utils";

const MAX_SHOWN_OTHER_USERS = 2;

const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_OTHER_USERS;

  return (
    <div className="absolute right-2 top-2 flex h-12 items-center rounded-md bg-white p-3 shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_OTHER_USERS).map(({ connectionId, info }) => (
          <UserAvatar
            borderColor={connectIdToColor(connectionId)}
            key={connectionId}
            src={info?.picture}
            name={info?.name}
            fallback={info?.name?.[0] || "D"}
          />
        ))}
        {currentUser && (
          <UserAvatar
            borderColor={connectIdToColor(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_OTHER_USERS} more`}
            fallback={`+${users.length - MAX_SHOWN_OTHER_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export function ParticipantsSkeleton() {
  return (
    <div className="absolute right-2 top-2 flex h-12 w-[100px] items-center rounded-md bg-white p-3 shadow-md"></div>
  );
}

export default Participants;
