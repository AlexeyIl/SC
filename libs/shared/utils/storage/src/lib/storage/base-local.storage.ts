import {ILocalStorage} from '@sc/shared/utils/interfaces'
import {Injectable,} from '@angular/core'

@Injectable()
export class BaseLocalStorage implements ILocalStorage {

  private readonly storage: Storage

  constructor(
  ) {
    this.storage = window.localStorage
  }

  get length(): number {
    return this.storage.length
  }

  clear(): void {
    this.storage.clear()
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key)
  }

  key(index: number): string | null {
    return this.storage.key(index)
  }

  removeItem(key: string): void {
    this.storage.removeItem(key)
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value)
  }
}