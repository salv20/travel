
const Subscription = () => {
    return (
        <section className='py-10 bg-places text-center space-y-5 px-2'>
            <div className="bg-subscribe py-10 rounded-lg border-2 mx-3 sm:w-3/4 sm:mx-auto lg:w-1/2 text-center">
                <p className="text-lightgray font-semibold leading-loose">Subscribe to get information, latest news and other <span className='md:block'>interesting offers about easyTravel.</span></p>
                <div className="space-y-2 sm:space-x-3 sm:space-y-0 sm:flex sm:px-5">
                    <input type="email" placeholder="your email" className="capitalize bg-gray-200 outline-none py-1.5 w-11/12" />
                    <button type="submit" aria-label="subscription" className="bg-darkpink w-1/2 py-1.5 rounded-sm">Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default Subscription


//    <div className="space-y-2 sm:space-y-0 sm:flex space-x-5 justify-center pt-4 px-3">
{/* <input type="email" placeholder="your email" className="capitalize bg-gray-200 py-2 px-14  outline-none" />
            <div className="bg- subscribe py-10 rounded-lg border-2 mx-4 md:mx-20 lg:mx-40 xl:mx-56">
<button type="submit" aria-label="subscription" className="bg-darkpink py-2 px-10">Subscribe</button>
</div> */}