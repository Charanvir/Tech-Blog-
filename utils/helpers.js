module.exports = {


    formatDate: date => {
        return `${new Date(date).getFullYear()}/${new Date(date).getMonth()}/${new Date(date).getDay()}`
    }
}

