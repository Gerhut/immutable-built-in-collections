/* eslint-env mocha */

const Map = require('../lib/map')

describe('Map', () => {
  describe('.clear()', () => {
    it('should return new instance', () => {
      const map1 = new Map([['one', 1], ['two', 2]])
      const map2 = map1.clear()

      map1.should.not.be.equal(map2)
      map2.size.should.be.equal(0)
    })

    it('should return the same instance', () => {
      const map1 = new Map()
      const map2 = map1.clear()

      map1.should.be.equal(map2)
    })
  })

  describe('.delete(key)', () => {
    it('should return new instance', () => {
      const map1 = new Map([['one', 1], ['two', 2]])
      const map2 = map1.delete('one')

      map1.should.not.be.equal(map2)
      map2.has('one').should.be.false()
    })
    it('should return the same instance', () => {
      const map1 = new Map([['one', 1], ['two', 2]])
      const map2 = map1.delete('three')

      map1.should.be.equal(map2)
    })
  })

  describe('.set(key, value)', () => {
    it('should return new instance', () => {
      const map1 = new Map([['one', 1], ['two', 2]])
      const map2 = map1.set('three', 3)

      map1.should.not.be.equal(map2)
      map2.get('three').should.be.equal(3)
    })
    it('should return the same instance', () => {
      const map1 = new Map([['one', 1], ['two', 2]])
      const map2 = map1.set('two', 2)

      map1.should.be.equal(map2)
    })
  })
})
