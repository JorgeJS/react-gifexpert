export const GifItem = ({title, url}) => {
    console.log(title, url);
  return (
    <div className="col-6">
      <div className="p-3">
        <div className="card mb-3" style={{width: "25rem"}}>
          <img className="card-img-top" src={url} alt={title} />
          <div className="card-body">
            <p className="card-title" >{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}