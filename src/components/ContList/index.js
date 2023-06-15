import './index.css'

const ContList = props => {
  const {contDetail, visitIt, isTrue} = props
  const {name, id} = contDetail
  // const btnName = isVisited ? 'visited' : 'visit'
  const clickIt = () => {
    visitIt(id)
  }

  return (
    <li className="list-items">
      <div className="list-cont">
        <p className="head">{name}</p>
        <p>visited</p>

        {isTrue ? (
          <p>Visited</p>
        ) : (
          <button type="button" onClick={clickIt}>
            Visit
          </button>
        )}
      </div>
    </li>
  )
}

export default ContList
