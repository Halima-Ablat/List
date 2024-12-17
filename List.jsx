import PropTypes from "prop-types";

function List(props) {
  const itemList = props.items;
  const category = props.category;

  function List(props) {
    
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  itemList.sort((a, b) => a.name.localeCompare(b.name));
  // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  // const listLowCalFruits = lowCalFruits.map((fruit) => (
  //   <li key={fruit.id}>
  //     {fruit.name} - {fruit.calories}
  //   </li>
  // ));

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {capitalizeFirstLetter(item.name)} - {item.calories}
    </li>
  ));
  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "Category",
  items: [],
};
export default List;
