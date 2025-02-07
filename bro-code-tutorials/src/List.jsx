function List() {
    const fruits = [{id: 1, name: 'Apple', calories: 95}, {id: 2, name: 'Banana', calories: 105}, {id: 3, name: 'Orange', calories: 45}, {id: 4, name: 'Mango', calories: 37}, {id: 5, name: 'Kiwi', calories: 61}];

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name in ascending order, alphabetically
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // Sort by name in descending order, alphabetically
    //fruits.sort((a, b) => a.calories - b.calories); // Sort by calories in ascending order
    //fruits.sort((a, b) => b.calories - a.calories); // Sort by calories in descending order

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);

    return (<ul>{listItems}</ul>);
}

export default List;