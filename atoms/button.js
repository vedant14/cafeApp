export default function Button({ children }) {
  return (
    <button className="bg-white w-2/3 p-3 drop-shadow-[4px_4px_0px_#D1A757] border border-brand-green rounded-sm">
      <p className="font-semibold">{children}</p>
    </button>
  );
}
