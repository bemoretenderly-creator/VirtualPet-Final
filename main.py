image.set_palette(hex("000000fffaf0b77b68ff93c4e5b47ef5c451249ca3e8f2ed003fad87f2ff8e2ec47b899e56647ba5b2c5d9a066293244"))

scene.set_background_color(8)
game.splash("MY VIRTUAL PET", "Press A to start")

# Pet selection background
selection_background = image.create(160, 120)
selection_background.fill(7)

# Top title bar
selection_background.fill_rect(0, 0, 160, 18, 8)
selection_background.print("CHOOSE YOUR PET", 35, 5, 1)

# Two pet cards
selection_background.fill_rect(5, 23, 74, 92, 1)
selection_background.fill_rect(81, 23, 74, 92, 1)

selection_background.draw_rect(5, 23, 74, 92, 15)
selection_background.draw_rect(81, 23, 74, 92, 15)

# Pet names
selection_background.print("BLUE CAT", 18, 103, 15)
selection_background.print("CORGI", 103, 103, 15)

scene.set_background_image(selection_background)

# Blue cat
cat_icon = sprites.create(img("""
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
"""), SpriteKind.player)

# Corgi
corgi_icon = sprites.create(img("""
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
"""), SpriteKind.player)

cat_icon.set_position(42, 66)
corgi_icon.set_position(118, 66)
corgi_icon.set_scale(1.25, ScaleAnchor.MIDDLE)

# Awake and sleeping pet images
cat_awake_image = cat_icon.image.clone()
corgi_awake_image = corgi_icon.image.clone()

cat_sleep_image = cat_awake_image.clone()
cat_sleep_image.fill_rect(6, 14, 6, 5, 13)
cat_sleep_image.fill_rect(20, 14, 6, 5, 13)
cat_sleep_image.draw_line(7, 17, 10, 17, 15)
cat_sleep_image.draw_line(21, 17, 24, 17, 15)

corgi_sleep_image = corgi_awake_image.clone()
corgi_sleep_image.fill_rect(12, 13, 3, 3, 1)
corgi_sleep_image.fill_rect(21, 13, 3, 3, 1)
corgi_sleep_image.draw_line(12, 14, 14, 14, 15)
corgi_sleep_image.draw_line(21, 14, 23, 14, 15)

# Yellow selection frame
frame_image = image.create(46, 58)
frame_image.draw_rect(0, 0, 45, 57, 5)
selector = sprites.create(frame_image, SpriteKind.projectile)
selector.set_position(42, 66)

# Room action menu
menu_image = image.create(160, 18)
menu_image.fill(1)
menu_image.draw_line(0, 0, 159, 0, 15)
menu_image.print("FEED", 14, 6, 15)
menu_image.print("PLAY", 68, 6, 15)
menu_image.print("REST", 122, 6, 15)

menu_bar = sprites.create(menu_image, SpriteKind.projectile)
menu_bar.set_position(-100, -100)

action_frame = image.create(44, 16)
action_frame.draw_rect(0, 0, 43, 15, 5)

action_selector = sprites.create(
    action_frame,
    SpriteKind.projectile
)
action_selector.set_position(-100, -100)

# Game-state variables keep the same controller buttons meaningful across
# selection, the main room, play scenes, and rest. action_busy acts as a lock
# so a second button press cannot interrupt an animation already in progress.
selected_pet = 0
selection_finished = False
in_room = False
action_choice = 0
action_busy = False
in_play_scene = False
in_rest_scene = False

# The pet's need is deliberately hidden. The player reads behavioural clues
# instead of a status bar; care_streak rewards three correct observations.
pet_need = -1
need_active = False
care_streak = 0

def update_action_selector():
    if action_choice == 0:
        action_selector.set_position(27, 111)
    elif action_choice == 1:
        action_selector.set_position(80, 111)
    else:
        action_selector.set_position(133, 111)

def move_left():
    global selected_pet
    global action_choice
    if action_busy:
        return
    if in_play_scene:
        return    

    if in_room:
        action_choice -= 1

        if action_choice < 0:
            action_choice = 2

        update_action_selector()
        return

    if selection_finished:
        return

    selected_pet = 0
    selector.set_position(42, 66)


def move_right():
    global selected_pet
    global action_choice
    if action_busy:
        return
    if in_play_scene:
        return       

    if in_room:
        action_choice += 1

        if action_choice > 2:
            action_choice = 0

        update_action_selector()
        return

    if selection_finished:
        return

    selected_pet = 1
    selector.set_position(118, 66)
# Move whichever pet was selected without duplicating the walking logic.
# Selecting the sprite inside the function also keeps MakeCode Python's type
# inference reliable; a generic sprite parameter caused attribute errors.
def smooth_move_to_x(target_x, speed):
    if selected_pet == 0:
        moving_pet = cat_icon
    else:
        moving_pet = corgi_icon

    if moving_pet.x < target_x:
        moving_pet.vx = speed

        while moving_pet.x < target_x:
            pause(20)

    else:
        moving_pet.vx = 0 - speed

        while moving_pet.x > target_x:
            pause(20)

    moving_pet.vx = 0
    moving_pet.x = target_x
# Translate the hidden need into a small, species-specific visual clue.
# The pet always returns to its starting position after the clue finishes.
def show_need_clue():
    if selected_pet == 0:
        clue_pet = cat_icon
    else:
        clue_pet = corgi_icon

    start_x = clue_pet.x
    start_y = clue_pet.y

    if pet_need == 0:
        # Hungry: slowly moves towards the feeding side
        for index in range(2):
            clue_pet.x -= 3
            clue_pet.y += 1
            pause(180)
            clue_pet.y -= 1
            pause(180)

    elif pet_need == 1:
        # Playful: cat wiggles, corgi jumps
        if selected_pet == 0:
            for index in range(2):
                clue_pet.x -= 3
                pause(120)
                clue_pet.x += 6
                pause(120)
                clue_pet.x -= 3
                pause(120)
        else:
            for index in range(2):
                clue_pet.y -= 4
                pause(140)
                clue_pet.y += 4
                pause(140)

    else:
        # Tired: briefly closes its eyes
        if selected_pet == 0:
            clue_pet.set_image(cat_sleep_image)
        else:
            clue_pet.set_image(corgi_sleep_image)

        clue_pet.y += 2
        clue_pet.say_text("z...", 700)
        pause(700)

        if selected_pet == 0:
            clue_pet.set_image(cat_awake_image)
        else:
            clue_pet.set_image(corgi_awake_image)

    clue_pet.set_position(start_x, start_y)

def show_wrong_reaction():
    if selected_pet == 0:
        reaction_pet = cat_icon
    else:
        reaction_pet = corgi_icon

    start_x = reaction_pet.x
    start_y = reaction_pet.y

    # A small confused head shake
    for index in range(2):
        reaction_pet.x = start_x - 3
        pause(110)
        reaction_pet.x = start_x + 3
        pause(110)

    reaction_pet.set_position(start_x, start_y)
    music.play_tone(165, 100)
    music.play_tone(131, 140)
    reaction_pet.say_text("?", 500)
    pause(500)
def show_bond_moment():
    if selected_pet == 0:
        bond_pet = cat_icon
    else:
        bond_pet = corgi_icon

    heart_sprite = sprites.create(img("""
.33.33.
3333333
3333333
.33333.
..333..
...3...
"""), SpriteKind.projectile)

    heart_sprite.z = 20
    heart_sprite.set_position(
        bond_pet.x + 20,
        bond_pet.y - 22
    )
    heart_sprite.vy = -8
    music.play_tone(523, 80)
    music.play_tone(659, 80)
    music.play_tone(784, 120)
    if selected_pet == 0:
        # Blue cat gives a slow blink
        bond_pet.set_image(cat_sleep_image)
        bond_pet.say_text("Purr...", 800)
        pause(400)
        bond_pet.set_image(cat_awake_image)
        pause(400)
    else:
        # Corgi does an excited wiggle
        start_x = bond_pet.x

        for index in range(3):
            bond_pet.x = start_x - 3
            pause(90)
            bond_pet.x = start_x + 3
            pause(90)

        bond_pet.x = start_x
        bond_pet.say_text("Yay!", 600)
        pause(600)

    heart_sprite.destroy()


def finish_correct_care():
    global care_streak

    if care_streak >= 3:
        show_bond_moment()
        care_streak = 0

    pause(300)
    choose_new_need()
# Pick the next hidden need and prevent an immediate repeat, which makes the
# interaction loop feel varied while keeping all three actions equally possible.
def choose_new_need():
    global pet_need
    global need_active

    new_need = randint(0, 2)

    # Do not immediately repeat the same need
    if new_need == pet_need:
        new_need += 1

        if new_need > 2:
            new_need = 0

    pet_need = new_need
    need_active = True
    show_need_clue()
def feed_pet():
    global action_busy

    if action_busy:
        return

    action_busy = True

    # Blue food bowl
    bowl_sprite = sprites.create(img("""
........................
..ffffffffffffffffffff..
.f99999999999999999999f.
.f98888888888888888889f.
..f888888888888888888f..
...f8888888888888888f...
....ffffffffffffffff....
........................
"""), SpriteKind.food)

    bowl_sprite.set_position(27, 94)

    if selected_pet == 0:
        pet = cat_icon

        # Salmon for the cat
        food_sprite = sprites.create(img("""
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
"""), SpriteKind.food)

        food_sprite.set_position(27, 84)

    else:
        pet = corgi_icon

        # Bone for the corgi
        food_sprite = sprites.create(img("""
....................
..ff..........ff....
.f11f........f11f...
f1111ffffffff1111f..
f1111111111111111f..
.f11f........f11f...
..ff..........ff....
....................
"""), SpriteKind.food)

        food_sprite.set_position(27, 86)

    start_x = pet.x

    # Food jumps above the bowl
    for index in range(3):
        food_sprite.y -= 3
        pause(130)
        food_sprite.y += 3
        pause(130)

    # Pet walks towards the bowl
    smooth_move_to_x(64, 22)

    # Food is eaten
    food_sprite.destroy()
    music.play_tone(523, 100)
    music.play_tone(659, 140)
    pet.say_text("Yum!", 700)

    # Happy jump
    for index in range(2):
        pet.y -= 4
        pause(120)
        pet.y += 4
        pause(120)

    bowl_sprite.destroy()

    # Pet returns to the centre
    smooth_move_to_x(start_x, 22)
    pause(300)
    finish_correct_care()
    action_busy = False

# Door images used only by the corgi
dog_door_closed = image.create(24, 48)
dog_door_closed.fill(15)
dog_door_closed.fill_rect(3, 3, 18, 45, 14)
dog_door_closed.fill_rect(17, 24, 2, 2, 5)

dog_door_half = image.create(24, 48)
dog_door_half.fill(15)
dog_door_half.fill_rect(11, 3, 10, 45, 14)
dog_door_half.fill_rect(18, 24, 2, 2, 5)

dog_door_open = image.create(24, 48)
dog_door_open.fill(15)
dog_door_open.fill_rect(19, 3, 3, 45, 14)

# Blue cat transition head
cat_transition_head = img("""
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
""")

# Corgi transition head
corgi_transition_head = img("""
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
""")

# Cover the scene with a moving colour panel and the selected pet's face.
# The background changes while the screen is covered to avoid a hard cut.
def wipe_to_play_scene():
    wipe_image = image.create(160, 120)
    wipe_image.fill(8)

    wipe_sprite = sprites.create(
        wipe_image,
        SpriteKind.projectile
    )

    if selected_pet == 0:
        transition_icon = sprites.create(
            cat_transition_head,
            SpriteKind.projectile
        )
    else:
        transition_icon = sprites.create(
            corgi_transition_head,
            SpriteKind.projectile
        )

    wipe_sprite.z = 100
    transition_icon.z = 101
    transition_icon.set_scale(2, ScaleAnchor.MIDDLE)

    wipe_sprite.set_position(-80, 60)
    transition_icon.set_position(-80, 60)

    wipe_sprite.vx = 180
    transition_icon.vx = 180

    while wipe_sprite.x < 80:
        pause(20)

    wipe_sprite.vx = 0
    transition_icon.vx = 0

    wipe_sprite.x = 80
    transition_icon.x = 80

    # Small bounce in the centre
    transition_icon.y -= 3
    pause(120)
    transition_icon.y += 3
    pause(120)

    if selected_pet == 0:
        scene.set_background_image(cat_play_background)
        cat_icon.set_position(80, 72)
    else:
        scene.set_background_image(garden_background)
        corgi_icon.set_position(30, 78)

    pause(150)

    wipe_sprite.vx = 180
    transition_icon.vx = 180

    while wipe_sprite.x < 240:
        pause(20)

    transition_icon.destroy()
    wipe_sprite.destroy()

# Reverse the wipe when returning. The corgi also walks back through the door,
# while the cat returns directly because its playroom is still indoors.
def wipe_back_to_room():
    return_door = sprites.create(
        dog_door_open,
        SpriteKind.projectile
    )

    return_door.set_position(-100, -100)
    return_door.z = -1

    wipe_image = image.create(160, 120)
    wipe_image.fill(8)

    wipe_sprite = sprites.create(
        wipe_image,
        SpriteKind.projectile
    )

    if selected_pet == 0:
        transition_icon = sprites.create(
            cat_transition_head,
            SpriteKind.projectile
        )
    else:
        transition_icon = sprites.create(
            corgi_transition_head,
            SpriteKind.projectile
        )

    wipe_sprite.z = 100
    transition_icon.z = 101
    transition_icon.set_scale(2, ScaleAnchor.MIDDLE)

    wipe_sprite.set_position(240, 60)
    transition_icon.set_position(240, 60)

    wipe_sprite.vx = -180
    transition_icon.vx = -180

    while wipe_sprite.x > 80:
        pause(20)

    wipe_sprite.vx = 0
    transition_icon.vx = 0

    wipe_sprite.x = 80
    transition_icon.x = 80

    # Small bounce in the centre
    transition_icon.y -= 3
    pause(120)
    transition_icon.y += 3
    pause(120)

    scene.set_background_image(room_background)

    if selected_pet == 0:
        cat_icon.set_position(80, 72)
    else:
        corgi_icon.set_position(145, 72)
        return_door.set_position(145, 54)

    pause(150)

    wipe_sprite.vx = -180
    transition_icon.vx = -180

    while wipe_sprite.x > -80:
        pause(20)

    transition_icon.destroy()
    wipe_sprite.destroy()

    if selected_pet == 1:
        smooth_move_to_x(80, 24)

        return_door.set_image(dog_door_half)
        pause(180)

        return_door.set_image(dog_door_closed)
        pause(180)

    return_door.destroy()

def play_with_cat():
    # The cat moves to a separate indoor playroom rather than going outdoors.
    cat_icon.say_text("Play time!", 700)
    pause(700)

    wipe_to_play_scene()


def play_with_dog():
    door_sprite = sprites.create(
        dog_door_closed,
        SpriteKind.projectile
    )

    door_sprite.set_position(145, 54)
    door_sprite.z = -1

    corgi_icon.say_text("Walk time!", 700)
    pause(500)

    # Open the door
    door_sprite.set_image(dog_door_half)
    pause(200)

    door_sprite.set_image(dog_door_open)
    pause(200)

    # Corgi walks completely outside
    smooth_move_to_x(190, 30)

    # Close the door
    door_sprite.set_image(dog_door_half)
    pause(180)

    door_sprite.set_image(dog_door_closed)
    pause(180)

    door_sprite.destroy()

    wipe_to_play_scene()



# A hand and wand enter from the right. Alternating wand images and velocity
# changes make the cat follow the toy before both return to their start points.
def cat_wand_action():
    start_x = cat_icon.x
    start_y = cat_icon.y

    wand_up = image.create(48, 32)
    wand_up.fill_rect(40, 13, 8, 7, 8)
    wand_up.fill_rect(31, 12, 10, 9, 4)
    wand_up.fill_rect(27, 14, 6, 3, 4)
    wand_up.draw_line(29, 15, 5, 5, 15)
    wand_up.draw_line(5, 5, 5, 13, 15)
    wand_up.fill_rect(3, 13, 5, 5, 3)

    wand_down = image.create(48, 32)
    wand_down.fill_rect(40, 13, 8, 7, 8)
    wand_down.fill_rect(31, 12, 10, 9, 4)
    wand_down.fill_rect(27, 14, 6, 3, 4)
    wand_down.draw_line(29, 15, 5, 24, 15)
    wand_down.fill_rect(3, 24, 5, 5, 3)

    hand_sprite = sprites.create(
        wand_up,
        SpriteKind.projectile
    )

    hand_sprite.z = 10
    hand_sprite.set_position(190, 58)
    hand_sprite.vx = -70

    while hand_sprite.x > 132:
        pause(20)

    hand_sprite.vx = 0
    hand_sprite.x = 132

    for index in range(4):
        hand_sprite.set_image(wand_up)
        cat_icon.vx = 18
        cat_icon.vy = -35
        pause(150)

        hand_sprite.set_image(wand_down)
        cat_icon.vx = -18
        cat_icon.vy = 35
        pause(150)

        cat_icon.vx = 0
        cat_icon.vy = 0
        cat_icon.set_position(start_x, start_y)
        pause(70)

    cat_icon.say_text("Meow!", 500)
    pause(350)

    hand_sprite.vx = 70

    while hand_sprite.x < 190:
        pause(20)

    hand_sprite.destroy()

    cat_icon.vx = 0
    cat_icon.vy = 0
    cat_icon.set_position(start_x, start_y)

# The ball uses acceleration to create an arc; the corgi then runs to catch it
# and carries it back while a small vertical bob suggests a running gait.
def dog_ball_action():
    start_x = corgi_icon.x
    start_y = corgi_icon.y

    ball_sprite = sprites.create(img("""
..5555..
.533335.
53333335
53355335
53355335
53333335
.533335.
..5555..
"""), SpriteKind.projectile)

    ball_sprite.z = 10
    ball_sprite.set_position(
        start_x + 18,
        start_y - 16
    )

    # Ball flies in an arc
    ball_sprite.vx = 55
    ball_sprite.vy = -55
    ball_sprite.ay = 100

    while ball_sprite.x < 115:
        pause(20)

    ball_sprite.vx = 0
    ball_sprite.vy = 0
    ball_sprite.ay = 0
    ball_sprite.set_position(115, 74)
    pause(150)

    # Corgi runs towards the ball
    catch_x = ball_sprite.x - 18
    bob_counter = 0
    corgi_icon.vx = 42

    while corgi_icon.x < catch_x:
        pause(40)
        bob_counter += 1

        if bob_counter == 2:
            corgi_icon.y = start_y - 2
        elif bob_counter == 4:
            corgi_icon.y = start_y
            bob_counter = 0

    corgi_icon.vx = 0
    corgi_icon.x = catch_x
    corgi_icon.y = start_y

    # Corgi catches the ball
    ball_sprite.set_position(
        corgi_icon.x + 13,
        corgi_icon.y - 9
    )

    corgi_icon.say_text("Got it!", 600)
    pause(300)

    # Corgi carries the ball back
    bob_counter = 0
    corgi_icon.vx = -34
    ball_sprite.vx = -34

    while corgi_icon.x > start_x:
        pause(40)
        bob_counter += 1

        if bob_counter == 2:
            corgi_icon.y = start_y - 2
        elif bob_counter == 4:
            corgi_icon.y = start_y
            bob_counter = 0

        ball_sprite.y = corgi_icon.y - 9

    corgi_icon.vx = 0
    ball_sprite.vx = 0

    corgi_icon.set_position(start_x, start_y)
    ball_sprite.set_position(
        start_x + 13,
        start_y - 9
    )

    pause(250)
    ball_sprite.destroy()

# A has a different interaction in each pet's dedicated play environment.
def play_scene_action():
    global action_busy

    if action_busy:
        return

    action_busy = True

    if selected_pet == 0:
        music.play_tone(659, 80)
        music.play_tone(784, 100)
        cat_wand_action()
    else:
        music.play_tone(523, 80)
        music.play_tone(659, 80)
        music.play_tone(784, 100)
        dog_ball_action()

    action_busy = False


def exit_play_scene():
    global action_busy
    global in_play_scene

    if not in_play_scene or action_busy:
        return

    action_busy = True
    wipe_back_to_room()

    in_play_scene = False
    menu_bar.set_position(80, 111)
    update_action_selector()
    pause(300)
    finish_correct_care()
    action_busy = False


def play_pet():
    global action_busy
    global in_play_scene

    if action_busy or in_play_scene:
        return

    action_busy = True

    menu_bar.set_position(-100, -100)
    action_selector.set_position(-100, -100)

    if selected_pet == 0:
        play_with_cat()
    else:
        play_with_dog()

    in_play_scene = True

    if selected_pet == 0:
        cat_icon.say_text("A: PLAY  B: BACK", 1200)
    else:
        corgi_icon.say_text("A: PLAY  B: BACK", 1200)

    action_busy = False

def sleep_breathing():
    if not in_rest_scene:
        return

    if selected_pet == 0:
        sleeping_pet = cat_icon
    else:
        sleeping_pet = corgi_icon

    if sleeping_pet.y == 72:
        sleeping_pet.y = 71
    else:
        sleeping_pet.y = 72


game.on_update_interval(500, sleep_breathing)

# Rest is a persistent state rather than a short animation. The interface is
# hidden, the palette becomes darker, and the awake image changes to closed eyes.
def rest_pet():
    global action_busy
    global in_rest_scene

    if action_busy or in_rest_scene:
        return

    action_busy = True

    # Hide the menu
    menu_bar.set_position(-100, -100)
    action_selector.set_position(-100, -100)

    # Pet walks to the bed
    smooth_move_to_x(122, 18)

    # Change the room into night colours
    sleep_background = room_background.clone()
    sleep_background.replace(1, 12)
    sleep_background.replace(13, 11)
    sleep_background.replace(9, 8)
    scene.set_background_image(sleep_background)

    pause(300)

    # Pet sleeps on the bed
    if selected_pet == 0:
        cat_icon.set_position(122, 72)
        cat_icon.set_image(cat_sleep_image)
        cat_icon.say_text("Zzz...", 100000)
    else:
        corgi_icon.set_position(122, 72)
        corgi_icon.set_image(corgi_sleep_image)
        corgi_icon.say_text("Zzz...", 100000)  
    in_rest_scene = True

# B reverses every rest-state change, then resumes the normal care loop.
def wake_pet():
    global action_busy
    global in_rest_scene

    if not in_rest_scene:
        return

    in_rest_scene = False

    # Remove the Zzz bubble
    # Restore open eyes and remove the Zzz bubble
    if selected_pet == 0:
        cat_icon.set_image(cat_awake_image)
        cat_icon.say_text("", 1)
    else:
        corgi_icon.set_image(corgi_awake_image)
        corgi_icon.say_text("", 1)

    pause(100)

    # Change back to the daytime room
    scene.set_background_image(room_background)
    pause(250)

    # Pet walks back to the centre
    smooth_move_to_x(80, 18)

    if selected_pet == 0:
        cat_icon.set_position(80, 72)
    else:
        corgi_icon.set_position(80, 72)

    # Show the action menu again
    menu_bar.set_position(80, 111)
    update_action_selector()

    pause(300)
    finish_correct_care()
    action_busy = False

# Compare the player's choice with the hidden need. A mismatch gives feedback
# but does not block the chosen action, preserving player freedom after testing
# showed that forced repetition made the game frustrating.
def perform_action():
    global action_busy
    global need_active
    global care_streak

    if action_busy or not need_active:
        return

    need_active = False

    # Preferred action: increase the bond streak
    if action_choice == pet_need:
        care_streak += 1
    else:
        # Another action is still allowed
        care_streak = 0
        action_busy = True
        show_wrong_reaction()
        action_busy = False

    if action_choice == 0:
        feed_pet()
    elif action_choice == 1:
        play_pet()
    else:
        rest_pet() 

def enter_room():
    global in_room
    global action_busy

    if in_room:
        return

    in_room = True
    scene.set_background_image(room_background)
    menu_bar.set_position(80, 111)
    action_selector.set_position(27, 111)

    if selected_pet == 0:
        cat_icon.set_position(80, 72)
        corgi_icon.set_position(-50, -50)
    else:
        cat_icon.set_position(-50, -50)
        corgi_icon.set_position(80, 72)
    
    action_busy = True

    game.show_long_text(
        "Watch your pet. Use LEFT and RIGHT to choose, then press A.",
        DialogLayout.BOTTOM
    )

    pause(300)
    choose_new_need()
    action_busy = False


def choose_pet():
    global selection_finished

    if in_play_scene:
        play_scene_action()
        return

    if in_room:
        perform_action()
        return

    if selection_finished:
        enter_room()
        return

    selection_finished = True

    confirm_background = image.create(160, 120)
    confirm_background.fill(7)
    confirm_background.fill_rect(0, 0, 160, 18, 8)
    confirm_background.print("YOUR PET", 56, 5, 1)
    confirm_background.print("A: CONTINUE", 47, 99, 15)
    confirm_background.print("B: GO BACK", 50, 109, 15)

    scene.set_background_image(confirm_background)
    selector.set_position(-50, -50)

    if selected_pet == 0:
        cat_icon.set_position(80, 62)
        corgi_icon.set_position(-50, -50)
        confirm_background.print("BLUE CAT", 56, 22, 15)
    else:
        cat_icon.set_position(-50, -50)
        corgi_icon.set_position(80, 62)
        confirm_background.print("CORGI", 65, 22, 15)


def return_to_selection():
    global selection_finished
    if in_rest_scene:
        wake_pet()
        return
    if in_play_scene:
        exit_play_scene()
        return

    # B only returns from the confirmation screen
    if not selection_finished or in_room:
        return

    selection_finished = False
    scene.set_background_image(selection_background)

    cat_icon.set_position(42, 66)
    corgi_icon.set_position(118, 66)

    if selected_pet == 0:
        selector.set_position(42, 66)
    else:
        selector.set_position(118, 66)

# Controller events are registered once. The handler functions route each press
# according to the current game state instead of creating separate controllers.
controller.left.on_event(ControllerButtonEvent.PRESSED, move_left)
controller.right.on_event(ControllerButtonEvent.PRESSED, move_right)
controller.A.on_event(ControllerButtonEvent.PRESSED, choose_pet)
controller.B.on_event(ControllerButtonEvent.PRESSED, return_to_selection)

# Indoor room background
room_background = image.create(160, 120)
room_background.fill(1)

#Floor
room_background.fill_rect(0,78,160,42,13)
room_background.fill_rect(0, 75, 160, 3, 15)

#Window
room_background.fill_rect(11,12,52,43,15)
room_background.fill_rect(15, 16, 44, 35, 9)

# Finish the window
room_background.fill_rect(35, 16, 3, 35, 15)
room_background.fill_rect(15, 32, 44, 3, 15)

# Closed door on the right
room_background.fill_rect(132, 27, 26, 51, 15)
room_background.fill_rect(136, 31, 18, 47, 14)
room_background.fill_rect(149, 54, 2, 2, 5)

# Room rug
room_background.fill_rect(47, 91, 66, 22, 3)
room_background.draw_rect(47, 91, 66, 22, 15)

# Pet bed
room_background.fill_rect(105, 78, 42, 18, 15)
room_background.fill_rect(109, 81, 34, 12, 11)


# Outdoor garden for the corgi
garden_background = image.create(160, 120)
garden_background.fill(9)

# Grass
garden_background.fill_rect(0, 70, 160, 50, 6)
garden_background.fill_rect(0, 70, 160, 4, 7)

# Sun
garden_background.fill_rect(128, 10, 16, 16, 5)
garden_background.fill_rect(124, 14, 24, 8, 5)

# Clouds
garden_background.fill_rect(15, 18, 30, 8, 1)
garden_background.fill_rect(22, 13, 16, 14, 1)
garden_background.fill_rect(68, 28, 34, 7, 1)
garden_background.fill_rect(76, 23, 18, 12, 1)

# Fence
garden_background.fill_rect(0, 57, 160, 4, 14)
garden_background.fill_rect(8, 48, 5, 25, 14)
garden_background.fill_rect(38, 48, 5, 25, 14)
garden_background.fill_rect(68, 48, 5, 25, 14)
garden_background.fill_rect(98, 48, 5, 25, 14)
garden_background.fill_rect(128, 48, 5, 25, 14)


# Indoor playroom for the cat
cat_play_background = image.create(160, 120)
cat_play_background.fill(1)

# Floor and rug
cat_play_background.fill_rect(0, 78, 160, 42, 13)
cat_play_background.fill_rect(0, 75, 160, 3, 15)
cat_play_background.fill_rect(38, 92, 74, 20, 3)
cat_play_background.draw_rect(38, 92, 74, 20, 15)

# Wall shelf
cat_play_background.fill_rect(12, 27, 48, 4, 15)
cat_play_background.fill_rect(17, 31, 4, 12, 15)
cat_play_background.fill_rect(51, 31, 4, 12, 15)

# Cat tree
cat_play_background.fill_rect(122, 38, 7, 50, 14)
cat_play_background.fill_rect(105, 35, 40, 6, 15)
cat_play_background.fill_rect(111, 55, 30, 25, 15)
cat_play_background.fill_rect(115, 59, 22, 17, 11)
cat_play_background.fill_rect(101, 84, 45, 6, 15)

# Hanging toy
cat_play_background.draw_line(25, 31, 25, 59, 15)
cat_play_background.fill_rect(22, 59, 7, 7, 5)
