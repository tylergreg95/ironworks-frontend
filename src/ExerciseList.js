const ExerciseList = ({exercises, title}) => {
    return ( 
        <div className="container">
            <h2>{ title }</h2>
            <div className="row">
                {exercises.map((exercise) => (    
                    <div className="col-sm">
                        <div className="card m-1" key={exercise.id} style={{width: "15rem", height: "20rem"}}>
                            <img src={exercise.imageLink} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{exercise.name}</h5>
                                <p className="card-text">Required Equipment: {exercise.equipment}</p>
                                <a href={exercise.youtubeLink} className="btn btn-primary" target="_blank">YouTube</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default ExerciseList;