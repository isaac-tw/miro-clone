import {
  CircleIcon,
  MousePointer2Icon,
  PencilIcon,
  Redo2Icon,
  SquareIcon,
  StickyNoteIcon,
  TypeIcon,
  Undo2Icon,
} from "lucide-react";
import ToolButton from "./tool-button";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const Toolbar = ({
  canvasState,
  setCanvasState,
  undo,
  redo,
  canUndo,
  canRedo,
}: ToolbarProps) => {
  return (
    <div className="absolute left-2 top-[50%] flex -translate-y-[50%] flex-col gap-y-4">
      <div className="flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md">
        <ToolButton
          label="Select"
          icon={MousePointer2Icon}
          onClick={() => setCanvasState({ mode: CanvasMode.None })}
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelectionNet ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.Resizing
          }
        />
        <ToolButton
          label="Text"
          icon={TypeIcon}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
        />
        <ToolButton
          label="Sticky note"
          icon={StickyNoteIcon}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Note
          }
        />
        <ToolButton
          label="Rectangle"
          icon={SquareIcon}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Rectangle,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
        />
        <ToolButton
          label="Ellipse"
          icon={CircleIcon}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellipse,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Ellipse
          }
        />
        <ToolButton
          label="Pen"
          icon={PencilIcon}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Pencil,
            })
          }
          isActive={canvasState.mode === CanvasMode.Pencil}
        />
      </div>
      <div className="flex flex-col items-center rounded-md bg-white p-1.5 shadow-md">
        <ToolButton
          label="Undo"
          icon={Undo2Icon}
          onClick={undo}
          isDisabled={!canUndo}
        />
        <ToolButton
          label="Redo"
          icon={Redo2Icon}
          onClick={redo}
          isDisabled={!canRedo}
        />
      </div>
    </div>
  );
};

export function ToolbarSkeleton() {
  return (
    <div className="absolute left-2 top-[50%] flex h-[360px] w-[52px] -translate-y-[50%] flex-col gap-y-4 rounded-md bg-white shadow-md"></div>
  );
}

export default Toolbar;
