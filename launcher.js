class Launcher {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10
    }
    this.pointB = pointB
    this.launcher1 = loadImage('sprites/sling1.png')
    this.launcher2 = loadImage('sprites/sling2.png')
    this.launcher3 = loadImage('sprites/sling3.png')
    this.launcher = Constraint.create(options)
    World.add(world, this.launcher)
  }

  fly() {
    this.launcher.bodyA = null
  }

  display() {
    image(this.launcher1, 200, 20)
    image(this.launcher2, 170, 20)
    if (this.launcher.bodyA) {
      var pointA = this.launcher.bodyA.position
      var pointB = this.pointB
      push()
      stroke(48, 22, 8)
      if (pointA.x < 220) {
        strokeWeight(7)
        line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y)
        line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y)
        image(this.launcher3, pointA.x - 30, pointA.y - 5, 15, 30)
      } else {
        strokeWeight(3)
        line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y)
        line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y)
        image(this.launcher3, pointA.x - 30, pointA.y - 5, 15, 30)
      }
      pop()
    }
  }

  function attach() {
    bodyA = body
  }
}
