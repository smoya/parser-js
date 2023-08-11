import type { BaseModel } from './base';
import type { ExtensionsMixinInterface } from './mixins';

/**
 * Represents a binding.
 */
export interface BindingInterface<T extends Record<string, any> = Record<string, any>> extends BaseModel, ExtensionsMixinInterface {
  protocol(): string;
  version(): string;
  value<V = T>(): V;
}
