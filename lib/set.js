const CONSTRUCTED = require('./constructed')

module.exports = class ImmutableSet extends Set {
  constructor (...args) {
    super(...args)
    this[CONSTRUCTED] = true
  }

  add (value) {
    if (!(CONSTRUCTED in this)) return super.add(value)
    if (this.has(value)) return this

    const that = new ImmutableSet(this)
    return super.add.call(that, value)
  }

  clear () {
    if (this.size === 0) return this

    return new ImmutableSet()
  }

  delete (value) {
    if (!this.has(value)) return this

    const that = new ImmutableSet(this)
    super.delete.call(that, value)
    return that
  }
}
