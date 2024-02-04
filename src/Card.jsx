export default function Card({ title, year, director }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{director}, <span>{year}</span></p>
        </div>
    )
}