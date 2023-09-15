import Button from "./Button";

const Header = (props) => {
    const onclick = () => {
      console.log('clicked')
    }
  return (
      <header className="header">
          <h1>{props.title}</h1>
          <Button color='green' text='Add' onClick={onclick}/>
      </header>



  )
}
export default Header