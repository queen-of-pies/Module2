import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 1, name: "Ненужная вещь" },
    { id: 1, value: 5, name: "Ложка" },
    { id: 2, value: 2, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 6, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters((prevState) => prevState.filter((count) => count.id !== id));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleDecrement = (id) => {
    const newState = counters.map((count) => {
      if (count.id === id) {
        count.value--;
      }
      return count;
    });
    setCounters(newState);
  };
  const handleIncrement = (id) => {
    const newState = counters.map((count) => {
      if (count.id === id) {
        count.value++;
      }
      return count;
    });
    setCounters(newState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
