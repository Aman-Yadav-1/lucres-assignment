export default function TestPage() {
  return (
    <div className="min-h-screen bg-red-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">Tailwind CSS Test</h1>
      <div className="bg-blue-500 p-4 rounded-lg">
        <p className="text-white">
          If you can see this with red background, blue box, and white text,
          Tailwind CSS is working!
        </p>
      </div>
      <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Test Button
      </button>
    </div>
  );
}
