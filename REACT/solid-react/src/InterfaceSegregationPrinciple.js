//“No code should be forced to depend on methods it does not use”*. 
//For React applications, we will rephrase it as “components should not depend on props they don’t use.”

const ListItem = ({ item }) => {

    return (
        <View>
            <Image source={{ uri: item.image }} />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    );
};

/*
We have a ListItem component which only needs a few data from theitem props which are image, 
title, and description. By giving it ListItem as props, we end up giving it more than the component 
actually needs because theitem props itself might contain data that the component doesn’t need.
*/

const ListItem2 = ({ image, title, description }) => {

    return (
        <View>
            <Image source={{ uri: image }} />
            <Text>{title}</Text>
            <Text>{description}</Text>
        </View>
    );
};