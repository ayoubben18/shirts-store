import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  finish: boolean;
};

const Ronotv = ({ finish }: Props) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="mb-4">
        <Image
          src="/ronotv.png"
          width={200}
          height={70}
          alt="Logo"
          className="mx-auto"
        />
      </div>
      <div className="mb-4 flex justify-center space-x-4 text-sm">
        <div className="flex items-center">
          <svg
            className="mr-1 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          SSL secured
        </div>
        <div className="flex items-center">
          <svg
            className="mr-1 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          24/7 support
        </div>
        <div className="flex items-center">
          <svg
            className="mr-1 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="14" rx="2" ry="2" width="20" x="2" y="5" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
          Payment options
        </div>
      </div>
      <div className="flex w-full items-center justify-between text-sm font-medium">
        <div className="flex items-center">
          <div className="mr-2 h-4 w-4 rounded-full bg-white" />
          Cart
        </div>
        <div className="h-px w-1/4 bg-gray-600" />
        <div className="flex items-center text-white">
          <div className="mr-2 h-4 w-4 rounded-full bg-purple-800" />
          Checkout
        </div>
        <div className="h-px w-1/4 bg-gray-600" />
        <div className={cn("flex items-center", !finish && "opacity-50")}>
          <div
            className={cn(
              `mr-2 h-4 w-4 rounded-full`,
              finish && "bg-green-500",
              !finish && "border-2 border-gray-400",
            )}
          />
          Finish
        </div>
      </div>
    </div>
  );
};

export default Ronotv;
