"use client";

import useSelectionBounds from "@/hooks/use-selection-bounds";
import { Camera, Color } from "@/types/canvas";
import { useMutation, useSelf } from "@liveblocks/react";
import { memo } from "react";
import ColorPicker from "./color-picker";
import UseDeleteLayers from "@/hooks/use-delete-layers";
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

const SelectionTools = ({ camera, setLastUsedColor }: SelectionToolsProps) => {
  const selection = useSelf((me) => me.presence.selection);

  const setFill = useMutation(
    ({ storage }, fill: Color) => {
      const liveLayers = storage.get("layers");
      setLastUsedColor(fill);

      selection?.forEach((id) => {
        liveLayers.get(id)?.set("fill", fill);
      });
    },
    [selection, setLastUsedColor],
  );

  const deleteLayers = UseDeleteLayers();

  const selectionBounds = useSelectionBounds();

  if (!selectionBounds) return null;

  const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
  const y = selectionBounds.y + camera.y;

  return (
    <div
      className="absolute flex select-none rounded-xl border bg-white p-3 shadow-sm"
      style={{
        transform: `translate(
          calc(${x}px - 50%),
          calc(${y - 16}px - 100%)
        )`,
      }}
    >
      <ColorPicker onChange={setFill} />
      <div className="ml-2 flex items-center border-l border-neutral-200 pl-2">
        <Hint label="Delete">
          <Button variant="board" size="icon" onClick={deleteLayers}>
            <Trash2Icon />
          </Button>
        </Hint>
      </div>
    </div>
  );
};

export default memo(SelectionTools);
