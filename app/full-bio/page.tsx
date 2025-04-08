import ParallaxSection from '@/components/ParallaxSection'
;import Link from 'next/link';
import Image from 'next/image';

const baseUrl = process.env.NODE_ENV === 'production' 
  ? '/website' 
  : '';

export default function FullBio() {
  return (
    <ParallaxSection>
      <main className="flex flex-col items-center justify-start min-h-screen p-5 pt-20">
        <div className="w-full max-w-4xl mx-auto">
          <section className="font-body bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-sm w-full p-8 rounded-xl shadow-2xl">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6">
                <div className="relative group">
                  <Image
                    src="/images/bio.webp"
                    alt="Murat Orhan"
                    width={200}
                    height={200}
                    className="rounded-full shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-customBlue to-blue-600 bg-clip-text text-transparent">
                  Career & Life
                </h1>
              </div>
            </div>
            
            {/* Biography Text */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {/* Your existing paragraphs with enhanced styling */}
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md space-y-8">
                <p>
                  loremipsum
                <p>
                loremipsum
                </p>

                <p>
                loremipsum
               </p>

                <p>
                loremipsum
                </p>

                <p>
                loremipsum
                </p>
              </div>
              <h2 className="text-2xl font-bold text-customBlue mt-8 mb-4 border-b-2 border-customBlue/20 pb-2">
                Beyond Work
              </h2>
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md">
                <div className="space-y-8">
                  <p>
                  loremipsum
                  </p>

                  <p>
                  loremipsum
                  </p>

                  <p>
                  loremipsum
                  </p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <Link 
              href="/" 
              className="inline-block mt-8 bg-gradient-to-r from-customBlue to-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-blue-600 hover:to-customBlue"
            >
              Back to Home
            </Link>
          </section>
        </div>
      </main>
    </ParallaxSection>
  );
}