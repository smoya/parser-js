import type { BaseModel } from './base';
import type { DescriptionMixinInterface, ExtensionsMixinInterface } from './mixins';

/**
 * Represents an Operation Reply Address Object.
 */
export interface OperationReplyAddressInterface extends BaseModel, DescriptionMixinInterface, ExtensionsMixinInterface {
  id(): string | undefined;
  location(): string;
}
