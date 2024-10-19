import "./App.css";
import Header from "./components/Header/Header";
import ChatList from "./components/ChatList/ChatList";
import CreateChatButton from "./components/CreateChat/CreateChatButton/CreateChatButton";
import { UsersProvider } from "./context/UsersContext";

export default function App() {
  return (
    <>
      <Header />
      <UsersProvider>
        <CreateChatButton />
        <ChatList />
      </UsersProvider>
    </>
  );
}
