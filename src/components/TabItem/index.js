import './index.css'

const TabItem = props => {
  const {tabList, activeTab, isActive} = props
  const {displayText, tabId} = tabList
  const currentActiveTab = () => {
    activeTab(tabId)
  }

  const onActiveState = isActive ? 'active-tab' : ''

  return (
    <li>
      <button
        type="button"
        onClick={currentActiveTab}
        className={`each-tab ${onActiveState}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
