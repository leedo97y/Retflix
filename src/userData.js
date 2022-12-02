const users = [
    {
        id: "djyun@gmail.com",
        password: "dj1234",
    },

    {
        id: "dolmaeng@naver.com",
        password: "dm2345",
    },

    {
        id: "dieno@samsung.com",
        password: "dn3456",
    },

    {
        id: "ggongjukim@elice.com",
        password: "gk4567",
    },
];

const userToken = Math.random();

export const db = {
    users,
};

export const token = {
    userToken
}