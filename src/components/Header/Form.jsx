import s from "./Form.module.scss";

const Form = ({ isActive }) => {
  return (
    <form className={`${s.form} ${isActive && s.active}`} id="header-search-form">
      <div className={s.form__flex}>
        <input type="text" id="header-search-input" placeholder="What are you looking for?" />
        <button type="submit">
          SEARCH
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path d="m702-301-43-42 106-106H120v-60h646L660-615l42-42 178 178-178 178Z" />
          </svg>
        </button>
      </div>
      <label>
        <span>SEARCH IN: </span>
        <select>
          <option>ARTICLES</option>
          <option>PRODUCTS</option>
        </select>
      </label>
    </form>
  )
}

export default Form