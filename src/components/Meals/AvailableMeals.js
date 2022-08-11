import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const fetchMeals = async () => {

            const res = await fetch("https://react-http-c9956-default-rtdb.firebaseio.com/meals.json")
            const data = await res.json()

            const loadedMeals = [];

            console.log(data);
            for (let key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })

            }
            setMeals(loadedMeals);
        }
        fetchMeals()
    })

    const mealsList = meals.map((meal) => {
        return <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    })
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList} </ul>
            </Card>
        </section>
    )

}
export default AvailableMeals