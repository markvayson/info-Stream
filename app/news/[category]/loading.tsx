function loading() {
  return (
    <div>
      <h1>Loading...</h1>

      <div className=" p-2  w-[95%]   grid grid-cols-1 gap-2 md:grid-cols-3">
        {[...new Array(100)].map((pr, index) => (
          <div className=" h-32 flex  gap-2 dark:bg-gray-700 bg-gray-200 rounded-lg p-2">
            <div className="animate-pulse bg-gray-300 dark:bg-gray-800  rounded-xl h-full w-1/5 "></div>
            <div className="animate-pulse h-full gap-4 flex flex-col pt-2 w-4/5">
              <h1 className="rounded-full bg-gray-300 dark:bg-gray-800 w-full h-6"></h1>
              <div className="w-full flex flex-col gap-5">
                <div className="flex gap-4 justify-between">
                  <span className="bg-gray-300 dark:bg-gray-800 w-3/5 rounded-full h-4"></span>
                  <span className="bg-gray-300 dark:bg-gray-800 w-2/5 rounded-full h-4"></span>
                </div>
                <div className="bg-gray-300 dark:bg-gray-800 rounded-full w-full h-4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default loading;
