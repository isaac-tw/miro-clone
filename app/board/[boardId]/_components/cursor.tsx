"use client";

import { connectIdToColor } from "@/lib/utils";
import { useOther } from "@liveblocks/react";
import { MousePointer2Icon } from "lucide-react";
import { memo } from "react";

interface CursorProps {
  connectionId: number;
}

const Cursor = ({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);
  const name = info?.name || "default name";

  if (!cursor) return null;

  const { x, y } = cursor;

  return (
    <foreignObject
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      height={50}
      width={name.length * 10 + 24}
      className="relative drop-shadow-md"
    >
      <MousePointer2Icon
        className="h-5 w-5"
        style={{
          fill: connectIdToColor(connectionId),
          color: connectIdToColor(connectionId),
        }}
      />
      <div
        className="absolute left-5 rounded-md px-1.5 py-0.5 text-xs font-semibold text-white"
        style={{ backgroundColor: connectIdToColor(connectionId) }}
      >
        {name}
      </div>
    </foreignObject>
  );
};

export default memo(Cursor);
