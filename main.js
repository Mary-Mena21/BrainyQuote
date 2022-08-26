// console.log("I'm here as js")

// for loops
// string interpolation
// if/else


// data types
// data Structures
// create a data structure of our quotes
    // What properties
// Iterate over the quotes
// Add a conditional
// Can we break this up?
    // Data Structure Relationship

// get string, int, booean, null, undefined into working vacabulary
// get array, object into working vocabulary

    const quotes = [
        {
            id: 1,
            date: "08/02/2022",
            authorId: 4,
            quote: "Come eat lunch. The dogs are home and will eat you.",
            hashTags: ["AI", "Amazon", "Skynet"],
            isAuthorAlive: false
        },
        {
            id: 2,
            date: "08/01/2022",
            authorId: 3,
            quote: "Here's some practice Javascript.",
            hashTags: ["Javascript", "Code Stars", "E20", "banana"],
            isAuthorAlive: true
        },
        {
            id: 3,
            date: "07/27/2022",
            authorId: 1,
            quote: "We won't hold your hands!",
            hashTags: ["Blanched Almonds", "Important Things", "REMEMBER", "mister"],
            isAuthorAlive: true
        },
        {
            id: 5,
            date: "08/01/2022",
            authorId: 1,
            quote: "I can do it!",
            hashTags: ["Future Dr. Noh", "Zombie", "Notion Queen"],
            isAuthorAlive: true
        },
        {
            id: 4,
            date: "04/27/2022",
            authorId: 2,
            quote: "Ask for help, even if you break the company's website.",
            hashTags: ["Main Instructor", "Dr.", "Zen", "Chemistry", "Balloon Gas Transport", "Forest"],
            isAuthorAlive: true
        }
    ]

    const authors = [
        {
            id: 1,
            name: "The Future Dr. Noh"
        }, 
        {
            id: 2, 
            name: "Lynn"
        },
        {
            id: 3,
            name: "Trevor"
        },
        {
            id: 4,
            name: "Alexa"
        }
    ]

    // console.log(quotes)

    for (let i = 0; i < quotes.length; i++) {
        // console.log(quotes[i])
        if (quotes[i].id === 2){
        // console.log(quotes[i].hashTags[3])
        }
    }

    for (const quoteObj of quotes) {
        if (quoteObj.hashTags.length < 4) {
            const arrayString = quoteObj.hashTags.toString()
            // console.log(arrayString)
            // console.log(`The hashtag: ${quoteObj.hashTags.toString()}`)
        } else {
            // console.log("more than 4 hashtags")
        }
        // console.log(`This is ${quoteObj.author}'s quote: ${quoteObj.quote}.`)
    }

    for (const quoteObj of quotes) {
        if (quoteObj.isAuthorAlive){
            // console.log(`${quoteObj.author} is alive`)
        } else {
            // console.log("They be dead")
        }
    }

    for (const quoteObj of quotes) {
        if (quoteObj.author === "Sydney") {
            // console.log(quoteObj.quote)
        }
    }

    for (const quoteObj of quotes) {
        if (quoteObj.authorId === 1) {
            console.log(`Sydney's Quote: ${quoteObj.quote}`)
        }
    }


