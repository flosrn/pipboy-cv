"use client";

import useSound from "use-sound";

import { Button } from "@/components/button";
import { CustomSlider } from "@/components/slider";
import { useOverlays } from "@/store/use-overlays";

const pipboyOk = "/sounds/UI_PipBoy_OK.mp3";
const pipboyValue = "/sounds/UI_PipBoy_Favorite_Menu_Dpad_A.mp3";
const moveSounds = [
  "/sounds/Move/UI_PipBoy_Move_02.mp3",
  "/sounds/Move/UI_PipBoy_Move_05.mp3",
  "/sounds/Move/UI_PipBoy_Move_06.mp3",
];

export type SettingsMenuProps = {};

const overlayOptions = ["cracks", "dirt", "fingerprints", "smudges"];

export const SettingsMenu = (props: SettingsMenuProps) => {
  const [playOk] = useSound(pipboyOk);
  const [playValue] = useSound(pipboyValue);
  const [playMove] = useSound(
    moveSounds[Math.floor(Math.random() * moveSounds.length)]
  );
  const [cracksOpacity, setCracksOpacity] = useOverlays((state) => [
    state.cracksOpacity,
    state.setCracksOpacity,
  ]);
  const [dirtOpacity, setDirtOpacity] = useOverlays((state) => [
    state.dirtOpacity,
    state.setDirtOpacity,
  ]);
  const [fingerprintsOpacity, setFingerprintsOpacity] = useOverlays((state) => [
    state.fingerprintsOpacity,
    state.setFingerprintsOpacity,
  ]);
  const [smudgesOpacity, setSmudgesOpacity] = useOverlays((state) => [
    state.smudgesOpacity,
    state.setSmudgesOpacity,
  ]);

  const onClear = () => {
    playOk();
    setCracksOpacity([0]);
    setDirtOpacity([0]);
    setFingerprintsOpacity([0]);
    setSmudgesOpacity([0]);
    playMove();
  };

  const onMaximize = () => {
    playOk();
    setCracksOpacity([100]);
    setDirtOpacity([100]);
    setFingerprintsOpacity([100]);
    setSmudgesOpacity([100]);
    playMove();
  };

  const onShuffle = () => {
    playOk();
    setCracksOpacity([Math.floor(Math.random() * 100)]);
    setDirtOpacity([Math.floor(Math.random() * 100)]);
    setFingerprintsOpacity([Math.floor(Math.random() * 100)]);
    setSmudgesOpacity([Math.floor(Math.random() * 100)]);
    playMove();
  };

  return (
    <div className="mt-3 flex w-full select-none flex-col text-sm">
      <div className="space-y-3">
        {overlayOptions.map((option) => (
          <div
            key={option}
            className="hover:bg-primary hover:text-background group flex w-full justify-between px-1"
          >
            <span className="">Screen {option}</span>
            <div className="flex w-28 items-center justify-end">
              <CustomSlider
                value={
                  option === "cracks"
                    ? cracksOpacity
                    : option === "dirt"
                      ? dirtOpacity
                      : option === "fingerprints"
                        ? fingerprintsOpacity
                        : smudgesOpacity
                }
                // play ok sound on value change
                onValueChange={(value) => {
                  playValue();
                  option === "cracks"
                    ? setCracksOpacity(value)
                    : option === "dirt"
                      ? setDirtOpacity(value)
                      : option === "fingerprints"
                        ? setFingerprintsOpacity(value)
                        : setSmudgesOpacity(value);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex w-full space-x-2">
        <Button onClick={onClear}>Clear</Button>
        <Button onClick={onMaximize}>Maximize</Button>
        <Button onClick={onShuffle}>Shuffle</Button>
      </div>
    </div>
  );
};
