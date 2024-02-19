import sql from 'better-sqlite3'
import slugify from 'slugify';
import xss from 'xss';

import fs from "node:fs"

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    //throw new Error('Something went wrong!!')
    return db.prepare('select * from meals').all()
}

export function getMeal(slug) {
    return db.prepare('select * from meals where slug = ?').get(slug)
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.name.split(".").pop()
    const filename = `${meal.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${filename}`)
    const imageChunk = await meal.image.arrayBuffer()
    stream.write(Buffer.from(imageChunk, error => {
        if (error) {
            throw new Error("Image is not saved!!")
        }
    }))

    meal.image = `/images/${filename}`

    db.prepare(`
    INSERT INTO MEALS (slug,title,image,summary,instructions,creator,creator_email) VALUES (
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
     )
    `).run(meal)
}