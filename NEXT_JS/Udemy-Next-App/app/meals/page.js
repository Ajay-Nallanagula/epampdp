import Link from "next/link";
//import mealsCss from './meals.module.css'
import classes from './page.module.css'
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import MainLoader from "@/components/loader/main-loader";

const MealsPage = async () => {

    const meals = await getMeals()

    return (
        <>
            <header className={classes.header}>
                <h1>Lorem ipsum Header H1 Tag <span className={classes.highlight}>CCSDESbjhbxhvbxv jdhkhgdg</span></h1>
                <p>Choose your favourite reciepe and cook it yourself.</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'> Share your favorite reciepe</Link>
                </p>
            </header>
            <main className={classes.main}>

                {meals?.length ? <MealsGrid meals={meals} /> : <MainLoader />}
            </main>
        </>
    )
}

export default MealsPage