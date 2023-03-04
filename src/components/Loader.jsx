import spinner from './icons/spinner.gif'

const Loader = () => {
  return (
    <div className='loader'>
        <img src={spinner} alt="" />
        <h3>Fetching Data</h3>
    </div>
  )
}

export default Loader