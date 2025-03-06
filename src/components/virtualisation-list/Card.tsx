import Tag from "./Tag";

export interface Recipie {
  name: string;
  ingredients: string[];
}

export default function Card({ name, ingredients }: Recipie) {
    return (
        <div className="recipe-card-container">
          <h1 className="recipe-title">{name}</h1>
          <div className="ingredients-container">
            {ingredients.map((ingredient: string, index: number) => (
              <Tag key={index} name={ingredient} />
            ))}
          </div>
        </div>
      );
}
