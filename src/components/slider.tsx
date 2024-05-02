import * as Slider from "@radix-ui/react-slider";

export type SliderProps = {
  value: number[];
  onValueChange: (value: number[]) => void;
};

export const CustomSlider = ({ value, onValueChange }: SliderProps) => {
  return (
    <Slider.Root
      max={100}
      step={1}
      value={value}
      defaultValue={value}
      onValueChange={onValueChange}
      className="border-primary group-hover:border-background relative flex h-3 w-full touch-none select-none items-center border"
    >
      <Slider.Thumb
        className="bg-primary group-hover:bg-background block h-3 w-3 focus:outline-none"
        aria-label="Slider"
      />
    </Slider.Root>
  );
};
