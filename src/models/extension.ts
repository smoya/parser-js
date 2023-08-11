import type { BaseModel } from './base';

/**
 * Represents an Specification Extension.
 */
export interface ExtensionInterface<T = any> extends BaseModel {
  id(): string;
  value<V = T>(): V;
}
