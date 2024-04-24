/*
In the context of React, this principle ensures high-level components should not directly depend on low-level components, but both should depend on a common abstraction. In this case, “component” refers to any part of the application, whether it’s a React component, a function, a module, a class-based component, or a third-party library. Lets see with examples:

*/

//BAD DIP CODE
const CreateListItemForm = () => {
    const handleCreateListItemForm = async (e) => {
        try {
            const formData = new FormData(e.currentTarget);
            await axios.post("https://myapi.com/listItems", formData);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <form onSubmit={handleCreateListItemForm}>
            <input name="title" />
            <input name="description" />
            <input name="image" />
        </form>
    );
};

//GODD coDE
/*
Consider this scenario. There’s another form for editing a list item with the same UI but differing only in terms of logic(in our example it is an API endpoint). Our form would be unreusable since we need another endpoint to submit our edit form. Therefore, we need to create a component that isn’t dependent on a specific low-level module.
*/

const ListItemForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input name="title" />
            <input name="description" />
            <input name="image" />
        </form>
    );
};

const CreateListItemForm1 = () => {
    const handleCreateListItem = async (e) => {
        try {
            const formData = new FormData(e.currentTarget);
            await axios.post("https://myapi.com/listItems", formData);
        } catch (err) {
            console.error(err.message);
        }
    };
    return <ListItemForm onSubmit={handleCreateListItem} />;
};
const EditListItemForm = () => {
    const handleEditListItem = async (e) => {
        try {
            // Editing logic
        } catch (err) {
            console.error(err.message);
        }
    };
    return <ListItemForm onSubmit={handleEditListItem} />;
};