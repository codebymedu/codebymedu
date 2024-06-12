import { useFormStatus } from "react-dom";

export const AskAiMessageLoading = () => {
  // --- STATE ---

  const { pending } = useFormStatus();

  // --- RENDER ---

  return (
    <>
      {pending && (
        <div className="flex justify-center items-center dark:invert my-2  ">
          <span className="sr-only">Loading...</span>
          <div className="h-4 w-4 bg-black opacity-25 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="h-4 w-4 bg-black opacity-25 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="h-4 w-4 bg-black opacity-25 rounded-full animate-bounce" />
        </div>
      )}
    </>
  );
};
