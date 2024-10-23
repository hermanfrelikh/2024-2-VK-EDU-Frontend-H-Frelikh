function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

const initialUsers = [
  {
    id: 1,
    name: "Яна",
    avatar:
      "/yana.jpg",
    status: "недавно",
    lastMessage: "Нет сообщений",
    lastMessageTime: "",
  },
  {
    id: 2,
    name: "Захар",
    avatar:
      "/zahar.jpg",
    status: "онлайн",
    lastMessage: "Нет сообщений",
    lastMessageTime: "",
  },
  {
    id: 3,
    name: "Мама",
    avatar:
      "/mama.jpg",
    status: "2 часа назад",
    lastMessage: "Нет сообщений",
    lastMessageTime: "",
  },
];
const mainAccount = {
  id: "german",
  name: "Герман",
  avatar:
    "/herman.jpg",
  status: "онлайн",
  lastMessage: "Нет сообщений",
  lastMessageTime: "",
};
export { getUsers, saveUsers, initialUsers, mainAccount };

