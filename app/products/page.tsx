export default function Products() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Products</h1>
        <div className="space-y-6">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Onboard</h2>
            <p className="text-gray-700 dark:text-gray-300">
              High-converting onboarding journeys
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Decide</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Automated case management
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Lifecycle</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Continuous compliance and re-KYC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

