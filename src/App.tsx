import CampaignManagementApp from './CampaignManagementApp';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Campaign App
        </h1>
        <p className="text-gray-600 text-center">
          Tailwind CSS is now integrated! 🎉
        </p>
        <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
          Get Started
        </button>
        <CampaignManagementApp/>
      </div>
    </div>
  )
} 

export default App;
