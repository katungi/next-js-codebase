export default function ExperienceSkeletons({ type = "short" }) {
  return (
    <div className="flex">
      <div className="w-12 h-12 mr-3 bg-gray-200 rounded-full" />

      <div className="flex flex-col flex-1 min-w-0">
        <div className="w-1/3 h-4 mt-1 bg-gray-200 rounded" />

        <div className="mt-1 mb-1 space-y-1">
          {type === "short" ? (
            <div className="w-1/2 h-4 pt-1">
              <div className="h-full bg-gray-200 rounded"></div>
            </div>
          ) : (
            <>
              <div className="w-11/12 h-4 pt-1">
                <div className="h-full bg-gray-200 rounded"></div>
              </div>
              <div className="w-2/3 h-4 pt-1">
                <div className="h-full bg-gray-200 rounded"></div>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between h-5 mt-3"></div>
      </div>
    </div>
  );
}
