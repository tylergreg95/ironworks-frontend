import useFetch from "./useFetch";
import ExerciseList from "./ExerciseList";

const ExerciseLibraryDisplay = () => {

    const {data: exercises, isLoading, error} = useFetch('http://localhost:8080/api/v1/exercise')

    return ( 
        <div className="exercise-library-display">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {exercises && <ExerciseList exercises={exercises} title="All Exercises"/>}
        </div>
     );
}
 
export default ExerciseLibraryDisplay;