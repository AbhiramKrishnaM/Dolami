function Sidenavbar() {
  return (
    <div className="py-5  px-6">
      <h3 className="text-2xl font-semibold mb-5">Category</h3>

      <div className="ml-4 flex  gap-10">
        <div>
          <span className="  text-lg font-normal">Human Based</span>
          <div className="flex flex-col gap-3 mt-3">
            <div>
              <input
                type="radio"
                name="radio-7"
                className="radio radio-primary mr-2"
              />
              <label className="text-lg font-medium">Male </label>
            </div>
            <div>
              <input
                type="radio"
                name="radio-7"
                className="radio radio-primary mr-2"
              />
              <label className="text-lg font-medium">Female</label>
            </div>
            <div>
              <input
                type="radio"
                name="radio-7"
                className="radio radio-primary mr-2"
              />
              <label className="text-lg font-medium">Unisex</label>
            </div>
          </div>
        </div>

        <div>
          <span className="  text-lg font-normal">
            Animal and mythical creature based
          </span>
        </div>

        <div>
          <span className="  text-lg font-normal">Robot based</span>
        </div>

        <div>
          <span className="  text-lg font-normal">Others</span>
        </div>
      </div>
    </div>
  );
}

export default Sidenavbar;
