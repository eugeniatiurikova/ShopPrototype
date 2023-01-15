export const Pagination = ({ visFirst, visCount, active, max }) => {

    const pages = () => {
        let pg = [];
        for (let i = 0; i < visCount; i++) {
            pg[i] = i + (visFirst ? visFirst : 1);
        }
        return pg
    }

    if (active < visFirst) active = visFirst;
    if (active > (visFirst + visCount)) active = visFirst + visCount;

    return (<nav className="pagination">
        <ul className="pagination-list">
            <li className="pagination-item">
                <button className="pagination-link pagination_arrow">
                    <i className="fas fa-chevron-left"></i>
                </button>
            </li>
            {
                pages().map(item => {
                    return (<li key={item} className="pagination-item">
                        <button className={`pagination-link${(item === active) ? ' pagination-link-active' : ''}`}>{item}</button>
                    </li>)
                })
            }
            <li className="pagination-item pagination-link pagination-item-separator">
                <span>....</span>
            </li>
            <li className="pagination-item">
                <button className="pagination-link">{max}</button>
            </li>
            <li className="pagination-item">
                <button className="pagination-link pagination_arrow">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </li>
        </ul>
    </nav>)
}