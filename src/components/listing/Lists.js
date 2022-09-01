import ListRow from "./ListRow";

export default function Lists({ Lists }) {
    return (

             Lists.map((List, Key) => (
                <ListRow key={Key} Title={List.Title} Data={ List.Data } />
            ))
    );  
}