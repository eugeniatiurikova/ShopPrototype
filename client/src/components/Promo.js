export const Promo = ({ title, subtitle, highlightedSubtitlePart }) => {
    return (
        <section className="promo">
            <h2 className="hidden">Promo</h2>
            <div className="promo_inside_bg"></div>
            <div className="promo_inside_title">
                <h2 className="promo_title"><span className="promo_title_big">{title}</span><br />
                    {subtitle} {highlightedSubtitlePart && <span className="promo_title_pink">{highlightedSubtitlePart}</span>}
                </h2>
            </div>
        </section>
    )
}
