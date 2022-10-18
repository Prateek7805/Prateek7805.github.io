const GLOBAL_ASCII_2D = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 223, 223, 0, 0, 0], [7, 0, 7, 0, 0, 0, 0, 0], [102, 255, 255, 102, 102, 255, 255, 102], [0, 4, 42, 42, 127, 42, 42, 16], [198, 105, 54, 24, 108, 150, 99, 0], [56, 100, 100, 254, 253, 101, 98, 0], [0, 0, 7, 23, 15, 0, 0, 0], [0, 0, 0, 0, 60, 126, 195, 129], [129, 195, 126, 60, 0, 0, 0, 0], [8, 42, 28, 127, 28, 42, 8, 0], [0, 24, 24, 126, 126, 24, 24, 0], [0, 0, 152, 248, 120, 0, 0, 0], [0, 0, 24, 24, 24, 0, 0, 0], [0, 0, 224, 224, 224, 0, 0, 0], [192, 96, 48, 24, 12, 6, 3, 0], [0, 126, 255, 195, 195, 255, 126, 0], [0, 192, 198, 255, 255, 192, 192, 0], [0, 198, 227, 243, 243, 223, 206, 0], [0, 102, 231, 195, 219, 255, 102, 0], [0, 56, 60, 54, 243, 241, 48, 0], [0, 207, 223, 219, 219, 251, 115, 0], [0, 126, 223, 219, 219, 251, 112, 0], [0, 3, 3, 243, 251, 15, 7, 0], [0, 118, 223, 219, 219, 255, 118, 0], [0, 14, 31, 27, 27, 255, 254, 0], [0, 0, 231, 231, 231, 0, 0, 0], [96, 123, 59, 0, 0, 0, 0, 0], [0, 24, 60, 102, 195, 0, 0, 0], [0, 108, 108, 108, 108, 108, 0, 0], [0, 195, 102, 60, 24, 0, 0, 0], [0, 6, 7, 179, 187, 15, 6, 0], [126, 129, 153, 165, 189, 161, 158, 64], [254, 255, 51, 51, 51, 51, 255, 254], [255, 255, 219, 219, 219, 255, 126, 38], [126, 255, 195, 195, 195, 195, 195, 195], [255, 255, 195, 195, 195, 231, 126, 60], [255, 255, 219, 219, 219, 219, 219, 0], [255, 255, 27, 27, 27, 27, 27, 0], [126, 255, 195, 195, 219, 219, 251, 122], [255, 255, 24, 24, 24, 24, 255, 255], [0, 195, 195, 255, 255, 195, 195, 0], [96, 224, 195, 195, 255, 127, 3, 3], [255, 255, 60, 124, 108, 238, 199, 195], [255, 255, 192, 192, 192, 192, 192, 192], [255, 255, 6, 12, 12, 6, 255, 255], [255, 255, 14, 28, 56, 112, 255, 255], [126, 255, 231, 195, 195, 231, 255, 126], [255, 255, 51, 51, 51, 63, 30, 0], [60, 126, 195, 219, 243, 126, 252, 128], [255, 255, 51, 115, 243, 223, 142, 0], [94, 223, 219, 219, 219, 219, 251, 122], [2, 3, 3, 255, 255, 3, 3, 2], [127, 255, 192, 192, 192, 192, 255, 127], [31, 63, 96, 192, 192, 96, 63, 31], [62, 126, 224, 126, 126, 224, 126, 62], [129, 195, 102, 60, 60, 102, 195, 129], [3, 6, 12, 248, 248, 12, 6, 3], [195, 227, 243, 251, 223, 207, 199, 0], [0, 255, 255, 195, 195, 0, 0, 0], [0, 3, 6, 12, 24, 48, 96, 192], [0, 195, 195, 255, 255, 0, 0, 0], [0, 12, 6, 3, 6, 12, 0, 0], [0, 192, 192, 192, 192, 192, 192, 0], [0, 3, 6, 0, 0, 0, 0, 0], [0, 118, 246, 150, 254, 252, 128, 0], [0, 255, 255, 216, 216, 248, 112, 0], [0, 120, 252, 204, 204, 204, 72, 0], [0, 112, 248, 216, 216, 255, 127, 0], [0, 124, 254, 214, 214, 222, 220, 0], [0, 48, 254, 255, 51, 7, 6, 0], [0, 78, 219, 219, 251, 126, 0, 0], [0, 255, 255, 24, 24, 248, 240, 0], [0, 0, 0, 251, 251, 0, 0, 0], [0, 0, 224, 192, 251, 123, 0, 0], [0, 254, 254, 56, 108, 198, 134, 0], [0, 127, 255, 192, 224, 224, 0, 0], [252, 252, 24, 248, 248, 24, 248, 240], [0, 252, 252, 24, 24, 248, 240, 0], [0, 120, 252, 204, 204, 252, 120, 0], [0, 254, 254, 54, 54, 62, 28, 0], [0, 14, 31, 27, 255, 254, 192, 96], [0, 0, 248, 248, 48, 24, 24, 0], [0, 72, 222, 214, 214, 118, 36, 0], [0, 0, 12, 126, 254, 204, 64, 0], /*t*/[0, 120, 248, 192, 192, 248, 120, 0], [0, 56, 120, 192, 192, 120, 56, 0], [248, 248, 192, 112, 112, 192, 248, 248], [0, 136, 216, 112, 112, 216, 136, 0], [0, 12, 24, 240, 240, 24, 12, 0], [0, 198, 230, 246, 222, 206, 0, 0], [0, 24, 126, 195, 129, 0, 0, 0], [0, 0, 0, 255, 255, 0, 0, 0], [0, 0, 0, 129, 195, 126, 24, 0], [0, 12, 6, 12, 24, 48, 24, 0]];
const GLOBAL_ASCII_2D_LEN = GLOBAL_ASCII_2D.length;
const GLOBAL_ASCII_2D_DEFAULT = [];
const fileTypes = [{
    type : "C++",
    datatype : "text/plain",
    extension : "h",
    header : ()=>"",
    trailer : ()=>`const uint8_t * const ASCIIArray[] PROGMEM = {${[...Array(GLOBAL_ASCII_2D_LEN).keys()].map(i=>`arr_${i+32}`).join()}};`
},
{
    type : "JSON",
    datatype : "application/json",
    extension : "json",
    header : ()=>"[",
    trailer : ()=>"]"
},{
    type : "XML",
    datatype : "text/xml",
    extension : "xml",
    header : ()=>"<root>",
    trailer : ()=>"</root>"
},
{
    type : "raw",
    datatype : "text/plain",
    extension : "bin",
    header : ()=>"",
    trailer : ()=>""
},
{
    type : "csv",
    datatype : "text/csv",
    extension : "csv",
    header : ()=>"",
    trailer : ()=>""
}];
var tid;

const state = {
    charCode: 32,
    keyboard: false,
    fileTypeIndex: 0,
    chaserString: "Demo",
    chase : {
        charCodeIndex : 0,
        prevVal : -1,
        prevCharCode : 0,
        dotIndex : 0,
    },
    chaseCharCodeArray: [],
    
    ledChaseInterval: 101,

    ledPanel : {
        prevX : -1,
        prevY : -1,
        mode : 'toggle'
    }
}
const props = {
    LED_PANEL_SCALE: 0.8,
    LEDS_IN_CHASER: 32,
    LED_CHASE_INTERVAL: 100,
}

GLOBAL_ASCII_BUFFER = new Array(props.LEDS_IN_CHASER).fill(0);
function d(i) {
    return document.getElementById(i);
}
function dc(c, i) {
    i = i || 0;
    return document.getElementsByClassName(c)[i];
}
function dae(o, e, f) {
    o.addEventListener(e, f);
}
function dar(o, e, f) {
    o.removeEventListener(e, f);
}
function dce(t) {
    return document.createElement(t);
}
function dcn(o, i) {
    i = i || 0;
    return o.childNodes()[i];
}
function animate({ timing, draw, duration }) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing(timeFraction)
        draw(progress);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

const ascBtnHandler = (ev) => {
    ev.preventDefault();
    const charCode = parseInt(ev.target.id.substring(1));
    state.charCode = charCode;
    drawLEDPanel();
    return false;
}

const drawASCIIButtons = () => {
    if (!state.keyboard) return;
    const BTN_WIDTH = 40; //<-RV
    const NUM_PRINTABLE_ASCII = 95;
    const container = d('ID_KEYBOARD_CONTROLS');
    container.innerHTML = '';
    const width = container.offsetWidth;
    const numBtnsInRow = parseInt(width / BTN_WIDTH);
    const numRows = Math.ceil(NUM_PRINTABLE_ASCII / numBtnsInRow);
    var indexTrack = 0;
    for (var i = 0; i < numRows; i++) {
        const row = dce('div');
        row.setAttribute('class', 'alphabet-row');
        container.appendChild(row);
        for (var j = 0; j < numBtnsInRow; j++, indexTrack++) {
            const charCode = 32 + indexTrack;
            const button = dce('button');
            button.setAttribute('class', 'ASCII-select-btn');
            button.setAttribute('id', `a${charCode}`);
            button.setAttribute('onclick', 'ascBtnHandler(event)');
            button.textContent = String.fromCharCode(charCode);
            row.appendChild(button);
            if (indexTrack >= NUM_PRINTABLE_ASCII - 1) return;
        }
    }
}

const drawLEDPanel = () => {
    const ledPanel = d('ID_LED_PANEL');
    ledPanel.innerHTML = '';
    ledPanelWidth = ledPanel.offsetWidth;
    ledPanel.style.height = `${ledPanelWidth}px`;
    const ledDim = `${ledPanelWidth / 10}px`;
    const rowWidth = `${ledPanelWidth / 8}px`;
    for (var i = 0; i < 8; i++) {
        const row = dce('div');
        row.setAttribute('class', 'led-panel-row');
        ledPanel.appendChild(row);
        row.style.height = rowWidth;
        for (var j = 0; j < 8; j++) {
            const ledID = `l${8 * i + j}`;
            const led = dce('div');
            const isOn = (((GLOBAL_ASCII_2D[state.charCode - 32][j]) >> i) & 0x01) == 1;
            if (isOn) {
                led.setAttribute('class', 'led-on');
            }
            else {
                led.setAttribute('class', 'led');
            }
            led.setAttribute('id', ledID);
            row.appendChild(led);
            d(ledID).style.width = ledDim;
            d(ledID).style.height = ledDim;

        }
    }
}

dae(dc('led-panel-container'), 'contextmenu', (e)=>e.preventDefault());

const ledAction = (e) => {
    const mode = state.ledPanel.mode || 'toggle';
    const ledPanel = d('ID_LED_PANEL');
    
    const ledRect = ledPanel.getBoundingClientRect();

    const startPosX = ledRect.left;
    const startPosY = ledRect.top;
    
    const endPosX = ledRect.right;
    const endPosY = ledRect.bottom;
    
    const ledSide = (endPosX - startPosX) / 8;
    
    const currPosX = e.clientX;
    const currPosY = e.clientY;
    
    const currIndX = parseInt((currPosX - startPosX) / ledSide);
    const currIndY = parseInt((currPosY - startPosY) / ledSide);

    const allData = {
        startPosX : startPosX,
        startPosY : startPosY,
        endPosX : endPosX,
        endPosY : endPosY,
        ledSide : ledSide,
        currPosX : currPosX,
        currPosY : currPosY,
        currIndX : currIndX,
        currIndY : currIndY
    }
    //console.table(allData);

    const checkOldIndex = state.ledPanel.prevX == currIndX && state.ledPanel.prevY == currIndY;
    if(checkOldIndex) return;
    state.ledPanel.prevX = currIndX;
    state.ledPanel.prevY = currIndY;


    const ledID = `l${8 * currIndY + currIndX}`;
    const led = d(ledID);

    var ledColumn = GLOBAL_ASCII_2D[state.charCode-32][currIndX];
    var isOn;
    if(mode == 'on'){
        ledColumn |= 1<<currIndY;
        isOn = true;
    }else if(mode == 'off'){
        ledColumn &= ~(1<<currIndY);
        isOn = false;
    }else{
        ledColumn ^= 1<<currIndY;
        isOn = (ledColumn>>currIndY)&0x01 == true;
    }

    GLOBAL_ASCII_2D[state.charCode-32][currIndX] = ledColumn;

    if(isOn){
        led.removeAttribute("class");
        led.setAttribute("class","led-on");
    }else{
        led.removeAttribute("class");
        led.setAttribute("class","led");
    }
}
const ledActionWrapper = (e)=>{
    e.preventDefault();
    const type = e.type;
    var action;
    if(type == "mousemove"){
        action  =   {  
                        clientX : e.clientX,
                        clientY : e.clientY
                    }
    }else if(type == "touchmove"){
        action  =   {  
            clientX : e.touches[0].clientX,
            clientY : e.touches[0].clientY
        }
    }


    ledAction(action);
}
const onledActionEvent = (e) => {
    e.preventDefault();

    state.ledPanel.prevX = -1;
    state.ledPanel.prevY = -1;

    const type = e.type;
    var mode = "toggle";
    state.ledPanel.mode = mode;
    
    if(type == "mousedown"){
        mode = e.which == 1? "on" : "off";
        state.ledPanel.mode = mode;
        ledAction({clientX : e.clientX, clientY : e.clientY});
        dae(d('ID_LED_PANEL'), 'mousemove', ledActionWrapper);
        return;
    }
    if(type == "mouseup"){
        dar(d('ID_LED_PANEL'), 'mousemove', ledActionWrapper);
        return;
    }
    if(type == "touchstart"){
        mode = "toggle";
        state.ledPanel.mode = mode;
        ledAction({clientX : e.touches[0].clientX, clientY : e.touches[0].clientY});
        dae(d('ID_LED_PANEL'), 'touchmove', ledActionWrapper);
        return;
    }
    if(type == "touchend"){
        dar(d('ID_LED_PANEL'), 'touchmove', ledActionWrapper);
        return;
    }
}

dae(d('ID_LED_PANEL'), 'mousedown', onledActionEvent);
dae(d('ID_LED_PANEL'), 'mouseup', onledActionEvent);
dae(dc('led-panel-container'),'mouseup',onledActionEvent);

dae(d('ID_LED_PANEL'), 'touchstart', onledActionEvent);
dae(d('ID_LED_PANEL'), 'touchend', onledActionEvent);
dae(dc('led-panel-container'),'touchend',onledActionEvent);


dae(d('ID_LED_KEYBOARD'), 'click', (e) => {
    e.preventDefault();
    state.keyboard = !state.keyboard;
    const keyboard = d('ID_KEYBOARD_CONTAINER');
    keyboard.setAttribute("class", state.keyboard ? "alphabet-container" : "dn");
    if (state.keyboard) drawASCIIButtons();
});
dae(d('ID_LED_COLOR'), 'input', (e) => {
    const color = e.target.value;
    const root = document.querySelector(':root');
    root.style.setProperty('--ledOnColor', color);
})

const createRestoreDefault = ()=>{
    GLOBAL_ASCII_2D.forEach(i => {
        GLOBAL_ASCII_2D_DEFAULT.push([...i]);
    });
}
/* LED Chaser */
const drawLEDChaserPanel = () => {
    const ledChaserPanel = d('ID_LED_CHASER_PANEL');
    const width = ledChaserPanel.offsetWidth;
    const numLEDs = props.LEDS_IN_CHASER;
    const ledBlockSize = width/numLEDs;
    const rowHeight = ledBlockSize;
    const ledSize = `${ledBlockSize*props.LED_PANEL_SCALE}px`;

    ledChaserPanel.innerHTML = "";
    for (var i = 0; i < 8; i++) {
        const row = dce('div');
        row.setAttribute("class", "led-chaser-row");
        ledChaserPanel.appendChild(row);
        row.style.height = `${rowHeight}px`;
        for (var j = 0; j < numLEDs; j++) {
            const ledID = `c${numLEDs * i + j}`;
            const led = dce('div');
            const isOn = (GLOBAL_ASCII_BUFFER[j] >> i) & 0x01 == 1;
            if (isOn) {
                led.setAttribute('class', 'led-on');
            }
            else {
                led.setAttribute('class', 'led');
            }
            led.setAttribute('id', ledID);
            row.appendChild(led);
            d(ledID).style.width = ledSize;
            d(ledID).style.height = ledSize;
        }
    }
}
const updateLEDChaserPanel = () => {
    const numLEDs = props.LEDS_IN_CHASER;

    
    for (var i = 0; i < 8; i++) {
        for(var j=0; j<numLEDs; j++){
            const LED_ID = `c${numLEDs*i + j}`;
            const isOn = (GLOBAL_ASCII_BUFFER[j] >> i) & 0x01 == 1;
            const led = d(LED_ID);
            led.removeAttribute('class');
            if (isOn) {
                led.setAttribute('class', 'led-on');
            }
            else {
                led.setAttribute('class', 'led');
            }
        }
    }
}
const toCharCodeArray = () => {
    var charCodeArr = []
    const s = state.chaserString;
    for (var i = 0; i < s.length; i++) {
        charCodeArr.push(s.charCodeAt(i));
    }
    numSpaces = Math.round(props.LEDS_IN_CHASER / 8);
    spaces = new Array(numSpaces).fill(32);
    charCodeArr = [...charCodeArr, ...spaces];
    state.chaseCharCodeArray = charCodeArr;
    console.log(state.chaseCharCodeArray)
}
const getNextBufferValue = () => {
    const length = state.chaseCharCodeArray.length; //numOfChars+spaces(4)
    const dotLength = length*8;
    var charIndex = state.chase.charCodeIndex % length;
    var dotIndex = state.chase.dotIndex % dotLength;
    var currDotIndex = dotIndex % 8;
    var prevCharCode = state.chase.prevCharCode;
    var prevVal = state.chase.prevVal;
    
    var nextVal = GLOBAL_ASCII_2D[state.chaseCharCodeArray[charIndex] - 32][currDotIndex];
    
    if(prevVal != 0 && nextVal != 0 && prevCharCode != charIndex){
        state.chase.prevVal = 0;
        nextVal = 0;
        return nextVal;
    }
    
    while(prevVal == 0 && nextVal == 0 && state.chaseCharCodeArray[charIndex]!=32){
        prevVal = nextVal;
        prevCharCode = charIndex;
        dotIndex = (dotIndex + 1) % dotLength;
        currDotIndex = dotIndex % 8;
        charIndex = parseInt(dotIndex/8) % length;
        nextVal = GLOBAL_ASCII_2D[state.chaseCharCodeArray[charIndex] - 32][currDotIndex];
    }
    
    prevCharCode = charIndex;
    dotIndex = (dotIndex + 1) % dotLength;
    charIndex = parseInt(dotIndex/8) % length;
    prevVal = nextVal;
    

    state.chase.charCodeIndex = charIndex;
    state.chase.dotIndex = dotIndex;
    state.chase.prevCharCode = prevCharCode;
    state.chase.prevVal = prevVal
    return nextVal;
}

const updateChaserBuffer = () => {
    GLOBAL_ASCII_BUFFER.shift();
    var nextVal = getNextBufferValue(); 
    GLOBAL_ASCII_BUFFER.push(nextVal);
    updateLEDChaserPanel();
    tid = setTimeout(updateChaserBuffer, state.ledChaseInterval);
}


const ValidateText = (text)=>{
    if(text == "") return false;
    if(!(/^[\x00-\x7F]*$/.test(text))) return false;
    return true; 
}

const arrayToString = (charCode, arr, index) => {
    if(fileTypes[index].type == "C++"){
        return `uint8_t arr_${charCode}[8] = {${arr.join()}};`;
    }
    if(fileTypes[index].type == "JSON"){
        return `[${arr.join()}]`;
    }
    if(fileTypes[index].type == "XML"){
        return `<arr_${charCode}>${arr.join()}</arr_${charCode}>`;
    }
    if(fileTypes[index].type == "raw"){
        return arr.join();
    }
    if(fileTypes[index].type == "csv"){
        return arr.join();
    }
}
const downloadFile = (fileName, data, fileType) => {
    var blobObj = new Blob([data],{type: fileType});
    var a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(blobObj);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

const submitChaseText = (e) => {
    e.preventDefault();
    const textObj = d('ID_LED_CHASE_TEXT');
    const st = textObj.value;
    textObj.value = "";
    if(!ValidateText(st)){
        return;
    }
    state.chaserString = st; //apply Validation
    toCharCodeArray();
    //reset state variables
    state.chase.dotIndex = 0;
    state.chase.charCodeIndex = 0; 
    state.chase.prevVal = -1;
    state.chase.prevCharCode = 0;

    GLOBAL_ASCII_BUFFER = GLOBAL_ASCII_BUFFER.fill(0);
    updateLEDChaserPanel();
}
/* End LED Chaser */
dae(window, 'resize', () => {
    drawASCIIButtons();
    drawLEDPanel();
    drawLEDChaserPanel();
});

dae(document, 'DOMContentLoaded', () => {

    createRestoreDefault();
    drawASCIIButtons();
    drawLEDPanel();
    drawLEDChaserPanel();

    toCharCodeArray();
    dae(d('ID_LED_TRASH'), 'click', (e) => {
        e.preventDefault();
        GLOBAL_ASCII_2D[state.charCode - 32] = new Array(8).fill(0);
        drawLEDPanel();
    });
    dae(d('ID_LED_RESTORE'), 'click', (e) => {
        e.preventDefault();
        GLOBAL_ASCII_2D[state.charCode - 32] = [ ...GLOBAL_ASCII_2D_DEFAULT[state.charCode - 32]];
        drawLEDPanel();
    });
    dae(d('ID_LED_LEFT_SHIFT'), 'click', (e) => {
        e.preventDefault();
        const arr = GLOBAL_ASCII_2D[state.charCode - 32];
        arr.push(arr.shift());
        drawLEDPanel();
    });
    dae(d('ID_LED_RIGHT_SHIFT'), 'click', (e) => {
        e.preventDefault();
        const arr = GLOBAL_ASCII_2D[state.charCode - 32];
        arr.unshift(arr.pop());
        drawLEDPanel();
    });
    dae(d('ID_ROTATE'),'click',(e)=>{
        e.preventDefault();
        const rotatedArr = new Array(8).fill(0);
        for(var i=0; i<8; i++){
            for(var j=0; j<8; j++){
                rotatedArr[j] |= ((GLOBAL_ASCII_2D[state.charCode - 32][i]>>(7-j))&0x01)<<(i);
            }
        }
        GLOBAL_ASCII_2D[state.charCode - 32] = rotatedArr;
        drawLEDPanel();
    })
    dae(d('ID_DWN_TYPE'),'click',(e)=>{
        e.preventDefault();
        const p = d('ID_DWN_TYPE').childNodes[0]; 
        const arrLength = fileTypes.length;
        const index = (state.fileTypeIndex+1)%arrLength;
        p.innerHTML = fileTypes[index].type;
        state.fileTypeIndex = index;
    });
    dae(d('ID_LED_DWN'),'click',()=>{
        const charCode = state.charCode;
        const arr = GLOBAL_ASCII_2D[state.charCode - 32];
        const index = state.fileTypeIndex;
        var blobString = arrayToString(charCode, arr, index);
        var fileType = fileTypes[index].datatype;
        var fileName = `CLM_${charCode}.${fileTypes[index].extension}`;
        downloadFile(fileName, blobString, fileType);
    });
    dae(d('ID_LED_DWN_ALL'),'click',()=>{
        const index = state.fileTypeIndex;
        const header = fileTypes[index].header();
        const trailer = fileTypes[index].trailer();
        const fileType = fileTypes[index].datatype;
        var blobString = header == ""? "" : `${header}\n`;
        GLOBAL_ASCII_2D.forEach((i,j)=>{
            blobString = `${blobString}${arrayToString(j+32,i,index)}\n`;
        });
        blobString = `${blobString}\n${trailer}`;
        const fileName = `CLM_ASCII_TABLE.${fileTypes[index].extension}`;
        downloadFile(fileName, blobString, fileType);
    });
    dae(d('ID_LED_CHASE_SPEED'), 'change', (e) => {
        e.preventDefault();
        const val = 1000 - parseInt(e.target.value) * 10 + 1;
        clearTimeout(tid);
        state.ledChaseInterval = val;
        tid = setTimeout(updateChaserBuffer, val);
    });
    dae(d('ID_LED_CHASE_TEXT_SUBMIT'), 'click', submitChaseText);
    dae(d('ID_LED_CHASE_TEXT'),'keydown',(e)=>{
        if(e.key === "Enter" ){
            submitChaseText(e);
        }
    });
    tid = setTimeout(updateChaserBuffer, state.ledChaseInterval);
});