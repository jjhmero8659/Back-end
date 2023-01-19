let apple; //사과 하나
let snake = []; //뱀 전체 (뱀 몸의 객체를 가지고 있는 배열, list)
const DIRECTION = { up: 8, down: 2, left: 4, right: 6 };
const mainCanvas = document.getElementById('main-canvas');
const canvasContext = mainCanvas.getContext('2d');
const score = document.getElementById('score');
let gameFrame = 100; //게임 난이도 조절을 위한 속도 부분
let gameID = null; //현재 진행중인 id값을 설정하는 부분

init();
setInterval(main_loop(),300);

//뱀의 몸 부분 (파트) - 해당 몸의 x좌표, y좌표, width, height, 방향
function SnakePart(x, y, w, h, dir){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dir = dir;
}
//사과 객체에 대한 정보
function Apple(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}
//처음 시작 시 -> 스페이스 바를 눌러서 게임 시작했을 시
function init(){
    gameFrame = 100;
    //게임 재 시작시 현재까지의 뱀 초기화
    snake = [];
    //score 0으로 초기화
    score.textContent = 0;
    // 배경을 그린다
    create_rect(0, 0, mainCanvas.width, mainCanvas.height, 'black');
    // 뱀 머리를 하나 생성한다 => 뱀 전체 리스트에 넣는다
    snake.push(new SnakePart(60, 60, 20, 20, DIRECTION.right));
    // 사과(먹이)를 하나 생성한다
    apple = new Apple(80, 80, 20, 20);
}
//게임이 진행되는 메인 루프
function main_loop(){
    clear(); //현재 캔버스 전부 지운다
    move_snake(); //뱀을 움직인다
    draw(); //현재 캔버스 다시 그린다
    collision_check(); //사과 혹은 벽과 충돌했는가? 체크
}
//캔버스 다시 그리기
function draw(){
    //배경 그리기
    create_rect(0, 0, mainCanvas.width, mainCanvas.height, 'black');
    //뱀 몸통 전체 그리기
    for(let i = snake.length - 1; i >= 0; i--){
        if(i === 0){ //머리부분
            create_rect(snake[i].x, snake[i].y, snake[i].w, snake[i].h, 'blue');
        }
        else if(i === snake.length - 1){
            create_rect(snake[i].x, snake[i].y, snake[i].w, snake[i].h, 'yellow');
        }
        else{
            create_rect(snake[i].x, snake[i].y, snake[i].w, snake[i].h, 'white');
        }
    }
    //사과 객체 그리기
    create_rect(apple.x, apple.y, apple.w, apple.h, 'red');
}
//뱀을 움직인다
function move_snake(){
    snake.unshift(calc_coordinate(snake[0])); //새로운 머리로 교체
    snake.pop(); //꼬리 삭제
}
//사과 먹었을 시 새로운 뱀 몸통 추가
function create_snake(){
    const tail = snake[snake.length - 1];
    const newTail = {x: tail.x, y: tail.y, w: tail.w, h: tail.h, dir: tail.dir};
    switch (newTail.dir){
        case DIRECTION.up:
            newTail.y += 20;
            break;
        case DIRECTION.down:
            newTail.y -= 20;
            break;
        case DIRECTION.left:
            newTail.x += 20;
            break;
        case DIRECTION.right:
            newTail.x -= 20;
            break;
    }
    snake.push(new SnakePart(newTail.x, newTail.y, newTail.w, newTail.h, newTail.dir));
}
//뱀 머리가 사과의 위치랑 일치하는지 검사 => 사과를 먹었다
function collision_check(){
    if( //만약 뱀 머리가 맵을 벗어났다면
        snake[0].x < mainCanvas.clientLeft || //왼쪽
        snake[0].x >= mainCanvas.clientLeft + mainCanvas.width || //오른쪽
        snake[0].y < mainCanvas.clientTop || //위
        snake[0].y >= mainCanvas.clientTop + mainCanvas.height //아래
    ){
        game_over();
    }
    // 뱀 머리가 사과의 위치랑 일치 한다면 => 사과를 먹었다면
    else if(snake[0].x === apple.x && snake[0].y === apple.y){
        //새로운 사과를 생성한다 => 랜덤 위치에 생성
        const appleXPos = parseInt(Math.random() * 19) * 20;
        const appleYPos = parseInt(Math.random() * 19) * 20;
        apple = new Apple(appleXPos, appleYPos, 20, 20);
        //점수를 올린다
        score.textContent = +score.textContent + 20;
        //뱀 몸통 하나 더 생성
        create_snake();
        clearInterval(gameID);
        gameFrame -= 10;
        gameID = setInterval(main_loop, gameFrame);
    }
    //머리와 자기 몸통이랑 부딪혔는가 체크
    for(let i = 1; i < snake.length; i++){
        if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
            game_over();
        }
    }
}
//뱀이 움직일 방향을 결정하고 다음 위치를 설정함
function calc_coordinate(snakePart){
    const newSnake = {x: snakePart.x, y: snakePart.y, w: snakePart.w, h: snakePart.h, dir: snakePart.dir};
    switch (snakePart.dir){
        case DIRECTION.up:
            newSnake.y -= 20;
            break;
        case DIRECTION.down:
            newSnake.y += 20;
            break;
        case DIRECTION.left:
            newSnake.x -= 20;
            break;
        case DIRECTION.right:
            newSnake.x += 20;
            break;
    }
    return newSnake;
}
//캔버스에 사각형을 그린다
function create_rect(x, y, w, h, color){
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, w, h);
}
//캔버스를 재설정
function clear(){
    canvasContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
}
//게임 오버되었을 때 설정
function game_over(){
    clearInterval(gameID); //게임오버. 동작 중지
    gameID = null; //gameID를 없애준다
    clear(); //화면을 지운다
    create_rect(0, 0, mainCanvas.width, mainCanvas.height, 'black'); //배경 다시 그리기
    canvasContext.font = "50px serif"; //게임오버 문장 설정
    canvasContext.fillStyle = 'red';
    canvasContext.fillText("GAME OVER", 10, (mainCanvas.clientTop + mainCanvas.height) / 2);
}
//현재 문서에서 키보드 눌렀을 때 동작 => 뱀을 움직인다
document.addEventListener('keydown', e => {
    switch (e.key){
        case 'ArrowUp':
            snake[0].dir = DIRECTION.up;
            break;
        case 'ArrowDown':
            snake[0].dir = DIRECTION.down;
            break;
        case 'ArrowLeft':
            snake[0].dir = DIRECTION.left;
            break;
        case "ArrowRight":
            snake[0].dir = DIRECTION.right;
            break;
        case " ": //스페이스 바 눌렀을 시
            if(gameID === null) {
                init(); //게임 초기화
                gameID = setInterval(main_loop, gameFrame); //현재 게임 ID를 가져오며 시작
            }
            break;
    }
})