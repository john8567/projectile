function projectile () {
    projectile_bru = sprites.createProjectileFromSprite(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 f f f 5 5 5 5 5 5 
5 5 5 5 5 5 5 f f f 5 5 5 5 5 5 
5 5 5 5 5 5 5 f f f 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, player_awsome, 50, 0)
    projectile_bru.setPosition(0, Math.randomRange(0, 120))
}
function player () {
    player_awsome = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f f . . 
. . . f 2 2 2 2 2 2 2 2 2 2 f . 
. . . f 2 f f f f f f f f f . . 
. . . f 2 f . . f . . . . . . . 
. . . f 2 f . . f . . . . . . . 
. . . f 2 f f f f . . . . . . . 
. . . f 2 f . . . . . . . . . . 
. . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    player_awsome.setPosition(78, 101)
    controller.moveSprite(player_awsome, 100, 100)
}
let player_awsome: Sprite = null
let projectile_bru: Sprite = null
scene.setBackgroundColor(9)
game.onUpdate(function () {
    player()
    projectile()
})
