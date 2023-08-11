import type { Collection } from './collection';
import type { BindingInterface } from './binding';
import type { ExtensionsMixinInterface } from './mixins';

/**
 * Represents a collection of Binding objects.
 */
export interface BindingsInterface extends Collection<BindingInterface>, ExtensionsMixinInterface {}
