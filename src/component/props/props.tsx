
interface ComponentProps{
    name: string;
}

export function Props({name}: ComponentProps) {
    return <div>hallo nama saya{name} </div>;
}