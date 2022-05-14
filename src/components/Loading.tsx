import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="w-20 h-20 animate-spin" color="red"/>
    </div>
  );
}