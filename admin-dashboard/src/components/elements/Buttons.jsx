
export const SubmitButton = (props) => {
  const { title } = props
  return (
    <button onClick={props.onClick} className="btn btn-primary">{ title }</button>
  )
}

export const DisabledButton = ({ title }) => {
  return (
    <button 
      className="btn btn-primary"
      style={{
        filter: "opacity(0.5)",
        color: "#fff",
        fontSize: "15px", pointerEvents: 
        "none" 
      }}> { title }
    </button>
  )
}

export const LoadingButton = ({title}) => {
  title = title || 'Submitting...'
  return (
    <button className="btn btn-primary"> 
      <i className="fa fa-spinner fa-spin"></i> 
      &nbsp; &nbsp; { title }
    </button>
)
}