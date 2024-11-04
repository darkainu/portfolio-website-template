import ParallaxSection from '../components/ParallaxSection';
import Link from 'next/link';
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
                    src={`${baseUrl}public/images/bio.jpg`}
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
                  My name is Murat Orhan, a versatile professional with a diverse background that spans IT support, entrepreneurship, and business management. My journey with technology began early, as I tinkered with a Pentium i386 and DOS, igniting a lifelong passion for computers and problem-solving. Over the years, I&apos;ve honed my skills in various technical and business environments, driven by a desire to optimize processes and deliver creative solutions.
                </p>
                
                <p>
                  I have had the privilege of working in multiple roles across the IT and business landscape. One of my key experiences was with Apple as an At Home Technical Advisor, where I provided top-tier customer support. This role not only strengthened my problem-solving skills but also taught me the importance of clear communication and customer satisfaction in technical environments.
                </p>

                <p>
                  In 2014, I co-founded Welfare Abroad, a medical travel company, followed by Made of Earth, a supplement business. For both ventures, I utilized my technical knowledge to build websites, create CRM systems, and develop custom ticketing solutions. I also led teams, designed workflow processes, and optimized business operations. My experience spans from IT support and technical troubleshooting to sales, marketing, and customer service, with a particular focus on process optimization and team management.
                </p>

                <p>
                  While pursuing a post-baccalaureate degree in Computer Science and Information Management at Douglas College, I expanded my technical expertise to include programming languages like Python, Java, JavaScript, C#, and Flutter. I&apos;ve always sought to bridge the gap between business needs and technical implementation—whether by building custom websites using WordPress and TypeScript or designing PowerApps to streamline workflows.
                </p>

                <p>
                  Currently, I&apos;m looking to leverage this unique combination of skills in an IT-centric role, where I can continue optimizing processes and creating innovative solutions. I thrive on learning, adapting, and finding new ways to apply technology to solve business problems.
                </p>
              </div>
              <h2 className="text-2xl font-bold text-customBlue mt-8 mb-4 border-b-2 border-customBlue/20 pb-2">
                Beyond Work
              </h2>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md">
                <p>
                  On a personal note, I have always found joy in activities that encourage creativity and strategic thinking. I grew up playing role-playing games and have a deep love for sandbox-style video games, where you can build and shape worlds as you wish—mirroring the problem-solving skills I bring to my professional life. I also have a passion for street basketball, having participated in local tournaments in my earlier years, and I maintain my love for physical activity through long walks, biking, frisbee golf, and traveling.
                </p>

                <p>
                  Music has been a major influence in my life, and in the early 2000s, I enjoyed DJing for a discussion board using Winamp plugins. These days, I still find myself deeply connected to music and often explore new genres while relaxing or working. I also love to read comics and spend time with my family, especially with my daughter, who constantly reminds me of the importance of curiosity and playfulness in life.
                </p>

                <p>
                  If you&apos;re interested in learning more about my work, my passions, or discussing potential collaborations, feel free to connect with me or explore my site further. I&apos;m always open to conversations and opportunities that blend creativity, technology, and business.
                </p>
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