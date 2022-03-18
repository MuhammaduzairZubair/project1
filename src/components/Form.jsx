



function Form(props) {


 
    return(
        <form className="w-50" onSubmit={(event) => props.handleSubmit(event)} >
        <div className="row mb-3">
          <label for="exampleInputEmail1" className="form-label"><b>Title</b></label>
          <input type="text" onChange={(event) => props.handleTitle(event)} className="form-control" id="title"  />
          <p>{props.title}</p>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label"><b>Description</b></label>
          <input type="ptext" onChange={(event) => props.handleDescription(event)} className="form-control"  />
          <span>{props.description}</span>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary w-100" >Save Todo</button>

        <div className="Todo">
          <h5>Title of Todo 1</h5>
          <h5>Description of Todo </h5>
        </div>

        <div className="Todo">
          <h5>Title of Todo 2</h5>
          <h5>Description of Todo </h5>
        </div>

        <div className="Todo">
          <h5>Title of Todo 3</h5>
          <h5>Description of Todo </h5>
        </div>





      </form>
    )
}

export default Form;