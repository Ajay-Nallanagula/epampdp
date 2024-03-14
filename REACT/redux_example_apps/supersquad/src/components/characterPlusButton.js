const CharacterPlusButton = ({ label, onClick }) => {
    return <button onClick={onClick}>
        <span style={{ padding: '2px' }}>{label}</span> <span><b>+</b></span>
    </button>
}

export default CharacterPlusButton