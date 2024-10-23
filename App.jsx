import List from "./List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "orange", calories: 45 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "tomato", calories: 55 },
    { id: 7, name: "patato", calories: 125 },
    { id: 8, name: "carrot", calories: 50 },
    { id: 9, name: "garlic", calories: 39 },
    { id: 10, name: "ginger", calories: 28 },
  ];

  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null}
    </>
  );
}

export default App;
