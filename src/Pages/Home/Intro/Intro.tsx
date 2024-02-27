

const Intro = () => {
    return (
        <div className='md:flex justify-center lg:gap-56 gap-14 md:px-5 pl-2 lg:py-24 md:pt-14 pt-5'>
            <div className="">
                <h1 className='lg:text-6xl text-4xl font-bold pb-4'>Welcome to <br/> Gnesta Indiska </h1>
                <p className='lg:text-2xl text-xl font-semibold pb-1'>Gnesta Indiska is located on Folkungagatan 84 in Södermalm.</p>
                <p className='lg:text-xl font-normal pb-3'>Stop by and enjoy our awesome shots and amazing food – chock-full of garlic!</p>
                <button className='btn btn-warning'>Call For Order : +8888888888</button>
            </div>
            <div className="bg-amber-400 text-center w-80 text-2xl md:pt-14 pt-8">
                <h1 className='pb-4'>Opening Hour</h1>
                <p>Mân-fre 11:00-21:00</p>
                <p>Lör-sön 13:00-21:00</p>
            </div>
        </div>
    );
};

export default Intro;