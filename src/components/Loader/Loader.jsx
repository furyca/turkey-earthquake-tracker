import style from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={style.loader}>
        <img src='/icons/spinner.gif' alt="" />
        <h3>Fetching Data</h3>
    </div>
  )
}

export default Loader