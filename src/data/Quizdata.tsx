
type QuizdataType = {
    question:string
    id:number
    options:{
        option:string
        rank:number
    }[]
}[]

export const Quizdata:QuizdataType= [
    { 
      id : 1,
      question: "Rank these colors from the visible spectrum in order of increasing wavelength?",
      options: [
        { option: "Red", "rank": 2 },
        { option: "Blue", "rank": 5 },
        { option: "Green", "rank": 3 },
        { option: "Yellow", "rank": 4 },
        { option: "Violet", "rank": 1 }
      ]
    },
    {
      id:2,
      question: "Rank these fruits by their water content, from highest to lowest?",
      options: [
        { option: "Watermelon", "rank": 1 },
        { option: "Apple", "rank": 3 },
        { option: "Grape", "rank": 5 },
        { option: "Banana", "rank": 2 },
        { option: "Orange", "rank": 4 }
      ]
    },
    {
      id:3,
      question: "Rank these numbers in ascending order?",
      options: [
        { option: "25", "rank": 4 },
        { option: "10", "rank": 2 },
        { option: "50", "rank": 5 },
        { option: "5", "rank": 1 },
        { option: "30", "rank": 3 }
      ]
    },
    {
      id:4,
      question: "Rank these animals by their average lifespan, from shortest to longest?",
      options: [
        { "option": "Mouse", "rank": 1 },
        { "option": "Dog", "rank": 3 },
        { "option": "Elephant", "rank": 5 },
        { "option": "Turtle", "rank": 2 },
        { "option": "Parrot", "rank": 4 }
      ]
    },
    {
      id:5,
      question: "Rank these months in chronological order, from the beginning to the end of the year?",
      options: [
        { option: "January", "rank": 1 },
        { option: "May", "rank": 3 },
        { option: "August", "rank": 5 },
        { option: "October", "rank": 4 },
        { option: "December", "rank": 2 }
      ]
    }
  ]
  