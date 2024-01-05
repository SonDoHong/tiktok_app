
function HeaderOnly({ children }) {
    return (
        <div>
            <h2>Header</h2>

            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default HeaderOnly