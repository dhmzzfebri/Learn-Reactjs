interface cardPorps{
    title: string;
    content: string;
}
export function Card({title,content}:cardPorps){
    return(
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}