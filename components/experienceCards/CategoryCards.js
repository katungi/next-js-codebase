export default function CategoryCard({ category }) {
  return (
    <div className="flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-4 xl:-mx-5">
      <div className="my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-3 md:px-3 md:w-full lg:my-4 lg:px-4 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
        <Card src={category.image} title={category.name} />
      </div>
    </div>
  );
}
