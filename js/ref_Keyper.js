function createNotesObject(category, arrtext) {

	var object = {
		Title: category,
        Notes: arrtext
    };
	return object;
}

function GetAllTitlesAsArray(){

    var Titles = [];
    Notes.forEach(function(obj) {
        Titles.push(obj.Title);
    }); 

    return Titles;

}


function GetNotes(title){
    var result = Notes.find(x => x.Title === title).Notes.join("<br>")
    
    console.log(result);
    return result;
}

var Notes = [
    createNotesObject("Keeper Agenda",Array(
        "Make the world seem real",
        "Make the world seem real",
        "Make hunters' lives dangerous & scary")),
    createNotesObject("Principles",Array(
        "Put horror in everyday situations",
        "Address the hunters, not the players",
        "Use the Keeper moves, without names",
        "Be a fan of the hunters",
        "Build a coherent mythology in play",
        "Nothing is safe",
        "Name everyone they meet, make them seem like normal folks",
        "Ask questions and build on the answers",
        "Sometimes give them exactly what they earned, rather than all they wanted",
        "What's happening off-screen?",
        "Don't always decide what happens",
        "Everything is a threat")),
    createNotesObject("Always Say...",Array(
        "What the principles demand",
        "What the rules demand",
        "What your preparation demands",
        "What honesty demands")),
    createNotesObject("Basic Keeper Moves",Array(
        "Separate them",
        "Reveal future badness",
        "Reveal off-screen badness",
        "Inflict harm, as established",
        "Make them investigate",
        "Make them acquire stuff",
        "Tell the possible consequences and ask if they want to go ahead",
        "Turn their move back on them",
        "Offer an opportunity, & maybe a cost",
        "Take away some of the hunters' stuff",
        "Put someone in trouble",
        "Make a threat move, from one of your mystery or arc threats",
        "After every move, ask what they do next")),
    createNotesObject("Harm Moves",Array(
        "Every time anyone gets hurt, use one.",
        "0-harm or more:",
        "Momentarily inhibited",
        "Drop something",
        "Take -1 forward",
        "1-harm or more:",
        "Fall down",
        "Take -1 ongoing",
        "Pass out",
        "Intense pain",
        "Unstable wounds:",
        "+1 harm",
        "8-harm or more:",
        "Dying or dead.")),
    createNotesObject("Monster Moves",Array(
        "Hint at its presence",
        "Display its full might",
        "Appear suddenly",
        "Attack with great force and fury",
        "Seize someone or something",
        "Attack with stealth and calculation",
        "Order underlings to do terrible acts",
        "Destroy something",
        "Escape, no matter how well contained",
        "Give chase",
        "Return to home ground",
        "Boast and gloat, maybe revealing a secret",
        "Return from seeming destruction",
        "Use an unnatural power")),
    createNotesObject("Minion Moves",Array(
        "A burst of sudden, uncontrolled violence",
        "Make a coordinated attack",
        "Capture someone, or steal something",
        "Reveal a secret",
        "Deliver someone or something to the master",
        "Give chase",
        "Make a threat or demand for the master",
        "Run away",
        "Use an unnatural power",
        "Display a hint of conscience or humanity",
        "Disobey the master, in some petty way")),
    createNotesObject("Bystander Moves",Array(
        "Go off alone",
        "Argue with the hunters",
        "Get in the way",
        "Reveal something",
        "Confess their fears",
        "Freak out in terror",
        "Try to help the hunters",
        "Try to protect people",
        "Display inability or incompetence",
        "Seek help or comfort")),
    createNotesObject("Location Moves",Array(
        "Present a hazard",
        "Reveal something",
        "Hide something",
        "Close a way",
        "Open a way",
        "Reshape itself",
        "Trap someone",
        "Offer a guide",
        "Present a guardian",
        "Something doesn't work properly",
        "Create a particular feeling")),
    createNotesObject("Hunter Basic Moves",Array(
        "Act Under Pressure (Cool)",
        "Help Out (Cool)",
        "Investigate A Mystery (Sharp)",
        "Kick Some Ass (Tough)",
        "Manipulate Someone (Charm)",
        "Protect Someone (Tough)",
        "Read A Bad Situation (Sharp)",
        "Use Magic (Weird)")),
    createNotesObject("End of Session Experience",Array(
        "1-2 “yes”: 1 mark; 3-4 “yes”: 2 marks",
        "Did they conclude the current mystery?",
        "Did they save someone from certain death (or worse)?",
        "Did we learn something new and important about the world?",
        "Did we learn something new and important about one of the hunters?"))
];