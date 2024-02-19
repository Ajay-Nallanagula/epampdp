'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"

const invalidField = (fieldVal) => {

    // if(!fieldVal?.trim()){
    //     return {message: `${fieldName} contains invalid value`}
    // }

    return !fieldVal?.trim()
}

export async function shareMeal(prevState, formData) {
    let errField = { isError: false, item: null }
    const mealObj = {
        creator: formData.get("name"),
        creator_email: formData.get("email"),
        instructions: formData.get("instructions"),
        summary: formData.get("summary"),
        image: formData.get("image"),
        title: formData.get("title")
    }

    const arr = ['name', 'email', 'instructions', 'summary', 'title'] //.any(item => invalidField(item,formData.get(item)))

    arr.forEach(item => {
        if (invalidField(formData.get(item))) {
            errField = { isError: true, item }
            return errField
        }
    })

    if (errField.isError) {
        return { message: `${errField.item} contains invalid value` }
    }

    await saveMeal(mealObj)
    redirect("/meals")
}