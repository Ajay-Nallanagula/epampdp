'use client'

import { useFormState } from 'react-dom'
import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/server-actions';
import FormSubmit from '@/components/meals/form-submit';

export default function ShareMealPage() {
    const [state, setFormData] = useFormState(shareMeal, null) //Form-action, Initvalue-schema that will be returned by sharemeal/form submit method

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <h2>{state?.message || ''}</h2>
                <form className={classes.form} action={setFormData}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input type="email" id="email" name="email" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label="Upload Image" name="image" />

                    <h2>{state?.message || ''}</h2>

                    <p className={classes.actions}>
                        <FormSubmit></FormSubmit>
                    </p>
                </form>

            </main>
        </>
    );
}