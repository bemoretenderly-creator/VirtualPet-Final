# VirtualPet

A pixel-art virtual pet game made in the Python editor of Microsoft MakeCode Arcade.

**Author:** Yuhong Wang  
**Play online:** [Open VirtualPet in MakeCode Arcade](https://arcade.makecode.com/S33967-80338-10558-10576)

## About the project

VirtualPet is a small pet-care game. The player can choose a blue British Shorthair cat or a corgi and look after it by selecting **Feed**, **Play**, or **Rest**.

I made this project because I wanted people who have never owned a pet to experience a small part of caring for one. The idea also came from my own experience of looking after a blue cat. I wanted the game to focus on observation and connection instead of scores.

## Main idea

The game does not show hunger, happiness, or energy bars. A real pet cannot explain its feelings with numbers, so the player has to watch its expression, movement, and sound.

For example, a hungry pet moves towards the feeding side. A playful cat wiggles, while a playful corgi jumps. A tired pet closes its eyes and shows `Zzz...`.

The pet suggests what it wants, but the player can still choose another action. If the choice does not match the pet's current need, the pet gives a short confused reaction. After three matching care choices, the player receives a bonding moment. The cat slowly blinks and purrs, while the corgi moves excitedly.

## Features

- Choose between a Blue Cat and a Corgi.
- Return to the selection screen before confirming the pet.
- Feed, play with, and rest the selected pet.
- Hidden pet needs that change and do not immediately repeat.
- Pet needs shown through movement, expression, text, and sound.
- Different food for each pet: salmon for the cat and a bone for the corgi.
- A bowl and feeding animation.
- An indoor playroom and cat wand interaction for the cat.
- An outdoor garden and ball-chasing interaction for the corgi.
- A night-time rest scene with closed eyes and breathing movement.
- Animated transitions using the selected pet's face.
- A bonding reaction after three matching care choices.

## How to play

1. Open the game and press **A** to leave the title screen.
2. Use **Left** and **Right** to choose the Blue Cat or Corgi.
3. Press **A** to open the confirmation screen.
4. Press **A** again to enter the room, or press **B** to return and choose again.
5. Watch the pet's behaviour and decide what it may need.
6. Use **Left** and **Right** to select **Feed**, **Play**, or **Rest**.
7. Press **A** to perform the selected action.
8. In a play scene, press **A** to interact and press **B** to return to the room.
9. During rest, press **B** to wake the pet.

## Controls

| Control | Function |
| --- | --- |
| Left / Right | Choose a pet or move between Feed, Play, and Rest |
| A | Confirm, perform a care action, or interact during play |
| B | Go back, leave a play scene, or wake a sleeping pet |

## Technical notes

The game was developed in the MakeCode Arcade Python editor. Controller events call different functions depending on the current game state. Variables remember which pet was selected, which action is highlighted, and whether the pet is in the room, playing, or sleeping.

One challenge was stopping button presses from interrupting an animation. I used `action_busy` to prevent two actions from running at the same time. I also used separate states for the selection screen, room, play scene, and rest scene.

The characters, backgrounds, food, toys, menus, and animations are made with MakeCode Arcade pixel images and drawing functions. The game also uses sprites, velocity, pauses, random selection, controller events, and simple sound sequences.

## Project files

| File | Purpose |
| --- | --- |
| `main.py` | Contains the game logic, pixel artwork, animations, sounds, and controls |
| `pxt.json` | Contains the MakeCode Arcade project settings |
| `README.md` | Explains the project and how to play it |

## Open the project in MakeCode Arcade

### Play the published version

Open the [MakeCode Arcade share link](https://arcade.makecode.com/S33967-80338-10558-10576) and press the play button.

### Import the source code

1. Go to [Microsoft MakeCode Arcade](https://arcade.makecode.com/).
2. Select **Import**, then **Import URL**.
3. Paste this repository URL:
   `https://github.com/bemoretenderly-creator/VirtualPet-Final`
4. Open the project in the Python editor.

## References

These videos helped me understand possible MakeCode Arcade workflows and virtual-pet game ideas:

- [Virtual Pet - MakeCode Arcade Advanced](https://www.youtube.com/watch?v=t9XP7QjvgbM)
- [Arcade Advanced Stream #118 - As CORGUY Commands](https://youtu.be/71zHQ0wapBU)

I used them as general references. The final characters, scenes, interaction flow, and care system were designed for this project.

## Testing and limitations

I tested both pets in the MakeCode Arcade browser simulator. I checked pet selection, the confirmation screen, Feed, Play, Rest, actions that match or do not match the pet's need, scene transitions, bonding reactions, and returning from the play and rest scenes.

This project is a prototype, so it does not have a save system. Progress resets when the game restarts. It has also not been tested on physical Arcade hardware. In the future, I could add saved progress, more pet behaviours, and more rooms.
