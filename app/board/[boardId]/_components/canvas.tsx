"use client";

import { PointerEvent, useCallback, useState, WheelEvent } from "react";
import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
} from "@liveblocks/react";
import CursorsPresence from "./cursors-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

  const onWheel = useCallback((e: WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(({ setMyPresence }, e: PointerEvent) => {
    e.preventDefault();

    const current = pointerEventToCanvasPoint(e, camera);

    setMyPresence({ cursor: current });
  }, []);

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null });
  }, []);

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  return (
    <main className="relative h-full w-full touch-none bg-neutral-100">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canUndo={canUndo}
        canRedo={canRedo}
        undo={history.undo}
        redo={history.redo}
      />
      <svg
        className="h-screen w-screen"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <g style={{ transform: `translate(${camera.x}px, ${camera.y}px)` }}>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};

export default Canvas;
