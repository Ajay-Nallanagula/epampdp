Prototype pattern is used to avoid expensive object creation

If the object create contains
--> Loading data from database, which is static data/common data/seed data
--> loading a color pallete, loading countries
You just want to change the capital city of one country, etc
Each time rather than using "new" we can use the clone method created.
