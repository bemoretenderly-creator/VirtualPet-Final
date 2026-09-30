image.setPalette(hex`000000fffaf0b77b68ff93c4e5b47ef5c451249ca3e8f2ed003fad87f2ff8e2ec47b899e56647ba5b2c5d9a066293244`)
scene.setBackgroundColor(8)
game.splash("MY VIRTUAL PET", "Press A to start")
//  Pet selection background
let selection_background = image.create(160, 120)
selection_background.fill(7)
//  Top title bar
selection_background.fillRect(0, 0, 160, 18, 8)
selection_background.print("CHOOSE YOUR PET", 35, 5, 1)
//  Two pet cards
selection_background.fillRect(5, 23, 74, 92, 1)
selection_background.fillRect(81, 23, 74, 92, 1)
selection_background.drawRect(5, 23, 74, 92, 15)
selection_background.drawRect(81, 23, 74, 92, 15)
//  Pet names
selection_background.print("BLUE CAT", 18, 103, 15)
selection_background.print("CORGI", 103, 103, 15)
scene.setBackgroundImage(selection_background)
//  Blue cat
let cat_icon = sprites.create(img`
.....f.....................f........
.....f.....................f........
.....ff...................ff........
.....fcf.................fcf........
....ffcff.......f.......ffcff.......
....ffccf.ffffffdffffff.fccff.......
....ffccffbdddddddddddbffccff.......
....ffffbdddddddddddddddbffff.......
...fffbbdddddddddddddddddbbfff......
...ffbbdddddddddddddddddddbbff......
...fbbbdddddddddddddddddddbbbf......
..fbbbdddddddddddddddddddddbbbf.....
.ffbbbbdcdddddddddddddddcdbbbbff....
.fbbbcccccccdddddddddcccccccbbbf....
.fbbcc555555cddddddd555555cccbbf....
.fbbcc551ff5cddddddd51ff55cccbbf....
fbbccc55fff5ccdddddc5fff55ccccbbf...
.fbbcc55fff5dddddddddfff55cccbbf....
.fbbcc55fffdddddddddddff55cccbbf....
.fbbbcccccdddddddddddddcccccbbbf....
.ffbbbbbcbddddffffdddddbcbbbbbff....
..fbbbbbbdddddffffddddddbbbbbbf.....
...fdbbbbbddddf33fdddddbbbbbdf......
...dfbbbbbdddddddddddddbbbbbfd......
..d..fbbbbbddfdddddfddbbbbbf..d.....
......ffbbbbddfffffddbbbbff.........
.......fffbbbbbbdbbbbbbfff..ffff....
......ffbbffffffbffffffbbfffffffff..
......fbbbbbddddfddddbbbbbfffffffff.
.....ffbbbbdddddddddddbbbbffbbbbbfff
.....fbbbbbdddddddddddbbbbbfbbbbbbff
.....fbbbbbdddddddddddbbbbbfbbbbbbff
.....fbbbbbdddddbdddddbbbbbfbbbbbbbf
.....fbbbbbdddbbbbbdddbbbbbfbbbbbbbf
....fbbbbbddddbbbbbddddbbbbbfbbbbbbf
.....fbbbbbddbbbbbbbddbbbbbf.fbbbbbf
.....fbbbbbddbbbbbbbddbbbbbf.fbbbbbf
.....fbbbbbddbbbbbbbddbbbbbf.bbbbbbf
.....fbbbbbdbbbbbbbbbdbbbbbffbbbbbbf
.....ffbbbbbfbbbbbbbfbbbbbffbbbbbbff
.....fbbbbbbbfbbbbbfbbbbbbbfbbbbbbff
.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
....ffbbbbbbbffbbbffbbbbbbbffbbbbfff
.....ffbbbbbffbbbbbffbbbbbffbbbbffff
.....ffffbffffbbbbbffffbffffbbfffff.
......fffffffbbbbbbbffffffffffffff..
.........f..ffffbffff..fffffffff....
................f........ffffff.....
`, SpriteKind.Player)
//  Corgi
let corgi_icon = sprites.create(img`
    ...................................
    ..........f.............f..........
    ..........ff...........ff..........
    .........fef...........fef.........
    .........fee...........eef.........
    .........fe2f.........feef.........
    .........fe2ef.......fe2ef.........
    .........fffffffffffffffff.........
    .......ffe444eee111eee444eff.......
    .......fee444eee111eee444eef.......
    ......ff44eeeee11111eeeee44ff......
    ......fe44eeeee11111eeeee44ef......
    ......fe44eeeee11111eeeee44ef......
    ......fe44ef1cfe111ef1cfe44ef......
    ......fe44efccfe111efccfe44ef......
    .......f44effffe111effffe44f.......
    .......feeeee111eee111eeeeef.......
    .......fee111111fff111111eef.......
    ........fe111111fff111111ef........
    ........fee111111f111111eef........
    ..........f1111221221111f..........
    ..........fff111111111fff..........
    ............fffffffffff............
    ..........fffffffffffffff..........
    ....ffffffee11111111111eeffffff....
    ..ffeeeeeeee11111111111eeeeeeeeff..
    ..fe44444eee11111111111eee44444ef..
    .ffe44444eeee111111111eeee44444eff.
    .fee44444eeee111111111eeee44444eef.
    .fee44444eeee111111111eeee44444eef.
    .fee44444eeeee1111111eeeee44444eef.
    .ffe44444eeeee1111111eeeee44444eff.
    ..feeef1111fee1111111eef1111feeef..
    ..fffff1111feeeeeeeeeeef1111fffff..
    .....ff1111fffffffffffff1111ff.....
    ......ffffff...........ffffff......
`, SpriteKind.Player)
cat_icon.setPosition(42, 66)
corgi_icon.setPosition(118, 66)
corgi_icon.setScale(1.25, ScaleAnchor.Middle)
//  Awake and sleeping pet images
let cat_awake_image = cat_icon.image.clone()
let corgi_awake_image = corgi_icon.image.clone()
let cat_sleep_image = cat_awake_image.clone()
cat_sleep_image.fillRect(6, 14, 6, 5, 13)
cat_sleep_image.fillRect(20, 14, 6, 5, 13)
cat_sleep_image.drawLine(7, 17, 10, 17, 15)
cat_sleep_image.drawLine(21, 17, 24, 17, 15)
let corgi_sleep_image = corgi_awake_image.clone()
corgi_sleep_image.fillRect(12, 13, 3, 3, 1)
corgi_sleep_image.fillRect(21, 13, 3, 3, 1)
corgi_sleep_image.drawLine(12, 14, 14, 14, 15)
corgi_sleep_image.drawLine(21, 14, 23, 14, 15)
//  Yellow selection frame
let frame_image = image.create(46, 58)
frame_image.drawRect(0, 0, 45, 57, 5)
let selector = sprites.create(frame_image, SpriteKind.Projectile)
selector.setPosition(42, 66)
//  Room action menu
let menu_image = image.create(160, 18)
menu_image.fill(1)
menu_image.drawLine(0, 0, 159, 0, 15)
menu_image.print("FEED", 14, 6, 15)
menu_image.print("PLAY", 68, 6, 15)
menu_image.print("REST", 122, 6, 15)
let menu_bar = sprites.create(menu_image, SpriteKind.Projectile)
menu_bar.setPosition(-100, -100)
let action_frame = image.create(44, 16)
action_frame.drawRect(0, 0, 43, 15, 5)
let action_selector = sprites.create(action_frame, SpriteKind.Projectile)
action_selector.setPosition(-100, -100)
let selected_pet = 0
let selection_finished = false
let in_room = false
let action_choice = 0
let action_busy = false
let in_play_scene = false
let in_rest_scene = false
let pet_need = -1
let need_active = false
let care_streak = 0
function update_action_selector() {
    if (action_choice == 0) {
        action_selector.setPosition(27, 111)
    } else if (action_choice == 1) {
        action_selector.setPosition(80, 111)
    } else {
        action_selector.setPosition(133, 111)
    }
    
}

function smooth_move_to_x(target_x: number, speed: number) {
    let moving_pet: Sprite;
    if (selected_pet == 0) {
        moving_pet = cat_icon
    } else {
        moving_pet = corgi_icon
    }
    
    if (moving_pet.x < target_x) {
        moving_pet.vx = speed
        while (moving_pet.x < target_x) {
            pause(20)
        }
    } else {
        moving_pet.vx = 0 - speed
        while (moving_pet.x > target_x) {
            pause(20)
        }
    }
    
    moving_pet.vx = 0
    moving_pet.x = target_x
}

function show_need_clue() {
    let clue_pet: Sprite;
    let index: number;
    if (selected_pet == 0) {
        clue_pet = cat_icon
    } else {
        clue_pet = corgi_icon
    }
    
    let start_x = clue_pet.x
    let start_y = clue_pet.y
    if (pet_need == 0) {
        //  Hungry: slowly moves towards the feeding side
        for (index = 0; index < 2; index++) {
            clue_pet.x -= 3
            clue_pet.y += 1
            pause(180)
            clue_pet.y -= 1
            pause(180)
        }
    } else if (pet_need == 1) {
        //  Playful: cat wiggles, corgi jumps
        if (selected_pet == 0) {
            for (index = 0; index < 2; index++) {
                clue_pet.x -= 3
                pause(120)
                clue_pet.x += 6
                pause(120)
                clue_pet.x -= 3
                pause(120)
            }
        } else {
            for (index = 0; index < 2; index++) {
                clue_pet.y -= 4
                pause(140)
                clue_pet.y += 4
                pause(140)
            }
        }
        
    } else {
        //  Tired: briefly closes its eyes
        if (selected_pet == 0) {
            clue_pet.setImage(cat_sleep_image)
        } else {
            clue_pet.setImage(corgi_sleep_image)
        }
        
        clue_pet.y += 2
        clue_pet.sayText("z...", 700)
        pause(700)
        if (selected_pet == 0) {
            clue_pet.setImage(cat_awake_image)
        } else {
            clue_pet.setImage(corgi_awake_image)
        }
        
    }
    
    clue_pet.setPosition(start_x, start_y)
}

function show_wrong_reaction() {
    let reaction_pet: Sprite;
    if (selected_pet == 0) {
        reaction_pet = cat_icon
    } else {
        reaction_pet = corgi_icon
    }
    
    let start_x = reaction_pet.x
    let start_y = reaction_pet.y
    //  A small confused head shake
    for (let index = 0; index < 2; index++) {
        reaction_pet.x = start_x - 3
        pause(110)
        reaction_pet.x = start_x + 3
        pause(110)
    }
    reaction_pet.setPosition(start_x, start_y)
    music.playTone(165, 100)
    music.playTone(131, 140)
    reaction_pet.sayText("?", 500)
    pause(500)
}

function show_bond_moment() {
    let bond_pet: Sprite;
    let start_x: number;
    if (selected_pet == 0) {
        bond_pet = cat_icon
    } else {
        bond_pet = corgi_icon
    }
    
    let heart_sprite = sprites.create(img`
.33.33.
3333333
3333333
.33333.
..333..
...3...
`, SpriteKind.Projectile)
    heart_sprite.z = 20
    heart_sprite.setPosition(bond_pet.x + 20, bond_pet.y - 22)
    heart_sprite.vy = -8
    music.playTone(523, 80)
    music.playTone(659, 80)
    music.playTone(784, 120)
    if (selected_pet == 0) {
        //  Blue cat gives a slow blink
        bond_pet.setImage(cat_sleep_image)
        bond_pet.sayText("Purr...", 800)
        pause(400)
        bond_pet.setImage(cat_awake_image)
        pause(400)
    } else {
        //  Corgi does an excited wiggle
        start_x = bond_pet.x
        for (let index = 0; index < 3; index++) {
            bond_pet.x = start_x - 3
            pause(90)
            bond_pet.x = start_x + 3
            pause(90)
        }
        bond_pet.x = start_x
        bond_pet.sayText("Yay!", 600)
        pause(600)
    }
    
    heart_sprite.destroy()
}

function finish_correct_care() {
    
    if (care_streak >= 3) {
        show_bond_moment()
        care_streak = 0
    }
    
    pause(300)
    choose_new_need()
}

function choose_new_need() {
    
    
    let new_need = randint(0, 2)
    //  Do not immediately repeat the same need
    if (new_need == pet_need) {
        new_need += 1
        if (new_need > 2) {
            new_need = 0
        }
        
    }
    
    pet_need = new_need
    need_active = true
    show_need_clue()
}

function feed_pet() {
    let pet: Sprite;
    let food_sprite: Sprite;
    let index: number;
    
    if (action_busy) {
        return
    }
    
    action_busy = true
    //  Blue food bowl
    let bowl_sprite = sprites.create(img`
........................
..ffffffffffffffffffff..
.f99999999999999999999f.
.f98888888888888888889f.
..f888888888888888888f..
...f8888888888888888f...
....ffffffffffffffff....
........................
`, SpriteKind.Food)
    bowl_sprite.setPosition(27, 94)
    if (selected_pet == 0) {
        pet = cat_icon
        //  Salmon for the cat
        food_sprite = sprites.create(img`
............................
...........ffff.............
.........ff4444ff...........
...ff...f44444444fff........
..f44f.f443333334444ff......
.f4444f4433333333444441f....
..f44f.f443333334444ff......
...ff...f44444444fff........
.........ff4444ff...........
...........ffff.............
............................
`, SpriteKind.Food)
        food_sprite.setPosition(27, 84)
    } else {
        pet = corgi_icon
        //  Bone for the corgi
        food_sprite = sprites.create(img`
....................
..ff..........ff....
.f11f........f11f...
f1111ffffffff1111f..
f1111111111111111f..
.f11f........f11f...
..ff..........ff....
....................
`, SpriteKind.Food)
        food_sprite.setPosition(27, 86)
    }
    
    let start_x = pet.x
    //  Food jumps above the bowl
    for (index = 0; index < 3; index++) {
        food_sprite.y -= 3
        pause(130)
        food_sprite.y += 3
        pause(130)
    }
    //  Pet walks towards the bowl
    smooth_move_to_x(64, 22)
    //  Food is eaten
    food_sprite.destroy()
    music.playTone(523, 100)
    music.playTone(659, 140)
    pet.sayText("Yum!", 700)
    //  Happy jump
    for (index = 0; index < 2; index++) {
        pet.y -= 4
        pause(120)
        pet.y += 4
        pause(120)
    }
    bowl_sprite.destroy()
    //  Pet returns to the centre
    smooth_move_to_x(start_x, 22)
    pause(300)
    finish_correct_care()
    action_busy = false
}

//  Door images used only by the corgi
let dog_door_closed = image.create(24, 48)
dog_door_closed.fill(15)
dog_door_closed.fillRect(3, 3, 18, 45, 14)
dog_door_closed.fillRect(17, 24, 2, 2, 5)
let dog_door_half = image.create(24, 48)
dog_door_half.fill(15)
dog_door_half.fillRect(11, 3, 10, 45, 14)
dog_door_half.fillRect(18, 24, 2, 2, 5)
let dog_door_open = image.create(24, 48)
dog_door_open.fill(15)
dog_door_open.fillRect(19, 3, 3, 45, 14)
//  Blue cat transition head
let cat_transition_head = img`
................
..bb........bb..
.bdbb......bbdb.
.bddbbbbbbbbddb.
.bddddddddddddb.
bddddddddddddddb
bddccddddddccddb
bdc55cddddc55cdb
bdc5fcddddcf5cdb
bddccddddddccddb
bdddddd33ddddddb
.bddddddddddddb.
..bddffffffddb..
...bbddddddbb...
.....bbbbbb.....
................
`
//  Corgi transition head
let corgi_transition_head = img`
................
..ee........ee..
.e4ee......ee4e.
.e44eeeeeeee44e.
.e444ee11ee444e.
e444ee1111ee444e
e44e11eeee11e44e
e44e1c1ee1c1e44e
e44e111ee111e44e
.e4ee11ff11ee4e.
.eeeee1ff1eeeee.
..ee1112211ee...
...ee111111ee...
....eeeeeeee....
................
................
`
function wipe_to_play_scene() {
    let transition_icon: Sprite;
    let wipe_image = image.create(160, 120)
    wipe_image.fill(8)
    let wipe_sprite = sprites.create(wipe_image, SpriteKind.Projectile)
    if (selected_pet == 0) {
        transition_icon = sprites.create(cat_transition_head, SpriteKind.Projectile)
    } else {
        transition_icon = sprites.create(corgi_transition_head, SpriteKind.Projectile)
    }
    
    wipe_sprite.z = 100
    transition_icon.z = 101
    transition_icon.setScale(2, ScaleAnchor.Middle)
    wipe_sprite.setPosition(-80, 60)
    transition_icon.setPosition(-80, 60)
    wipe_sprite.vx = 180
    transition_icon.vx = 180
    while (wipe_sprite.x < 80) {
        pause(20)
    }
    wipe_sprite.vx = 0
    transition_icon.vx = 0
    wipe_sprite.x = 80
    transition_icon.x = 80
    //  Small bounce in the centre
    transition_icon.y -= 3
    pause(120)
    transition_icon.y += 3
    pause(120)
    if (selected_pet == 0) {
        scene.setBackgroundImage(cat_play_background)
        cat_icon.setPosition(80, 72)
    } else {
        scene.setBackgroundImage(garden_background)
        corgi_icon.setPosition(30, 78)
    }
    
    pause(150)
    wipe_sprite.vx = 180
    transition_icon.vx = 180
    while (wipe_sprite.x < 240) {
        pause(20)
    }
    transition_icon.destroy()
    wipe_sprite.destroy()
}

function wipe_back_to_room() {
    let transition_icon: Sprite;
    let return_door = sprites.create(dog_door_open, SpriteKind.Projectile)
    return_door.setPosition(-100, -100)
    return_door.z = -1
    let wipe_image = image.create(160, 120)
    wipe_image.fill(8)
    let wipe_sprite = sprites.create(wipe_image, SpriteKind.Projectile)
    if (selected_pet == 0) {
        transition_icon = sprites.create(cat_transition_head, SpriteKind.Projectile)
    } else {
        transition_icon = sprites.create(corgi_transition_head, SpriteKind.Projectile)
    }
    
    wipe_sprite.z = 100
    transition_icon.z = 101
    transition_icon.setScale(2, ScaleAnchor.Middle)
    wipe_sprite.setPosition(240, 60)
    transition_icon.setPosition(240, 60)
    wipe_sprite.vx = -180
    transition_icon.vx = -180
    while (wipe_sprite.x > 80) {
        pause(20)
    }
    wipe_sprite.vx = 0
    transition_icon.vx = 0
    wipe_sprite.x = 80
    transition_icon.x = 80
    //  Small bounce in the centre
    transition_icon.y -= 3
    pause(120)
    transition_icon.y += 3
    pause(120)
    scene.setBackgroundImage(room_background)
    if (selected_pet == 0) {
        cat_icon.setPosition(80, 72)
    } else {
        corgi_icon.setPosition(145, 72)
        return_door.setPosition(145, 54)
    }
    
    pause(150)
    wipe_sprite.vx = -180
    transition_icon.vx = -180
    while (wipe_sprite.x > -80) {
        pause(20)
    }
    transition_icon.destroy()
    wipe_sprite.destroy()
    if (selected_pet == 1) {
        smooth_move_to_x(80, 24)
        return_door.setImage(dog_door_half)
        pause(180)
        return_door.setImage(dog_door_closed)
        pause(180)
    }
    
    return_door.destroy()
}

function play_with_cat() {
    //  No door: the cat goes to another indoor room
    cat_icon.sayText("Play time!", 700)
    pause(700)
    wipe_to_play_scene()
}

//  Temporary pause before adding the cat wand
function play_with_dog() {
    let door_sprite = sprites.create(dog_door_closed, SpriteKind.Projectile)
    door_sprite.setPosition(145, 54)
    door_sprite.z = -1
    corgi_icon.sayText("Walk time!", 700)
    pause(500)
    //  Open the door
    door_sprite.setImage(dog_door_half)
    pause(200)
    door_sprite.setImage(dog_door_open)
    pause(200)
    //  Corgi walks completely outside
    smooth_move_to_x(190, 30)
    //  Close the door
    door_sprite.setImage(dog_door_half)
    pause(180)
    door_sprite.setImage(dog_door_closed)
    pause(180)
    door_sprite.destroy()
    wipe_to_play_scene()
}

//  Temporary pause before adding the ball
function cat_wand_action() {
    let start_x = cat_icon.x
    let start_y = cat_icon.y
    let wand_up = image.create(48, 32)
    wand_up.fillRect(40, 13, 8, 7, 8)
    wand_up.fillRect(31, 12, 10, 9, 4)
    wand_up.fillRect(27, 14, 6, 3, 4)
    wand_up.drawLine(29, 15, 5, 5, 15)
    wand_up.drawLine(5, 5, 5, 13, 15)
    wand_up.fillRect(3, 13, 5, 5, 3)
    let wand_down = image.create(48, 32)
    wand_down.fillRect(40, 13, 8, 7, 8)
    wand_down.fillRect(31, 12, 10, 9, 4)
    wand_down.fillRect(27, 14, 6, 3, 4)
    wand_down.drawLine(29, 15, 5, 24, 15)
    wand_down.fillRect(3, 24, 5, 5, 3)
    let hand_sprite = sprites.create(wand_up, SpriteKind.Projectile)
    hand_sprite.z = 10
    hand_sprite.setPosition(190, 58)
    hand_sprite.vx = -70
    while (hand_sprite.x > 132) {
        pause(20)
    }
    hand_sprite.vx = 0
    hand_sprite.x = 132
    for (let index = 0; index < 4; index++) {
        hand_sprite.setImage(wand_up)
        cat_icon.vx = 18
        cat_icon.vy = -35
        pause(150)
        hand_sprite.setImage(wand_down)
        cat_icon.vx = -18
        cat_icon.vy = 35
        pause(150)
        cat_icon.vx = 0
        cat_icon.vy = 0
        cat_icon.setPosition(start_x, start_y)
        pause(70)
    }
    cat_icon.sayText("Meow!", 500)
    pause(350)
    hand_sprite.vx = 70
    while (hand_sprite.x < 190) {
        pause(20)
    }
    hand_sprite.destroy()
    cat_icon.vx = 0
    cat_icon.vy = 0
    cat_icon.setPosition(start_x, start_y)
}

function dog_ball_action() {
    let start_x = corgi_icon.x
    let start_y = corgi_icon.y
    let ball_sprite = sprites.create(img`
..5555..
.533335.
53333335
53355335
53355335
53333335
.533335.
..5555..
`, SpriteKind.Projectile)
    ball_sprite.z = 10
    ball_sprite.setPosition(start_x + 18, start_y - 16)
    //  Ball flies in an arc
    ball_sprite.vx = 55
    ball_sprite.vy = -55
    ball_sprite.ay = 100
    while (ball_sprite.x < 115) {
        pause(20)
    }
    ball_sprite.vx = 0
    ball_sprite.vy = 0
    ball_sprite.ay = 0
    ball_sprite.setPosition(115, 74)
    pause(150)
    //  Corgi runs towards the ball
    let catch_x = ball_sprite.x - 18
    let bob_counter = 0
    corgi_icon.vx = 42
    while (corgi_icon.x < catch_x) {
        pause(40)
        bob_counter += 1
        if (bob_counter == 2) {
            corgi_icon.y = start_y - 2
        } else if (bob_counter == 4) {
            corgi_icon.y = start_y
            bob_counter = 0
        }
        
    }
    corgi_icon.vx = 0
    corgi_icon.x = catch_x
    corgi_icon.y = start_y
    //  Corgi catches the ball
    ball_sprite.setPosition(corgi_icon.x + 13, corgi_icon.y - 9)
    corgi_icon.sayText("Got it!", 600)
    pause(300)
    //  Corgi carries the ball back
    bob_counter = 0
    corgi_icon.vx = -34
    ball_sprite.vx = -34
    while (corgi_icon.x > start_x) {
        pause(40)
        bob_counter += 1
        if (bob_counter == 2) {
            corgi_icon.y = start_y - 2
        } else if (bob_counter == 4) {
            corgi_icon.y = start_y
            bob_counter = 0
        }
        
        ball_sprite.y = corgi_icon.y - 9
    }
    corgi_icon.vx = 0
    ball_sprite.vx = 0
    corgi_icon.setPosition(start_x, start_y)
    ball_sprite.setPosition(start_x + 13, start_y - 9)
    pause(250)
    ball_sprite.destroy()
}

function play_scene_action() {
    
    if (action_busy) {
        return
    }
    
    action_busy = true
    if (selected_pet == 0) {
        music.playTone(659, 80)
        music.playTone(784, 100)
        cat_wand_action()
    } else {
        music.playTone(523, 80)
        music.playTone(659, 80)
        music.playTone(784, 100)
        dog_ball_action()
    }
    
    action_busy = false
}

function exit_play_scene() {
    
    
    if (!in_play_scene || action_busy) {
        return
    }
    
    action_busy = true
    wipe_back_to_room()
    in_play_scene = false
    menu_bar.setPosition(80, 111)
    update_action_selector()
    pause(300)
    finish_correct_care()
    action_busy = false
}

function play_pet() {
    
    
    if (action_busy || in_play_scene) {
        return
    }
    
    action_busy = true
    menu_bar.setPosition(-100, -100)
    action_selector.setPosition(-100, -100)
    if (selected_pet == 0) {
        play_with_cat()
    } else {
        play_with_dog()
    }
    
    in_play_scene = true
    if (selected_pet == 0) {
        cat_icon.sayText("A: PLAY  B: BACK", 1200)
    } else {
        corgi_icon.sayText("A: PLAY  B: BACK", 1200)
    }
    
    action_busy = false
}

game.onUpdateInterval(500, function sleep_breathing() {
    let sleeping_pet: Sprite;
    if (!in_rest_scene) {
        return
    }
    
    if (selected_pet == 0) {
        sleeping_pet = cat_icon
    } else {
        sleeping_pet = corgi_icon
    }
    
    if (sleeping_pet.y == 72) {
        sleeping_pet.y = 71
    } else {
        sleeping_pet.y = 72
    }
    
})
function rest_pet() {
    
    
    if (action_busy || in_rest_scene) {
        return
    }
    
    action_busy = true
    //  Hide the menu
    menu_bar.setPosition(-100, -100)
    action_selector.setPosition(-100, -100)
    //  Pet walks to the bed
    smooth_move_to_x(122, 18)
    //  Change the room into night colours
    let sleep_background = room_background.clone()
    sleep_background.replace(1, 12)
    sleep_background.replace(13, 11)
    sleep_background.replace(9, 8)
    scene.setBackgroundImage(sleep_background)
    pause(300)
    //  Pet sleeps on the bed
    if (selected_pet == 0) {
        cat_icon.setPosition(122, 72)
        cat_icon.setImage(cat_sleep_image)
        cat_icon.sayText("Zzz...", 100000)
    } else {
        corgi_icon.setPosition(122, 72)
        corgi_icon.setImage(corgi_sleep_image)
        corgi_icon.sayText("Zzz...", 100000)
    }
    
    in_rest_scene = true
}

function wake_pet() {
    
    
    if (!in_rest_scene) {
        return
    }
    
    in_rest_scene = false
    //  Remove the Zzz bubble
    //  Restore open eyes and remove the Zzz bubble
    if (selected_pet == 0) {
        cat_icon.setImage(cat_awake_image)
        cat_icon.sayText("", 1)
    } else {
        corgi_icon.setImage(corgi_awake_image)
        corgi_icon.sayText("", 1)
    }
    
    pause(100)
    //  Change back to the daytime room
    scene.setBackgroundImage(room_background)
    pause(250)
    //  Pet walks back to the centre
    smooth_move_to_x(80, 18)
    if (selected_pet == 0) {
        cat_icon.setPosition(80, 72)
    } else {
        corgi_icon.setPosition(80, 72)
    }
    
    //  Show the action menu again
    menu_bar.setPosition(80, 111)
    update_action_selector()
    pause(300)
    finish_correct_care()
    action_busy = false
}

function perform_action() {
    
    
    
    if (action_busy || !need_active) {
        return
    }
    
    need_active = false
    //  Preferred action: increase the bond streak
    if (action_choice == pet_need) {
        care_streak += 1
    } else {
        //  Another action is still allowed
        care_streak = 0
        action_busy = true
        show_wrong_reaction()
        action_busy = false
    }
    
    if (action_choice == 0) {
        feed_pet()
    } else if (action_choice == 1) {
        play_pet()
    } else {
        rest_pet()
    }
    
}

function enter_room() {
    
    
    if (in_room) {
        return
    }
    
    in_room = true
    scene.setBackgroundImage(room_background)
    menu_bar.setPosition(80, 111)
    action_selector.setPosition(27, 111)
    if (selected_pet == 0) {
        cat_icon.setPosition(80, 72)
        corgi_icon.setPosition(-50, -50)
    } else {
        cat_icon.setPosition(-50, -50)
        corgi_icon.setPosition(80, 72)
    }
    
    action_busy = true
    game.showLongText("Watch your pet. Use LEFT and RIGHT to choose, then press A.", DialogLayout.Bottom)
    pause(300)
    choose_new_need()
    action_busy = false
}

controller.left.onEvent(ControllerButtonEvent.Pressed, function move_left() {
    
    
    if (action_busy) {
        return
    }
    
    if (in_play_scene) {
        return
    }
    
    if (in_room) {
        action_choice -= 1
        if (action_choice < 0) {
            action_choice = 2
        }
        
        update_action_selector()
        return
    }
    
    if (selection_finished) {
        return
    }
    
    selected_pet = 0
    selector.setPosition(42, 66)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function move_right() {
    
    
    if (action_busy) {
        return
    }
    
    if (in_play_scene) {
        return
    }
    
    if (in_room) {
        action_choice += 1
        if (action_choice > 2) {
            action_choice = 0
        }
        
        update_action_selector()
        return
    }
    
    if (selection_finished) {
        return
    }
    
    selected_pet = 1
    selector.setPosition(118, 66)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function choose_pet() {
    
    if (in_play_scene) {
        play_scene_action()
        return
    }
    
    if (in_room) {
        perform_action()
        return
    }
    
    if (selection_finished) {
        enter_room()
        return
    }
    
    selection_finished = true
    let confirm_background = image.create(160, 120)
    confirm_background.fill(7)
    confirm_background.fillRect(0, 0, 160, 18, 8)
    confirm_background.print("YOUR PET", 56, 5, 1)
    confirm_background.print("A: CONTINUE", 47, 99, 15)
    confirm_background.print("B: GO BACK", 50, 109, 15)
    scene.setBackgroundImage(confirm_background)
    selector.setPosition(-50, -50)
    if (selected_pet == 0) {
        cat_icon.setPosition(80, 62)
        corgi_icon.setPosition(-50, -50)
        confirm_background.print("BLUE CAT", 56, 22, 15)
    } else {
        cat_icon.setPosition(-50, -50)
        corgi_icon.setPosition(80, 62)
        confirm_background.print("CORGI", 65, 22, 15)
    }
    
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function return_to_selection() {
    
    if (in_rest_scene) {
        wake_pet()
        return
    }
    
    if (in_play_scene) {
        exit_play_scene()
        return
    }
    
    //  B only returns from the confirmation screen
    if (!selection_finished || in_room) {
        return
    }
    
    selection_finished = false
    scene.setBackgroundImage(selection_background)
    cat_icon.setPosition(42, 66)
    corgi_icon.setPosition(118, 66)
    if (selected_pet == 0) {
        selector.setPosition(42, 66)
    } else {
        selector.setPosition(118, 66)
    }
    
})
//  Indoor room background
let room_background = image.create(160, 120)
room_background.fill(1)
// Floor
room_background.fillRect(0, 78, 160, 42, 13)
room_background.fillRect(0, 75, 160, 3, 15)
// Window
room_background.fillRect(11, 12, 52, 43, 15)
room_background.fillRect(15, 16, 44, 35, 9)
//  Finish the window
room_background.fillRect(35, 16, 3, 35, 15)
room_background.fillRect(15, 32, 44, 3, 15)
//  Closed door on the right
room_background.fillRect(132, 27, 26, 51, 15)
room_background.fillRect(136, 31, 18, 47, 14)
room_background.fillRect(149, 54, 2, 2, 5)
//  Room rug
room_background.fillRect(47, 91, 66, 22, 3)
room_background.drawRect(47, 91, 66, 22, 15)
//  Pet bed
room_background.fillRect(105, 78, 42, 18, 15)
room_background.fillRect(109, 81, 34, 12, 11)
//  Outdoor garden for the corgi
let garden_background = image.create(160, 120)
garden_background.fill(9)
//  Grass
garden_background.fillRect(0, 70, 160, 50, 6)
garden_background.fillRect(0, 70, 160, 4, 7)
//  Sun
garden_background.fillRect(128, 10, 16, 16, 5)
garden_background.fillRect(124, 14, 24, 8, 5)
//  Clouds
garden_background.fillRect(15, 18, 30, 8, 1)
garden_background.fillRect(22, 13, 16, 14, 1)
garden_background.fillRect(68, 28, 34, 7, 1)
garden_background.fillRect(76, 23, 18, 12, 1)
//  Fence
garden_background.fillRect(0, 57, 160, 4, 14)
garden_background.fillRect(8, 48, 5, 25, 14)
garden_background.fillRect(38, 48, 5, 25, 14)
garden_background.fillRect(68, 48, 5, 25, 14)
garden_background.fillRect(98, 48, 5, 25, 14)
garden_background.fillRect(128, 48, 5, 25, 14)
//  Indoor playroom for the cat
let cat_play_background = image.create(160, 120)
cat_play_background.fill(1)
//  Floor and rug
cat_play_background.fillRect(0, 78, 160, 42, 13)
cat_play_background.fillRect(0, 75, 160, 3, 15)
cat_play_background.fillRect(38, 92, 74, 20, 3)
cat_play_background.drawRect(38, 92, 74, 20, 15)
//  Wall shelf
cat_play_background.fillRect(12, 27, 48, 4, 15)
cat_play_background.fillRect(17, 31, 4, 12, 15)
cat_play_background.fillRect(51, 31, 4, 12, 15)
//  Cat tree
cat_play_background.fillRect(122, 38, 7, 50, 14)
cat_play_background.fillRect(105, 35, 40, 6, 15)
cat_play_background.fillRect(111, 55, 30, 25, 15)
cat_play_background.fillRect(115, 59, 22, 17, 11)
cat_play_background.fillRect(101, 84, 45, 6, 15)
//  Hanging toy
cat_play_background.drawLine(25, 31, 25, 59, 15)
cat_play_background.fillRect(22, 59, 7, 7, 5)

