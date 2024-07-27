import { useState } from "react";

const words = ["kanna","is","hello","my","friend"]
const lenght = 1000;
const ALL_SENTENCES = []
for(let i=0;i<lenght;i++){
    let sentence = "";
    for( let j=0;j<words.length;j++){
        sentence += words[Math.floor(Math.random() * words.length)];
        sentence += " ";
    }
    ALL_SENTENCES.push(sentence)
}

export function MyAssignment2(){
    const [sentences, setSentences] = useState(ALL_SENTENCES);
    const [filter,setFilter] = useState("")
    const filteredSentences = sentences.filter(x => x.includes(filter))
    return (
        <>
            <h2>This is my Assigment 2</h2>
            <input type="text" name="" id=""  onInput={(e) => setFilter(e.target.value)}/>
            {
                filteredSentences.map((filteredSentence,index) =>(
                    <p key={index}>{filteredSentence}</p>
                )
                )
            }
        </>

    )
}