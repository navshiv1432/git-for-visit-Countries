const CountCont = props => {
  const {contDetailImg, RemoveIt} = props
  const {imageUrl, name, id} = contDetailImg

  const onClickBtn = () => {
    RemoveIt(id)
  }

  return (
    <li className="list-items">
      <div className="list-cont">
        <img src={imageUrl} alt="thumbnail" className="cont-img" />
        <div>
          <h1>{name}</h1>
          <button type="button" onClick={onClickBtn}>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default CountCont
