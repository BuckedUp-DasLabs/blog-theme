import s from "./TitleContainer.module.scss";

const TitleContainer = ({category,title}) => {
  return (
    <div className={s.titleContainer}>
      <a href="./category.html" className={`categoryTitle ${s.categoryTitle}`}>
        {category}
      </a>
      <a href="./post.html" className="h3">
        {title}
      </a>
    </div>
  )
}

export default TitleContainer