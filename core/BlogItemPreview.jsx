import Link from "next/link";

export const BlogItemPreview = ({ title, img, categories, id }) => {
  return (
    <Link href={`/blog/posts/${id}`}>
      <div className="flex w-full cursor-pointer flex-col gap-6">
        <div className="relative h-72 2xl:h-80 ">
          <img
            src={img}
            alt={"blogimg"}
            className="rounded-2xl h-[275px] w-[371px]"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h5 className="font-heading text-3xl tracking-tighter">{title}</h5>
        </div>
        <div className="flex gap-2">
        
            <span
              className="rounded-md  bg-white-bgMuted px-3 py-1 font-medium capitalize"
             
            >
              {categories}
            </span>
        </div>
      </div>
    </Link>
  );
};
