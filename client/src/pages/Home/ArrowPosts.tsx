import { HiArrowLongRight } from "react-icons/hi2";

function ArrowPosts() {
  return (
    <div className="flex flex-row items-center space-x-4">
      <div className="w-1/3 h-2 bg-purple-soft"></div>
      <p className="text-purple-soft text-2xl underline cursor-pointer">My Posts</p>
    </div>
  );
}

export default ArrowPosts;
