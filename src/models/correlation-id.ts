import type { BaseModel } from './base';
import type { DescriptionMixinInterface, ExtensionsMixinInterface } from './mixins';

/**
 * Represents a Correlation ID Object.
 */
export interface CorrelationIdInterface extends BaseModel, DescriptionMixinInterface, ExtensionsMixinInterface {
  location(): string | undefined;
}
