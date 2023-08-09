export const DEFAULT = {
    TOKEN: "TOKEN",
    REFRESH_TOKEN: "REFRESH_TOKEN",
};

export const LOCATION = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    IMAGE: "/images",
    BUTTONACCORDION: "/button-accordion",
    PRODUCT: "/product",
    FORM: "/form",
    DEMO: "/demo",
    TODO: "/todo",
};

export const AUTH = [
    {
        path: LOCATION.HOME,
        title: "Trang chu",
    },
    {
        path: LOCATION.IMAGE,
        title: "HINH ANH",
    },
    {
        path: LOCATION.BUTTONACCORDION,
        title: "NUT",
    },
    {
        path: LOCATION.PRODUCT,
        title: "SAN PHAM",
    },
    {
        path: LOCATION.FORM,
        title: "DON",
    },
    {
        path: LOCATION.DEMO,
        title: "DEMO",
    },
    {
        path: LOCATION.TODO,
        title: "todo",
    },


]

export const NONAUTH = [
    {
        path: LOCATION.HOME,
        title: "Trang chu",
    },
    {
        path: LOCATION.LOGIN,
        title: "DANG NHAP",
    },
    {
        path: LOCATION.REGISTER,
        title: "DANG KY",
    },

]