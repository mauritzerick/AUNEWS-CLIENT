const card = (props) => {
  return(
    <div class="card">
      <div class="imageDiv">
        <img class="profile" src={props.image} alt="Founder"/>
      </div>
      <div class="infoDiv">
        <div><h3>{props.about}</h3></div>
        Name: <span class="name"> { props.name } </span>
        <br/>
        Designation: <span class="name"> { props.designation } </span>
        <br/>
        Linkedin: <span class="name"><a href={ props.linkedin}> {props.linkedin} </a></span>
      </div>
      <hr/>
    </div>
  )
}
export default card;
