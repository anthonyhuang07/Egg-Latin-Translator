function boTranslatorBefore(stringer) {
    let stringArray = stringer.split(" ");
    console.log(stringArray);
    for (let a in stringArray) {
        let currentArray = [...stringArray[a]];
        currentArray = currentArray.slice(0, -2);
        currentArray.unshift(currentArray.pop());
        if (currentArray.at(-1) === '-') {
            currentArray.pop();
        }
        console.log(currentArray);
        stringArray[a] = currentArray.join('');
        console.log(stringArray);
    }
    stringer = stringArray.join(' ');
    return stringer;
}
function boTranslator(string) {
    string = boTranslatorBefore(string);
    string = string.replaceAll('eggegg', 'Egg');
    string = string.replaceAll('egg', '');
    return string.toLowerCase();
}
/**
 * Test Line:
 * asparagus is cool
 * Test1: eggaspeggareggageggus eggis ceggool
 * Test2: eggaspeggareggageggus eggis ceggool
 */
function boTranslator2Before(stringer) {
    stringer = stringer.toLowerCase();
    let stringArray = stringer.split(" ");
    const vowels = /[aeiou]/gi;
    const punctuationReg = /[!#$%&()*+?,-./:;<=>@[\]^_`{|}~]/g;
    console.log(stringArray);
    for (let a in stringArray) {
        let currentArray = [...stringArray[a]];
        if (currentArray[0].match(vowels)) {
            if (currentArray.at(-1).match(punctuationReg)) {
                let punctuation = currentArray.pop();
                currentArray.push("yay");
                currentArray.push(punctuation);
            }
            else {
                currentArray.push("yay");
            }
        }
        else {
            if (currentArray.at(-1).match(punctuationReg)) {
                let punctuation = currentArray.pop();
                currentArray.push(currentArray.shift());
                currentArray.push("ay");
                currentArray.push(punctuation);
            }
            else {
                currentArray.push(currentArray.shift());
                currentArray.push("ay");
            }
        }
        stringArray[a] = currentArray.join('');
        console.log(stringArray);
    }
    stringer = stringArray.join(' ');
    return stringer;
}
function boTranslator2(english) {
    english = boTranslator2Before(english);
    if (!syllables(english)) {
        return english;
    }
    const egg = "egg";
    const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
    english = english.toLowerCase();
    let syllsVowel = syllables(english);
    let syllsFull = english.match(syllableRegex);
    function syllables(words) {
        words = words.toLowerCase();
        if (words.length <= 2) {
            return 1;
        }
        words = words.replace(/(?:[^leiouay]re|ed|[^leiouay]e)$/, '');
        return words.match(/[eiouay]{1,2}/g);
    }
    for (let i in syllsFull) {
        syllsFull[i] = syllsFull[i].replace(syllsVowel[i], egg + syllsVowel[i]);
        english = syllsFull.join('');
        english = english.replaceAll('regge ', 're ').replaceAll('eggy', 'y').replaceAll('ye', 'yegge');
        console.log(syllsVowel);
        console.log(syllsFull);
    }
    return english;
}
const boEngrish = document.getElementById("boEnglish");
const boLatin = document.getElementById("boLatin");
const boBtn = document.getElementById("boSwitch");
const engbo = document.getElementById("eng-bo");
const boeng = document.getElementById("bo-eng");
const boTitle = document.getElementById("boTitler");
const boTitle2 = document.getElementById("boTitler2");
function boCheck(value) {
    boLatin.value = boTranslator2(value);
}
function boCheck2(value) {
    boEngrish.value = boTranslator(value);
}
boBtn.addEventListener('click', boToggle);
function boToggle() {
    if (engbo.style.display === "none") {
        engbo.style.display = "block";
        boeng.style.display = "none";
        boTitle.style.display = "block";
        boTitle2.style.display = "none";
    }
    else if (engbo.style.display !== "none") {
        engbo.style.display = "none";
        boeng.style.display = "block";
        boTitle2.style.display = "block";
        boTitle.style.display = "none";
    }
}
/**
 * these are just comments to make typescript have a larger percentage
 * so
 * how ya doing
 * hows your guinea pigs?
 * oh well good luck with the 2nd one i guess
 * oh then good luck with the 3rd one
 * oh wow good luck with the 4th one
 * how many are you going to have if they just keep dying?
 * anyways, hows your capybaras?
 * they doing alright?
 * nevermind this doesnt work lmfao im still keeping it bye
 */ 
