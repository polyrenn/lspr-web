
const Leads = ({head, role, first, second}) => {
  return (
    <div id="Leads">
        <h4>{head}</h4>
        <h5>{role}</h5>
        <p>{first}</p>
        <p>{second}</p>
    </div>
  )
}

export default Leads