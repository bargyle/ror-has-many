const SingleUsersSimon = ({location}) => {
  return (
    <>
      <h1>Single simon</h1>
      <h1> {location.state.msg} </h1>
      <p>Glasses: {location.state.simon_glasses ? "has Glasses" : "No Glassescd " }</p>
    </>
  )
}
export default SingleUsersSimon
