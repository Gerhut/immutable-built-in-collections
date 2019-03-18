/* eslint-env mocha */

const Set = require('../lib/set')

describe('Set', () => {
  describe('.clear()', () => {
    it('should return new instance', () => {
      const set1 = new Set(['one', 'two'])
      const set2 = set1.clear()

      set1.should.not.be.equal(set2)
      set2.size.should.be.equal(0)
    })

    it('should return the same instance', () => {
      const set1 = new Set()
      const set2 = set1.clear()

      set1.should.be.equal(set2)
    })
  })

  describe('.delete(key)', () => {
    it('should return new instance', () => {
      const set1 = new Set(['one', 'two'])
      const set2 = set1.delete('one')

      set1.should.not.be.equal(set2)
      set2.has('one').should.be.false()
    })
    it('should return the same instance', () => {
      const set1 = new Set(['one', 'two'])
      const set2 = set1.delete('three')

      set1.should.be.equal(set2)
    })
  })

  describe('.add(value)', () => {
    it('should return new instance', () => {
      const set1 = new Set(['one', 'two'])
      const set2 = set1.add('three')

      set1.should.not.be.equal(set2)
      set2.has('three').should.be.true()
    })
    it('should return the same instance', () => {
      const set1 = new Set(['one', 'two'])
      const set2 = set1.add('two')

      set1.should.be.equal(set2)
    })
  })
})
