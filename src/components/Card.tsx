export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative bg-[#FEFAE0] dark:bg-black border-t-4 border-l-4 border-r-8 border-b-8 border-black dark:border-gray-800 rounded-xl p-12 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}
