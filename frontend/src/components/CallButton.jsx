import { VideoIcon } from "lucide-react";

function CallButton({ handleVideoCall }) {
  return (
    <div className="p-3 border-b flex items-center justify-end max-w-7xl mx-auto w-full absolute top-0">
      <button onClick={handleVideoCall} className="btn btn-sm text-white bg-purple-500 hover:bg-purple-600">
        <VideoIcon className="size-6" />
      </button>
    </div>
  );
}

export default CallButton;