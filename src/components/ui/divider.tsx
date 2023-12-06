interface DividerProps {
    orientation?: 'horizontal' | 'vertical'
    size?: number
}

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', size }) => {
    if (orientation === 'horizontal')
        return (
            <div
                className="h-[1px] w-full bg-zinc-600"
                style={{
                    width: size,
                }}
            />
        )
    return (
        <div
            className="h-full w-[1px]  bg-zinc-600"
            style={{
                height: size,
            }}
        />
    )
}

export default Divider
