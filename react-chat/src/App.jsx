import "./App.css";
import Header from "./components/Header/Header";
import ChatList from "./components/ChatList/ChatList";
import CreateChatButton from "./components/CreateChat/CreateChatButton/CreateChatButton";
import { UsersProvider, useUsers } from "./context/UsersContext";
import { useState } from "react";
import Chat from "./components/Chat/Chat";
import { MainAccountProvider } from "./context/MainAccountContext";

function AppContent() {
  const [searchText, setSearchText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { users } = useUsers();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleChatItemClick = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
    setIsChatOpen(true);
  };

  const handleBack = () => {
    setSelectedUser(null);
    setIsChatOpen(false);
  };

  return (
    <>
      {!isChatOpen && (
        <Header
          searchText={searchText}
          onSearchChange={handleSearchChange}
          setSearchText={setSearchText}
          isChatOpen={isChatOpen}
          onBack={handleBack}
          selectedUser={selectedUser}
        />
      )}
      {!selectedUser && <CreateChatButton />}
      {selectedUser ? (
        <Chat user={selectedUser} onBack={handleBack} />
      ) : (
        <ChatList
          searchText={searchText}
          onChatItemClick={handleChatItemClick}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <UsersProvider>
      <MainAccountProvider>
        <AppContent />
      </MainAccountProvider>
    </UsersProvider>
  );
}
