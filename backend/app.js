const express = require("express");
const cors = require("cors");
const PORT = 5000;

const app = express();

//--midlewares
app.use(cors());

// -- data

const questions = [
    {
        questionText: "Kokia ilgiausia Lietuvos upė?",
        answerOptions: [
            {answerText:"Nevėžis", isCorrect:false,},
            {answerText:"Nemunas", isCorrect:true,},
            {answerText:"Dubysa", isCorrect:false,},
            {answerText:"Neris", isCorrect:false,},
        ],
    },
    {
        questionText: "Kada yra metuose ilgiausia naktis?",
        answerOptions: [
            {answerText:"Birželio 23", isCorrect:true,},
            {answerText:"Birželio 24", isCorrect:false,},
            {answerText:"Gruodžio 22", isCorrect:false,},
            {answerText:"Kovo 22", isCorrect:false,},
        ],
    },
    {
        questionText: "Kuris iš miestų nebuvo Lietuvos sostine?",
        answerOptions: [
            {answerText:"Vilnius", isCorrect:false,},
            {answerText:"Kaunas", isCorrect:false,},
            {answerText:"Kernavė", isCorrect:false,},
            {answerText:"Nė vienas iš išvardintų", isCorrect:true,},
        ],
    },
    {
        questionText: "Kokia didžiausia pasaulyje sala?",
        answerOptions: [
            {answerText:"Grenlandija", isCorrect:true,},
            {answerText:"Madagaskaras", isCorrect:false,},
            {answerText:"Sicilija", isCorrect:false,},
            {answerText:"Velykų sala", isCorrect:false,},
        ],
    },
    {
        questionText: "Geografiškai Lietuva yra Europos",
        answerOptions: [
            {answerText:"Šiaurė", isCorrect:false,},
            {answerText:"Vakarai", isCorrect:false,},
            {answerText:"Šiaurės vakarai", isCorrect:false,},
            {answerText:"Centras", isCorrect:true,},
        ],
    },
];
//--routes


app.get("/api/", (req, res) => {
    

    res.json(questions);
});


app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
