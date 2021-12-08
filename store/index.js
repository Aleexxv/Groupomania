export const state = () => ({
    article: [
        {
            id: "1",
            title: "title 1",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos doloremque.", 
        },
        {
            id: "2",
            title: "title 2",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos doloremque",
        },
        {
            id: "3",
            title: "title 3",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos doloremque",
        },
        {
            id: "4",
            title: "title 4",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos doloremque",
        },
        {
            id: "5",
            title: "title 5",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos doloremque",
        },
        {
            id: "1",
            title: "title 1",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos doloremque.", 
        },
        {
            id: "2",
            title: "title 2",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos doloremque",
        },
        {
            id: "3",
            title: "title 3",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos doloremque",
        },
        {
            id: "4",
            title: "title 4",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos doloremque",
        },
        {
            id: "5",
            title: "title 5",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos doloremque",
        },
    ]
})

export const getters = {
    getArticle: (state) => {
        return state.article
    }
}