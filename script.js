/*
© 2024 Ramjan Ali M. All Rights Reserved.

All content, including text, images, graphics, and code, on this website is the property of Ramjan Ali M and is protected by copyright laws. Unauthorized use or reproduction of any part of this website, including but not limited to copying, redistribution, or modification, without prior written permission, is strictly prohibited.

For inquiries regarding permitted uses or licensing, please contact ramjanali.it36@gmail.com.
*/

var audio = new Audio('https://audio.jukehost.co.uk/kgfvz3TCir7I6MxycWjMV2dk1gHcw7tQ');
audio.play();
var contactString = "<div class='social'> <a target='_blank' href='tel:+917904025971'> <div class='socialItem' id='call'><img style='height:20px; width:20px;'class='socialItemI' src='images/phone.svg'/><label class='number'></label></div> </a> <a target='_blank' href='mailto:ramjanali.mhm@gmail.com'> <div class='socialItem'><img style='height:20px; width:20px;' class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/RamjanAli76'> <div class='socialItem'><img style='height:20px; width:20px;' class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/917904025971'> <div class='socialItem'><img  style='height:20px; width:20px;' class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a href='https://www.linkedin.com/in/ramjanali0/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img style='height:20px; width:20px;' class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Ramjan Ali's Resume.pdf</label></div><a href='assets/Ramjan Ali Resume.pdf' download='Ramjan_Ali_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7839.285844878265!2d79.6756087893736!3d10.761978697713678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55411e0c00db8d%3A0xdcbe122fb64a801f!2sAdiyakkamangalam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1730642050840!5m2!1sen!2sin' class='map'</iframe></div><label class='add'><address> 'Railway Street'<br>Adiyakkamangalam, <br>Thiruvarur, Tamil Nadu, INDIA</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes; 
    lastSeen.innerText = "last seen today at " + hours + ":" + minutes + " " + ampm;
}



function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}
function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");

    // Convert 24-hour time to 12-hour format with AM/PM
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes; 
    dateLabel.innerText = hours + ":" + minutes + " " + ampm;

    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}


function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("<span style='color: black;'>Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Ramjan Ali M</a>.</span><br><br>I am a B.Tech student in Information Technology at<span class='bold'> EGS Pillay Engineering College (Autonomous)👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities and would love to connect with anyone interested in discussing opportunities in the IT and engineering fields.<br><br>Send <span class='bold'>'hii'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "hii":
            sendTextMessage("<span style='color: black;'><span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span style='color: black;'><span class='sk'>I am currently pursuing B.Tech degree in Information Technology.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Android<br>ReactJs<br></span><br>I've experiance with following Backend:<span class='bold'><br>Node.js<br><br></span><br<br>I've experiance with following UX & UI Design :<span class='bold'><br>Figma<br>Adobe XD<br></span><br>I've experiance with following Graphic design :<span class='bold'><br>Adobe Photoshop<br>Adobe Illustrator<br></span><br>I've experiance with following Additional:<span class='bold'><br>Oracle VirualBox<br>VM Ware Workstation<br>GitHub<br></span><br>I use <span class='bold'>Linux</span> <br><span class='bold'>Windows</span><br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("<span style='color: black;'><span style='color: black;'>I am currently pusuing B.Tech degree in Information Technology at E.G.S. Pillay Engineering College (Autnomous)<br>Passing Year : 2025<br>Cgpa: 8.7 CGPA<br><br>I have completed my HSC in Veludayar HR Sec School at Thiruvarur<br>Passing Year:2021<br>Result:78.71%<br><br>I have completed my SSLC in Veludayar HR Sec School at Thiruvarur<br>Passing Year:2019<br>Result:70.8%");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("<span style='color: black;'<br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.linkedin.com/in/ramjanali0/'><span class='bold'>RAMJAN ALI M</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("<span style='color: black;'>You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/RamjanAli76'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("<span style='color: black;'>Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}


function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");

    // Convert 24-hour time to 12-hour time
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes; 

    dateLabel.innerText = `${hours}:${minutes} ${ampm}`;

    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

input.style.color = "black";

function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");

    // Convert 24-hour time to 12-hour format with AM/PM
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes; 

    // Set formatted time with AM/PM
    dateLabel.innerText = hours + ":" + minutes + " " + ampm;
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
