import Card from "../card";

export default function CategoryCard({ category }) {
  return (
     <Card src={category.image} title={category.name} />
  );
}
