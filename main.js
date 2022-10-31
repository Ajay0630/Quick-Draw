quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb","lighter","lighthouse","lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth","mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can","palm tree","panda","pants","paper clip","parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup truck","picture frame","pig","pillow","pineapple","pizza","pliers","police car","pond","pool","popsicle","postcard","potato","power outlet","purse","rabbit","raccoon","radio","rainbow","rake","remote control","rhinoceros","rifle","river","roller coaster","rollerskates","sailboat","sandwich","saw","saxophone","school bus","scissors","scorpion","screwdriver","sea turtle","see saw","shark","sheep","shoe","shorts","shovel","sink","skateboard","skull","skyscraper","sleeping bag","smiley face","snail","snake","snorkel","snowflake","snowman","soccer ball","sock","speedboat","spider","spoon","spreadsheet","square","squiggle","squirrel","stairs","star","steak","stereo","stethoscope","stitches","stop sign","stove","strawberry","streetlight","string bean","submarine","suitcase","sun","swan","sweater","swingset","sword","syringe","table","teapot","teddy-bear","telephone","television","tennis racquet","tent","The Eiffel Tower","The Great Wall of China","The Mona Lisa","tiger","toaster","toe","toilet","tooth","toothbrush","toothpaste","tornado","tractor","traffic light","train","tree","triangle","trombone","truck","trumpet","tshirt","umbrella","underwear","van","vase","violin","washing machine","watermelon","waterslide","whale","wheel","windmill","wine bottle","wine glass","wristwatch","yoga","zebra","zigzag"]
console.log(quick_draw_data_set.length + " is the length of the only array in the main.js file.");
var random_number = Math.floor((Math.random() * quick_draw_data_set.length)+1);
var trusketch = quick_draw_data_set[random_number];
console.log(trusketch);
var first_letter = trusketch.charAt(0);
if (first_letter == "a"){
    document.getElementById("trusketch").innerHTML = "You have to draw an " + trusketch + ".";
} else if (first_letter == "e"){
    document.getElementById("trusketch").innerHTML = "You have to draw an " + trusketch + ".";
} else if (first_letter == "i"){
    document.getElementById("trusketch").innerHTML = "You have to draw an " + trusketch + ".";
} else if (first_letter == "o"){
    document.getElementById("trusketch").innerHTML = "You have to draw an " + trusketch + ".";
} else if (first_letter == "u"){
    document.getElementById("trusketch").innerHTML = "You have to draw an " + trusketch + ".";
} else {
    document.getElementById("trusketch").innerHTML = "You have to draw a " + trusketch + ".";
}
var score = 0;
document.getElementById("score").innerHTML = "Score: 0";
var timer_counter = 2000;
var timer_check = "";
var drawn_sketch = "";
var answer = "";

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();
    background("white");
}

function draw(){
    classifyCanvas();
    strokeWeight(15);
    stroke('#0f9ad1');
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    check_sketch();
    if (drawn_sketch == trusketch){
        answer = "set";
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    } else {
        score = score;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}

function check_sketch(){
    timer_counter = timer_counter - 3;
    document.getElementById("timer").innerHTML = "Timer: " + timer_counter;
    if (timer_counter <= 0) {
        timer_counter = 2000;
        timer_check = "complete";
    }
    if (timer_check == "complete") {
        timer_check = "";
        answer = "";
        updateCanvas();
    }
}

function updateCanvas(){
    background("white");
    var random_number = Math.floor((Math.random() * quick_draw_data_set.length)+1);
    var trusketch = quick_draw_data_set[random_number];
    console.log(trusketch);
    var first_letter = trusketch.charAt(0);
    if (first_letter == "a"){
        document.getElementById("trusketch").innerHTML = "You have to draw an " + trusketch;
    } else if (first_letter == "e"){
        document.getElementById("trusketch").innerHTML = "You have to draw an " + trusketch;
    } else if (first_letter == "i"){
        document.getElementById("trusketch").innerHTML = "You have to draw an " + trusketch;
    } else if (first_letter == "o"){
        document.getElementById("trusketch").innerHTML = "You have to draw an " + trusketch;
    } else if (first_letter == "u"){
        document.getElementById("trusketch").innerHTML = "You have to draw an " + trusketch;
    } else {
        document.getElementById("trusketch").innerHTML = "You have to draw a " + trusketch;
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        var drawn_sketch = results[0].label;
        var firstletterofdrawnsketch = drawn_sketch.charAt(0);
        if (firstletterofdrawnsketch == "a"){
            document.getElementById("ogsketch").innerHTML = "You drew an " + drawn_sketch;
        } else if (firstletterofdrawnsketch == "e"){
            document.getElementById("ogsketch").innerHTML = "You drew an " + drawn_sketch;
        } else if (firstletterofdrawnsketch == "i"){
            document.getElementById("ogsketch").innerHTML = "You drew an " + drawn_sketch;
        } else if (firstletterofdrawnsketch == "o"){
            document.getElementById("ogsketch").innerHTML = "You drew an " + drawn_sketch;
        } else if (firstletterofdrawnsketch == "u"){
            document.getElementById("ogsketch").innerHTML = "You drew an " + drawn_sketch;
        } else {
            document.getElementById("ogsketch").innerHTML = "You drew a " + drawn_sketch;
        }
        var confidence = Math.round(results[0].confidence * 100) + "%";
        document.getElementById("confidence").innerHTML = "Confidence: " + confidence;
    }
}