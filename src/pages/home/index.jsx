export default function HomePage(){
    return(
        <>
        <div className="bg-cover bg-[url('https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg')] h-[600px] rounded-b-lg flex justify-center items-center font-bold text-white text-xl text-center">
           <div className="flex flex-col justify-center items-center">
            <img src={"/public/fotoku.jpg"} alt="" className="h-[300px] lg:h-[400px] rounded-lg"/>
            <h1 className="mt-5 text-2xl" id="typewriter">
            Halo nama saya Prabu
           </h1>
           </div>
        </div>
        <div className="text-center">
            <h2 className="font-bold mt-5 text-xl">Tentang Saya</h2>
            <div className="font-roboto m-5">
                <p>Saya merupakan siswa program Full Stack Web Development dari Purwadhika Digital Technology School. Sebelum masuk Purwadhika saya merupakan lulusan Telkom University jurusan D3 Rekayasa Perangkat Lunak Aplikasi </p>
            </div>
        </div>
        <hr/>
        <h1 className="font-bold text-lg text-center mt-5">Proyek</h1>
        <div className="grid grid-rows-2">
            <div className="max-w-xs md:max-w-md lg:max-w-xl rounded overflow-hidden shadow-2xl m-auto mt-4 mb-4">
                <img src={"/public/smartdivitar.png"} alt="" className="h-[300px] w-[300px] p-5 m-auto"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Smart Divitar
                    </div>
                    <p>Sebuah aplikasi berbasis Augmented Reality yang dapat melakukan interaksi dengan
                    avatar digital. Di mana, seseorang yang merasa butuh teman berbagi cerita dapat
                    berdialog dengan avatar tiga dimensi yang memiliki kecerdasan buatan yang bisa
                    melakukan dialog seperti layaknya dengan manusia di dunia nyata.</p>
                </div>
            </div>
            <div className="max-w-xs md:max-w-md lg:max-w-xl rounded overflow-hidden shadow-2xl m-auto mt-4 mb-4">
                <img src={"/public/bookforyou.jpeg"} alt="" className="h-[300px] w-[300px] p-5 m-auto"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Book For You
                    </div>
                    <p>Aplikasi untuk memberikan review dan berbagi pengalaman dari buku-buku yang telah dibaca oleh reviewer. Kemudian dalam aplikasi ini pengguna lain dapat menambahkan komentar dan like pada ulasan buku yang mereka baca.</p>
                </div>
            </div>
        </div>
        <div className="my-24 mx-auto md:px-6 bg-gradient-to-r from-cyan-500 to-blue-500 h-[auto] py-1">
            <section className="mb-32 text-center">
                <div className="mx-auto max-w-[700px] md:px-3">
                    <h2 className="mb-12 text-3xl font-bold text-white py-5">
                        Contact Me
                    </h2>
                    <form action="">
                        <div className="relative mb-6">
                            <input type="text" className="peer block min-h-[auto] w-full rounded border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" placeholder="Input your name"/>
                            <label htmlFor="" className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Name</label>
                        </div>
                        <div className="relative mb-6">
                            <input type="text" className="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" placeholder="Input your name"/>
                            <label htmlFor="" className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email</label>
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                        <textarea
                        className="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"></textarea>
                        <label
                        for="exampleFormControlTextarea1"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Message</label>
                    </div>
                    <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 inline-block w-full rounded bg-green-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Send
                    </button>
                    </form>
                </div>
            </section>
        </div>
        <footer className="text-center">© All Copyright by Prabu Addin Almuhasibi</footer>
        </>
    )
}

