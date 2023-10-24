import { useContext } from 'react'
import { FaPlay } from 'react-icons/fa'
import { appcontext } from '../routes/landing.route'
import { Link } from 'react-router-dom'
const Hero = () => {
    const { clickFunc } = useContext(appcontext)
    return (
        <section className='md:flex py-5 md:py-14 px-6 gap-y-10 bg-heroone text-center md:text-left' onClick={clickFunc}>
            <div className='space-y-5 md:w-1/2'>
                <h1 className='uppercase font-bold text-darkpink '>best destination around the world</h1>
                <p className='font-semibold  text-xl md:w-3/4 leading-relaxed'>Travel, enjoy and live a new and full life.</p>
                <p className='md:w-3/4 md:leading-relaxed '>We make travel planning easy, our services includes;
                    flight bookings,
                    helping you pick out the best destinations,
                    checking the average weather conditions of your preferred travel options.
                </p>
                <p className='uppercase font-bold text-darkpink md:pt-4'>“Travel far enough, you meet yourself.”</p>

                <div className='space-y-4 md:flex md:space-x-5 md:space-y-0 md:pt-6'>
                    <button type="button" className='bg-orange px-4 py-2.5 capitalize rounded-lg text-white font-semibold '>
                        <Link to='destination'>find out more</Link>
                    </button>
                    <div className="flex space-x-4 justify-center md:justify-normal">
                        <button type="button" className='bg-lightorange text-white rounded-full p-3.5' >
                            <Link to='video'><FaPlay /> </Link>
                        </button>
                        <Link to='video' className='py-1 text-lg block'>watch video</Link>
                    </div>
                </div>
            </div>
            <div>
                <img src={'/cartoon.png'} alt="" className='md:w-3/4 w-1/2 mx-auto' />
            </div>
        </section>
    )
}

export default Hero
