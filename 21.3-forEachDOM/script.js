const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];
const container = document.querySelector(".container");
const newList = document.createElement("ol");

container.appendChild(newList);
users.forEach((usr)=> {
        const lItem = document.createElement("li");
        lItem.innerHTML = `${usr.firstName} ${usr.lastName}`;
        lItem.setAttribute("data-id", usr.id);
        newList.appendChild(lItem);
})
newList.style.listStyleType = "none";