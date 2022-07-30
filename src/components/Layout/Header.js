import React from 'react'
import classes from './Header.module.css';
import meals from '../../assets/meals.jpg';
import Button from './HeaderCartButton'


const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <Button />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt='a table full of table' />
            </div>
        </>
    )

}


export default Header