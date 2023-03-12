import React from "react";

const KitKatBarContext = React.createContext();
const { Provider, Consumer: KitKatBarConsumer } = KitKatBarContext;
export { Provider,  KitKatBarConsumer ,KitKatBarContext}