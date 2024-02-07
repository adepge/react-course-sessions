export default function Card({ title, year, director }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{director}</p>
            <p><span>{year}</span></p>
        </div>
    )
}

