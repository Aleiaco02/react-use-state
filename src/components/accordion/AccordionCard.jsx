const AccordionCard = (props) => {
    const { titolo, descrizione, isSelected, onToggle } = props

    return (
        <>
            <div className="accordion">
                <a href="#">
                    <div className="bottone" onClick={onToggle}>{titolo}</div>
                </a>
            </div>

            <div className="container-testo">
                {isSelected &&
                    <div className="card">
                        <h3>{titolo}</h3>
                        <p>{descrizione}</p>
                    </div>}
            </div>
        </>
    )
}

export default AccordionCard