import React ,{useState} from 'react'
import QuickCreateSection from '../components/ui/QuickCreateSection'
import TipSection from '../components/TipSection'
import GettingStartedSection from '../components/GettingStartedSection'
import PagesSection from '../components/PageSection'
import CustomLinksSection from '../components/CustomLinksSection'
const Home = () => {
     const [url, setUrl] = useState('');
      const [showTip, setShowTip] = useState(true);

  return (
     <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Connections Platform</h1>
          <div className="flex items-center space-x-2 text-teal-600">
            <span className="text-2xl">✨</span>
            <span className="text-sm">Get custom links and a complimentary domain. </span>
            <button className="underline font-medium hover:text-teal-700">Upgrade now</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <QuickCreateSection url={url} setUrl={setUrl} />
            {showTip && <TipSection 
            onClose={() => setShowTip(false)}
            title= "Bring people to your content"
            description="Create and share unique links and QR Codes to attract attention, connect with more followers, and drive traffic to your content."
            />}
            <GettingStartedSection />
          </div>
          
          <div className="space-y-6">
            <PagesSection />
            <CustomLinksSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home