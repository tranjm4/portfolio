import React from 'react'

interface Props {
    children: React.ReactNode;
    className: string;
}

const TextBox: React.FC<Props> = ({ children, className }: Props) => {
    return (
        <div className={className + "  bg-gradient-to-br \
            from-dark-800 to-transparent via-transparent via-80% bg-opacity-70 p-3 md:p-6 lg:p-10 rounded-lg"}>
            {children}
        </div>
    )
}

export default TextBox