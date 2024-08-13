export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mx-2 mb-2 font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800">
      {children}
    </button>
  );
};
