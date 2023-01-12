export const Pagination = () => {
    return (<nav className="pagination">
        <ul className="pagination-list">
            <li className="pagination-item">
                <button className="pagination-link pagination_arrow">
                    <i className="fas fa-chevron-left"></i>
                </button>
            </li>
            <li className="pagination-item">
                <button className="pagination-link pagination-link-active">1</button>
            </li>
            <li className="pagination-item">
                <button className="pagination-link">2</button>
            </li>
            <li className="pagination-item">
                <button className="pagination-link">3</button>
            </li>
            <li className="pagination-item">
                <button className="pagination-link">4</button>
            </li>
            <li className="pagination-item">
                <button className="pagination-link">5</button>
            </li>
            <li className="pagination-item">
                <button className="pagination-link">6</button>
            </li>
            <li className="pagination-item pagination-link pagination-item-separator">
                <span>....</span>
            </li>
            <li className="pagination-item">
                <button className="pagination-link">20</button>
            </li>
            <li className="pagination-item">
                <button className="pagination-link pagination_arrow">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </li>
        </ul>
    </nav>)
}