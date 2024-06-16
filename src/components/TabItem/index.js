// Write your code here

import './index.css'

const TabItem = props => {
  const {eachTabItem, clickTabItem, isActiveTab} = props
  const {tabId, displayText} = eachTabItem
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeStyling = isActiveTab ? 'is-active-styling' : ''
  return (
    <li className="list-item-styling">
      <button
        className={`button-styling ${activeStyling}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
