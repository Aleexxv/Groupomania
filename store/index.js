export const state = () => ({
    article: [
        {
            id: "1",
            title: "title 1",
            description: "Description 1",
        },
        {
            id: "2",
            title: "title 2",
            description: "Description 2",
        },
        {
            id: "3",
            title: "title 3",
            description: "Description 3",
        },
        {
            id: "4",
            title: "title 4",
            description: "Description 4",
        },
        {
            id: "5",
            title: "title 5",
            description: "Description 5",
        },
    ],

    getters: {
        getArticles: state => {
            return state.article;
        }
    }
})