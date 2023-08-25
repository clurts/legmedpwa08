import Localbase from "localbase";

const Localbs = () => {
    let myDatabase = new Localbase("myDatabase");

    const insertIntoDB = () => {
        myDatabase.collection("users").add({
            id: 23456789,
            name: "Carsten",
            age: 27,
        });
    };

    const getFromDB = () => {
        myDatabase
            .collection("users")
            .get()
            .then((users) => console.log(users));
    };

    const removeCollection = () => {
        myDatabase.collection("users").delete();
    };

    return (
        <>
            <button onClick={insertIntoDB}>
                Tilføj en bruger til databasen
            </button>
            <button onClick={getFromDB}>Hent alle brugere fra databasen</button>
            <button onClick={removeCollection}>
                Slet alle brugere fra databasen
            </button>
        </>
    );
};

export default Localbs;
