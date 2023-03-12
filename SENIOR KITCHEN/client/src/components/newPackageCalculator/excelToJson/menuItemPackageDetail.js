const MenuItemPackageDetail = ({ menuKey, menuPackValues }) => {
    const meuKeys = Object.keys(menuPackValues)
    meuKeys.sort((a, b) => a > b ? 1 : (b > a ? -1 : 0))

    return (
        <div className='menuDetailsDiv'>
            <h3> {menuKey}</h3>
            <ul>
                {
                    meuKeys.map(menuPackKey => {
                        return <li key={menuPackKey}><b>{menuPackKey}</b>: {menuPackValues[menuPackKey]}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default MenuItemPackageDetail