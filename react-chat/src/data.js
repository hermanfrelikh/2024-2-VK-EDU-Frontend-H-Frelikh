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
      "https://sun9-44.userapi.com/impg/Fmp3R9zTLJnkrYrJgRPPq8IfQ2tClWKByoHv9w/Lj9oGtVjToE.jpg?size=1080x1440&quality=95&sign=7019cbcdb9a7e615206611f82c34838a&type=album",
    status: "недавно",
    lastMessage: "Нет сообщений",
    lastMessageTime: "",
  },
  {
    id: 2,
    name: "Захар",
    avatar:
      "https://sun9-76.userapi.com/impg/5v6W30Tm2lroaFXtPZPwO5OlktQMJVyCcElQoQ/7tijVbcubrA.jpg?size=828x828&quality=95&sign=9efdebd108a93b8e9653280f7fdc7c83&type=album",
    status: "онлайн",
    lastMessage: "Нет сообщений",
    lastMessageTime: "",
  },
  {
    id: 3,
    name: "Мама",
    avatar:
      "https://sun1-27.userapi.com/impg/1_NloAcb3e9eHWuE40CZDT2oBtnwvXBLTzu2vA/kqmti69382o.jpg?size=1080x1399&quality=95&sign=49d0ef831fe99ae2418bcd8b82811342&type=album",
    status: "2 часа назад",
    lastMessage: "Нет сообщений",
    lastMessageTime: "",
  },
];

export { getUsers, saveUsers, initialUsers };
