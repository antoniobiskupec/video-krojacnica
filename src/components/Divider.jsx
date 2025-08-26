export default function Example({ children }) {
  return (
    <div className="flex items-center pt-20">
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
      <span className="bg-white px-2 text-sm text-gray-500 whitespace-nowrap">
        {children}
      </span>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  );
}
