import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [text, setText] = useState("");
  const fullText = "Welcome/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 5000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-3xl font-mono font-bold text-center text-lime-200">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[3px] bg-gray-700 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-gradient-to-r from-orange-500 to-green-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar" />
      </div>
    </div>
  );
};

export default LoadingScreen;
