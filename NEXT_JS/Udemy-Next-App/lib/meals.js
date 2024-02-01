import sql from 'better-sqlite3'

const db = sql('meals.db');

export async function getMeals() {
    new Promise(resolve => setTimeout(resolve, 10000))
    return db.prepare('select * from meals').all()
}