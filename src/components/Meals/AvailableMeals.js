import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [meals, setMeals] = useState([])
    const [error, setError] = useState()


    useEffect(() => {
        const fetchMeals = async () => {

            const res = await fetch("https://react-http-c9956-default-rtdb.firebaseio.com/meals.json")
            if (!res.ok) {
                throw new Error('something went wrong')
            }
            const data = await res.json()

            const loadedMeals = [];

            for (let key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }

            setMeals(loadedMeals);
            setIsLoading(false)
        }

        fetchMeals().catch((e) => {
            setIsLoading(false)
            setError(e.message)
        })

    }, [])


    if (isLoading) {
        return (
            <section className={classes.mealsLoading}>
                <p>Loading...</p>
            </section>
        )
    }
    if (error) {
        return (
            <section className={classes.error}>
                    <p>{error}</p>
               
            </section>
        )
    }

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