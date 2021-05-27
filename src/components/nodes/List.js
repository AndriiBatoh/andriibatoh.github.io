const List = ({type, children, ...props})=> {
  return type ? <ol {...props}>{children}</ol> : <ul {...props}>{children}</ul>
}

export default List