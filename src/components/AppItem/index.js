import './index.css'

const AppItem = props => {
  const {applist} = props
  const {appName, imageUrl} = applist

  return (
    <li className="bg-app-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="heading">{appName}</p>
    </li>
  )
}

export default AppItem
