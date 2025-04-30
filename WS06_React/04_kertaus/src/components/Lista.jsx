import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Lista = () => {
  // lista on taulukko, joka sisältää objektit, joissa on id, nimi ja checked-ominaisuus
  // setLista on funktio, joka päivittää listan tilan
  const [lista, setLista] = useState([
    { id: 1, nimi: "Tauno 1", checked: true },
    { id: 2, nimi: "Tauno 2", checked: false },
    { id: 3, nimi: "Tauno 3", checked: false },
    { id: 4, nimi: "Tauno 4", checked: false },
    { id: 5, nimi: "Tauno 5", checked: false },
  ]);

  // handleCheck on funktio, joka vaihtaa objektin checked-tilan. id on objektin id, jota halutaan muuttaa
  const handleCheck = (id) => {
    const newLista = lista.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setLista(newLista);
  };

  // handleDelete on funktio, joka poistaa objektin listasta. id on objektin id, jota halutaan poistaa
  // confirm on funktio, joka kysyy käyttäjältä vahvistusta ennen poistamista
  const handleDelete = (id) => {
    confirm(
      "Poistetaanko varmasti id:llä: " +
        id +
        " niminen " +
        lista.find((item) => item.id === id).nimi +
        "?"
    );
    const newLista = lista.filter((item) => item.id !== id);
    setLista(newLista);
  };

  // renderoidaan lista, joka sisältää objektit, joissa on id, nimi ja checked-ominaisuus
  // lista.map on funktio, joka käy läpi kaikki objektit ja luo niistä listan
  return (
    <div>
      {lista.length ? (
        <ul>
          {lista.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.nimi}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Lista on typötyhjä</p>
      )}
    </div>
  );
};

export default Lista;
