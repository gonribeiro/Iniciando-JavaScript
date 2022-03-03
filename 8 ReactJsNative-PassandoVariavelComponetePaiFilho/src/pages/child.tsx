interface Props {
    setVarParent: (text: string) => void;
    varChild: string
}

export default function child({
    setVarParent,
    varChild
}: Props) {
    const handleVarParent = (event: any) => {
        setVarParent(event.target.value);
    };

    return (
        <>
            <input
                type="text"
                placeholder='Alterar variável do componente pai pelo componente filho'
                onChange={handleVarParent}
                style={{ width: '350px' }}
            />
            <br />
            <br />
            {varChild}
        </>
    );
};