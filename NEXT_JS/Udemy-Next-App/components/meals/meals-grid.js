import MealItem from './meals-item'
import classes from './meals-item.module.css'

const MealsGrid = ({ meals }) => {
    return (
        <ul className={classes.meals}>
            {meals.map(meal => {
                return <li key={meal.id}><MealItem {...meal} /></li>
            })}
        </ul>
    )
}

export default MealsGrid