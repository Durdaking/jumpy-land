scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    if (Level == 0) {
        tiles.placeOnTile(Player_, tiles.getTileLocation(1, 14))
        info.changeLifeBy(-1)
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let Place_Player = 0
let Level = 0
let Player_: Sprite = null
scene.setBackgroundImage(assets.image`Background 1`)
Player_ = sprites.create(assets.image`Player Skin Red`, SpriteKind.Player)
controller.moveSprite(Player_, 100, 0)
info.setLife(5)
Player_.ay = 600
scene.cameraFollowSprite(Player_)
forever(function () {
    if (Level == 0) {
        tiles.setCurrentTilemap(tilemap`Tilemap 1`)
    }
})
forever(function () {
    if (Place_Player == 0) {
        Place_Player += 1
        tiles.placeOnTile(Player_, tiles.getTileLocation(1, 14))
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        if (Player_.isHittingTile(CollisionDirection.Bottom)) {
            Player_.vy = -200
        }
    }
    if (controller.A.isPressed()) {
        if (Player_.isHittingTile(CollisionDirection.Bottom)) {
            Player_.vy = -200
        }
    }
})
