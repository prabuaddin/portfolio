export default function HomePage() {
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
            <p className="mb-5">
              "Stepping into the tech world as a fresh graduate from Software
              Engineering, armed with passion, knowledge, and a hunger to
              innovate. Ready to code my way to success! 👨🏻‍💻"
            </p>
          </div>
        </div>
      </div>
      <hr />
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
            The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.
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
            iMac is a family of all-in-one Mac desktop computers designed and
            built by Apple Inc. It has been the primary part of Apple's consumer
            desktop offerings since its debut in August 1998, and has evolved
            through seven distinct forms
          </div>
          <hr />
        </li>
      </ul>
      <h1 className="font-bold text-lg text-center mt-5">Service</h1>
      <div className="divider w-20 m-auto"></div>
      <div className="flex flex-col items-center justify-center gap-7 p-10 lg:flex-row">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg"
              alt="Website Wallpaper"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Website Development</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais"
              alt="Mobile Wallpaper"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mobile Development</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://wallpapers.com/images/hd/game-development-2000-x-1333-wallpaper-i3eyywjsfmou1hm5.jpg"
              alt="Game Development Wallpaper"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Game Development</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
