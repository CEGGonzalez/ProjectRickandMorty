import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.cardList}>
      {characters?.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
}
 
