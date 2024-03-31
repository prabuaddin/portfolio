import { useTypewriter } from "react-simple-typewriter";
export default function HomePage() {
  const [text] = useTypewriter({
    words: [
      "Stepping into the tech world as a fresh graduate from Software Engineering, armed with passion, knowledge, and a hunger to innovate. Ready to code my way to success! 👨🏻‍💻",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  });

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww)",
        }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello everyone</h1>
            <p className="mb-5">{text}</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg text-center mt-5">About Me</h1>
        <div className="divider w-20 m-auto"></div>
        <p className="px-5 text-center">
          Currently, I have completed my studies from the diploma of application
          software engineering at Telkom University and am continuing my
          undergraduate extension education at Binus University and also I am
          currently attending the Job Connector Full Stack Web Development
          program at Purwadhika. I previously had an internship experience as a
          game programmer at PT Konsep Allgoritma Indonesia and developed a
          simulation game. I have an interest in software development, but
          currently focus more on web development. To support this, I study
          HTML, CSS, Javascript, as well as frameworks or libraries that are
          widely used by the industry today. However, it is possible that I will
          take a job related to AR/VR Development because I have experience in
          developing this application when completing the final project for
          graduation requirements from my college major.
        </p>
      </div>
      <h1 className="font-bold text-lg text-center mt-5">Proyek</h1>
      <div className="divider w-20 m-auto"></div>
      <ul className="timeline timeline-snap-icon px-3 max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2022</time>
            <div className="text-lg font-black">Book For You</div>
            It is an application to provide reviews and share experiences from
            books that have been read by reviewers. Then in this application
            other users can add comments and likes to the book reviews they
            read.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">Smart Divitar</div>
            This project was done to fulfill the graduation requirements of my
            college major. This project is an augmented reality-based
            application integrated with chatGPT. This application has a theme to
            reduce the stress of its users by chatting with a three-dimensional
            avatar designed as a conversation partner.
          </div>
          <hr />
        </li>
      </ul>
      <h1 className="font-bold text-lg text-center mt-5">Service</h1>
      <div className="divider w-20 m-auto"></div>
      <div className="flex flex-col items-center justify-center gap-7 p-10 lg:flex-row">
        <div className="card w-96 bg-base-100 shadow-lg hover:shadow-black">
          <figure className="px-10 pt-10">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg"
              alt="Website Wallpaper"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Website Development</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-lg hover:shadow-black">
          <figure className="px-10 pt-10">
            <img
              src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais"
              alt="Mobile Wallpaper"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mobile Development</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-lg hover:shadow-black">
          <figure className="px-10 pt-10">
            <img
              src="https://wallpapers.com/images/hd/game-development-2000-x-1333-wallpaper-i3eyywjsfmou1hm5.jpg"
              alt="Game Development Wallpaper"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Game Development</h2>
          </div>
        </div>
      </div>
    </>
  );
}
