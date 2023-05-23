type GreetProps = {
    children: React.ReactNode
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}