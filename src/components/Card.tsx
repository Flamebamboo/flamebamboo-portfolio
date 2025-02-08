export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-2xl opacity-10"></div>
      <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-8 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}
