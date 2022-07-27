import loader from '../assets/loader.gif';

const Loader = () => {
  return (
    <div className='preloader'>
        <img src={loader} alt="loading" />
    </div>
  )
}

export default Loader