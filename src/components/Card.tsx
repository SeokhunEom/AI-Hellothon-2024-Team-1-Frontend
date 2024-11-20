import Button from "./Button";
import Tag from "./Tag";

interface CardProps {
  title: string;
  tags: string[];
  image: string;
}

function Card({ title, tags, image }: CardProps) {
  return (
    <div className="flex flex-col gap-1 space-y-4 rounded-xl bg-black-1 px-6 py-5">
      <div className="flex flex-col gap-8">
        <div className="text-xl font-semibold">{title}</div>
        <div className="flex items-end justify-between">
          <div className="flex space-x-2">
            {tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
          <Button icon="↗" variant="primary">
            기록보기
          </Button>
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className="h-48 w-full rounded-lg object-cover"
      />
    </div>
  );
}

export default Card;
