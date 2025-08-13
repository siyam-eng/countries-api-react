function RegionSelector({ regions }) {
  return (
    <div className="mx-auto mb-9 w-8/10">
      <select
        name="region"
        id="region-select"
        className="shadow-grey-400/20 grid w-6/10 grid-cols-[10%_90%] rounded-md bg-white p-4 shadow-md focus:outline-none"
      >
        {/* Add state to filter out countries later */}
        <option selected>Filter by Region</option>
        {regions.map((region) => (
          <option value={region}>{region}</option>
        ))}
      </select>
    </div>
  );
}

export default RegionSelector;
