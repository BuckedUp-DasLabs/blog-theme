import s from "./Container.module.scss";
const Container = props => {
  return (
    <div className={`${props.className} ${s.container}`}>
      {props.children}
    </div>
  )
}

export default Container;