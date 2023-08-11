import type { BaseModel } from './base';
import type { DescriptionMixinInterface, ExtensionsMixinInterface } from './mixins';

/**
 * Represents an External Documentation Object.
 */
export interface ExternalDocumentationInterface 
  extends BaseModel, DescriptionMixinInterface, ExtensionsMixinInterface {

  url(): string;
}
