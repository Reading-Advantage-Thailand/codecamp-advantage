import Hero from "../../components/Hero";

export default function GetStarted() {
  return (
    <>
      <Hero
        title="Get Started with Codecamp Advantage"
        subtitle="Your journey to becoming a skilled web developer starts here"
      >
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to Codecamp Advantage, your gateway to a thriving career in web development! We're excited to embark on this transformative journey with you. Follow these steps to begin your adventure into the world of coding:
        </p>
      </Hero>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Get Started</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Path to Becoming a Web Developer
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Follow these steps to begin your journey with Codecamp Advantage:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  1. Choose Your Path
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Select the course that aligns with your goals. Contact our admissions team at admin@reading-advantage.com to discuss your options.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  2. Secure Your Spot
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Units 0-1 are free! For subsequent units, provide payment information. We offer flexible payment plans.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  3. Set Up Your Account
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Use your GitHub credentials to access our platform. Create an account at <a href="https://github.com" className="text-indigo-600 hover:underline">github.com</a> if you don't have one.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Next Steps</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Embrace Your Learning Journey
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  4. Embrace AI-Enhanced Learning
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Engage with integrity, ask questions, dive deep into exercises, and reflect on your learning.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  5. Connect with Your Coding Community
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Participate in forums, join study groups, and attend virtual meetups (coming soon).</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  6. Look to Your Bright Future
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Visualize building innovative applications, collaborating with developers worldwide, and continuously growing in the field.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Begin?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The world of web development is waiting for you. Your next great achievement, your "aha!" moment, your future career breakthrough—it all starts with the first step.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/courses"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                aria-label="Start your learning journey with Codecamp Advantage"
              >
                Start Learning
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
