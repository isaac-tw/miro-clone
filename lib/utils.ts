import { Camera } from "@/types/canvas";
import { clsx, type ClassValue } from "clsx";
import { PointerEvent } from "react";
import { twMerge } from "tailwind-merge";

const COLORS = [
  "#0d3b66ff",
  "#faf0caff",
  "#f4d35eff",
  "#ee964bff",
  "#f95738ff",
  "#cacaaaff",
  "#eec584ff",
  "#c8ab83ff",
  "#55868cff",
  "#7f636eff",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectIdToColor(connectId: number): string {
  return COLORS[connectId % COLORS.length];
}

export function pointerEventToCanvasPoint(e: PointerEvent, camera: Camera) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}
