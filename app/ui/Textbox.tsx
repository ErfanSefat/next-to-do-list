export default function Textbox() {
  return (
    <div className="flex p-1 text-lg rounded-lg bg-box text-primary-text mb-4  fixed bottom-0">
      <div className="px-3 mr-1 pt-[8px]">+</div>
      <input
        type="text"
        className="p-2 bg-transparent focus:outline-none w-[800px]"
        placeholder="Add a task"
      />
    </div>
  );
}
