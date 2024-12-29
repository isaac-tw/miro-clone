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

const Toolbar = () => {
  return (
    <div className="absolute left-2 top-[50%] flex -translate-y-[50%] flex-col gap-y-4">
      <div className="flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md">
        <ToolButton
          label="Select"
          icon={MousePointer2Icon}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Text"
          icon={TypeIcon}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Sticky note"
          icon={StickyNoteIcon}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Rectangle"
          icon={SquareIcon}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Ellipse"
          icon={CircleIcon}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Pen"
          icon={PencilIcon}
          onClick={() => {}}
          isActive={false}
        />
      </div>
      <div className="flex flex-col items-center rounded-md bg-white p-1.5 shadow-md">
        <ToolButton
          label="Undo"
          icon={Undo2Icon}
          onClick={() => {}}
          isDisabled={true}
        />
        <ToolButton
          label="Redo"
          icon={Redo2Icon}
          onClick={() => {}}
          isDisabled={true}
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
