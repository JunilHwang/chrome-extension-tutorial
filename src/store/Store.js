export const Store = class {
  async setter (key, value) { await this._setter(key, value); };
  async getter (key) { return await this._getter(key) };
  async _setter (key, value) {}
  async _getter (key) { return null }
}