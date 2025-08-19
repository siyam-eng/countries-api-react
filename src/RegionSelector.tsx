import type { ChangeEvent } from "react";

function RegionSelector({
  selectedRegion,
  onSelectionChange,
  className,
  regions,
}: {
  selectedRegion: string;
  onSelectionChange: (e: ChangeEvent) => void;
  className: string;
  regions: Array<string>;
}) {
  return (
    <div className={`mb-9 max-sm:mx-auto max-sm:w-8/10 ${className} `}>
      <select
        value={selectedRegion}
        onChange={onSelectionChange}
        name="region"
        id="region-select"
        className="shadow-grey-400/20 grid w-7/10 grid-cols-[10%_90%] rounded-md bg-white p-3 shadow-md focus:outline-none sm:w-full dark:bg-blue-900 dark:shadow-none"
      >
        {/* Add state to filter out countries later */}
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option value={region}>{region}</option>
        ))}
      </select>
    </div>
  );
}

export default RegionSelector;
