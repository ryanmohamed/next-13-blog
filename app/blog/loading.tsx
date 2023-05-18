import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className="w-full h-[calc(100vh - 6em)] flex justify-center items-center bg-blue-200">
      <ClipLoader
        color={"yellow"}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
