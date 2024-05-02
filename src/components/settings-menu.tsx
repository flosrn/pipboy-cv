import { CustomSlider } from "@/components/slider";

export type SettingsMenuProps = {};

export const SettingsMenu = (props: SettingsMenuProps) => {
  return (
    <div className="mt-3 flex w-full flex-col text-sm">
      <div className="flex w-full justify-between space-x-3 ">
        <span>Screen cracks</span>
        <div className="flex w-28 items-center justify-end">
          <CustomSlider />
        </div>
      </div>
    </div>
  );
};
