import spinnerImage from './spinnerImage.gif'

function Spinner(){
    return (
      <div className="text-center">
        <img  src={spinnerImage} style={{marginBottom: "10px"}} alt="loading" />
      </div>
    )
  }


export default Spinner
