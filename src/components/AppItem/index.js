// Write your code here

import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appId, appName, imageUrl, category} = eachApp
  return (
    <li className="list-styling">
      <img src={imageUrl} alt={appName} className="app-image-styling" />
      <p className="app-name-styling">{appName}</p>
    </li>
  )
}

export default AppItem
