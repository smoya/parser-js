import type { BaseModel } from './base';
import type { DescriptionMixinInterface, ExtensionsMixinInterface } from './mixins';
import type { SchemaInterface } from './schema';

/**
 * Represents a Channel Parameter Object.
 */
export interface ChannelParameterInterface extends BaseModel, DescriptionMixinInterface, ExtensionsMixinInterface {
  id(): string;
  hasSchema(): boolean;
  schema(): SchemaInterface | undefined;
  hasLocation(): boolean;
  location(): string | undefined;
}
