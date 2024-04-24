https://formik.org/docs/overview

Why not Redux-Form?
By now, you might be thinking, "Why didn't you just use Redux-Form?" Good question.

According to our prophet Dan Abramov, form state is inherently ephemeral and local, so tracking it in Redux (or any kind of Flux library) is unnecessary
Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This is fine for small apps, but as your Redux app grows, input latency will continue to increase if you use Redux-Form.
Redux-Form is 22.5 kB minified gzipped (Formik is 12.7 kB)

Yup for object schema validation. It has an API that's pretty similar to Joi / React PropTypes but is small enough for the browser and fast enough for runtime usage. Because I ❤️ Yup sooo much, Formik has a special config option / prop for Yup called validationSchema which will automatically transform Yup's validation errors into a pretty object whose keys match values and touched. 

npm install yup --save