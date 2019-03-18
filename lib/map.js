const CONSTRUCTED = require('./constructed')

module.exports = class ImmutableMap extends Map {
  constructor (...args) {
    super(...args)
    this[CONSTRUCTED] = true
  }

  clear () {
    if (this.size === 0) return this

    return new ImmutableMap()
  }

  delete (key) {
    if (!this.has(key)) return this

    const that = new ImmutableMap(this)
    super.delete.call(that, key)
    return that
  }

  set (key, value) {
    if (!(CONSTRUCTED in this)) return super.set(key, value)
    if (this.get(key) === value) return this

    const that = new ImmutableMap(this)
    return super.set.call(that, key, value)
  }
}
