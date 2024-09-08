import Link from 'next/link';
import Image from 'next/image';

const baseUrl = process.env.NODE_ENV === 'production' 
  ? '/website' 
  : '';

export default function FullBioPage() {
  return (
    <main className="bg-customYellow min-h-screen py-10 px-4">
      <section className="font-body bg-white w-full max-w-4xl mx-auto p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6 md:sticky md:top-6">
            <Image
              src={`${baseUrl}/images/bio.jpg`}
              alt="Murat Orhan"
              width={200}
              height={200}
              className="rounded-full mb-4 md:mb-0 md:mr-6"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-customBlue">Full Biography</h1>
          </div>
        </div>
        
        <div className="space-y-6 text-gray-700">
          <p>
            I&apos;m Murat Orhan, a versatile professional with a diverse background that spans IT support, entrepreneurship, and business management. My journey with technology began early, as I tinkered with a Pentium i386 and DOS, igniting a lifelong passion for computers and problem-solving. Over the years, I&apos;ve honed my skills in various technical and business environments, driven by a desire to optimize processes and deliver creative solutions.
          </p>

          <p>
            I&apos;ve had the privilege of working in multiple roles across the IT and business landscape. One of my key experiences was with Apple as an At Home Technical Advisor, where I provided top-tier customer support. This role not only strengthened my problem-solving skills but also taught me the importance of clear communication and customer satisfaction in technical environments.
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

          <h2 className="text-2xl font-bold text-customBlue mt-8 mb-4">Beyond Work</h2>

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

        <Link href="/" className="inline-block mt-8 bg-customBlue text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg">
          Back to Home
        </Link>
      </section>
    </main>
  );
}
