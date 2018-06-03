# Circle Game
Click on the circle as soon as it appears miss then **gameover** don't click in time then **gameover**
More successful clicks means a smaller target and a shorter time to click

## Issues:
- [x] Circle goes off screen
- [x] Misclick not working

## Todo:
- [x] setInterval dot change (setInterval bottom of move func, clearInterval at top) if function with interval runs gameOver
- [x] After x amount of clicks shrink circle, set interval time smaller, change score multiplyer
- [x] fadeOut in sync with timeout
- [ ] **MENU** <br>
    * Toggle gameOver on: timeout, miss
    * Toggle fadeout
    * Sliders for initial interval time and width & height
    * Difficulty buttons set sliders and submit at pre defined points
    * Modul with info on effect of menu items
- [ ] Give instructions through modal then Ajax to refresh frame on gameover
- [ ] Disable Misclick
- [ ] Swap functions to not include setInterval on toggle button for timed
- [ ] Toggle button for "mania" untimed, unlimited amount of circles, test accuracy (limited amount of circles)
### Todo extra:
- [ ] Sliders for initial interval time and size
- [ ] Pre defined themes on drop down in menu
- [ ] New game mode multiple circles

### Notes:
Modal instructions & settings <br>
Main color hex: #c20000 <br>
Font: ```<link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">``` <br>
https://fonts.google.com/?selection.family=PT+Sans
