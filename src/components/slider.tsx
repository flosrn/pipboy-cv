import * as Slider from "@radix-ui/react-slider";

export type SliderProps = {};

export const CustomSlider = (props: SliderProps) => {
  return (
    <Slider.Root
      className="border-primary relative flex h-3 w-[200px] touch-none select-none items-center border"
      defaultValue={[50]}
      max={100}
      step={1}
    >
      <Slider.Track className="relative h-3 grow bg-transparent">
        <Slider.Range className="absolute h-full" />
      </Slider.Track>
      <Slider.Thumb
        className="bg-primary block h-3 w-3 focus:outline-none"
        aria-label="Slider"
      />
    </Slider.Root>
  );
};
