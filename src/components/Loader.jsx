import loader from '../assets/loader.gif';

const Loader = () => {
  return (
    <div className='preloader'>
      <img src={loader} className="w-full h-full object-cover" alt="loading" />
    </div>
  )
}

export default Loader