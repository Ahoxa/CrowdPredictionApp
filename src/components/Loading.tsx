import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Loader2 className="icon-spin" size={64} />
    </div>
  );
};

export default Loading;
