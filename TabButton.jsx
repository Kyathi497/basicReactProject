

export default function TabButton({title,onSelect,isSelected}){
    return (
        <>
            <button className={isSelected ? "active": ""} onClick={onSelect}>{title}</button>
        </>
    )
}